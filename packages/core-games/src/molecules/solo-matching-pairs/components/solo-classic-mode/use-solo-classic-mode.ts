import { CardCategory } from "@/constant/card-category";
import { CardSize } from "@/constant/card-size";
import {
  CONSECUTIVE_MATCH_POINT,
  MISMATCH_MINUS_POINT,
} from "@/constant/score-system";
import { useMatchingPairsCards } from "@/hooks/use-matching-pairs-cards";
import { Card, CardId, CardStatus } from "@/types/card";
import { getBaseScore } from "@/utils/get-base-score";
import { getGridSize } from "@/utils/get-grid-size";
import { useCallback, useMemo, useState } from "react";

interface SoloClassicMode {
  cardSize: CardSize;
  cardCategory: CardCategory;
  revealCard: (cardId: CardId) => void;
  hideCard: (cardId: CardId) => void;
}

const TIMER_TO_UNHIDE_CARD = 1000;

export const useSoloClassicMode = ({
  cardCategory,
  cardSize,
  revealCard,
  hideCard,
}: SoloClassicMode) => {
  const { cards, setCards, populateCards } = useMatchingPairsCards({
    cardCategory,
    cardSize,
  });
  const [selectedCardId, setSelectedCardId] = useState<string | null>();
  const [isCheckingMatch, setIsCheckingMatch] = useState(false);
  const [moves, setMoves] = useState<number>(0);
  const [score, setScore] = useState<number>(getBaseScore(cardSize));
  const [consecutiveMatchCount, setConsecutiveMatchCount] = useState(0);
  const [matchedCardIds, setMatchedCardIds] = useState<CardId[]>([]);

  const totalPairs: number = useMemo(() => {
    const { rows, columns } = getGridSize(cardSize);
    return (rows * columns) / 2;
  }, [cardSize]);

  const isGameComplete = useMemo(
    () => matchedCardIds.length / 2 === totalPairs,
    [totalPairs, matchedCardIds.length]
  );

  const progress = useMemo(() => {
    const totalPairsMatched = matchedCardIds.length / 2;
    return Math.ceil((totalPairsMatched / totalPairs) * 100 * 100) / 100; // rounding to 2 decimal places
  }, [matchedCardIds.length, totalPairs]);

  const incrementMoves = useCallback(() => {
    setMoves((prev) => prev + 1);
  }, []);

  const resetSelection = useCallback(() => setSelectedCardId(null), []);

  const calculateScore = useCallback(
    (wasMatched: boolean) => {
      const consecutiveCount = wasMatched ? consecutiveMatchCount + 1 : 0;
      setConsecutiveMatchCount(consecutiveCount);
      if (wasMatched) {
        if (consecutiveCount > 1)
          setScore((prevScore) => prevScore + CONSECUTIVE_MATCH_POINT);
      } else {
        setScore((prevScore) => prevScore - MISMATCH_MINUS_POINT);
      }
    },
    [consecutiveMatchCount]
  );

  const onCardChange = useCallback(
    (cardId: CardId, card: Card) => {
      setCards((prevCards) => {
        const updatedCards = { ...prevCards };
        updatedCards[cardId] = card;
        return updatedCards;
      });
    },
    [setCards]
  );

  const onFirstCardSelection = useCallback(
    (cardId: CardId) => {
      revealCard(cardId);
      setSelectedCardId(cardId);
      onCardChange(cardId, {
        ...cards[cardId],
        status: CardStatus.SELECTED,
      });
    },
    [cards, onCardChange, revealCard]
  );

  const onCardsMatched = useCallback(
    async ({
      firstCard,
      secondCard,
    }: {
      firstCard: Card;
      secondCard: Card;
    }) => {
      setCards((prevCards) => ({
        ...prevCards,
        [firstCard.id]: {
          ...firstCard,
          status: CardStatus.MATCHED,
        },
        [secondCard.id]: {
          ...secondCard,
          status: CardStatus.MATCHED,
        },
      }));
      calculateScore(true);
      resetSelection();
      setMatchedCardIds((prevMatchedCardIds) => [
        ...prevMatchedCardIds,
        firstCard.id,
        secondCard.id,
      ]);
      await new Promise((resolve) => setTimeout(resolve, TIMER_TO_UNHIDE_CARD));
    },
    [calculateScore, resetSelection, setCards]
  );

  const onCardsUnmatched = useCallback(
    async ({
      firstCard,
      secondCard,
    }: {
      firstCard: Card;
      secondCard: Card;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, TIMER_TO_UNHIDE_CARD));
      hideCard(firstCard.id);
      hideCard(secondCard.id);
      setCards((prevCards) => ({
        ...prevCards,
        [firstCard.id]: {
          ...firstCard,
          status: CardStatus.HIDDEN,
        },
        [secondCard.id]: {
          ...secondCard,
          status: CardStatus.HIDDEN,
        },
      }));
      resetSelection();
      calculateScore(false);
    },
    [calculateScore, hideCard, resetSelection, setCards]
  );

  const onSecondCardSelection = useCallback(
    async (cardId: CardId) => {
      if (!selectedCardId) return;

      setIsCheckingMatch(true);
      revealCard(cardId);
      onCardChange(cardId, {
        ...cards[cardId],
        status: CardStatus.SELECTED,
      });

      const previousSelectedSourceId = cards[selectedCardId].sourceId;
      if (cards[cardId].sourceId === previousSelectedSourceId) {
        await onCardsMatched({
          firstCard: cards[selectedCardId],
          secondCard: cards[cardId],
        });
      } else {
        await onCardsUnmatched({
          firstCard: cards[selectedCardId],
          secondCard: cards[cardId],
        });
      }

      setIsCheckingMatch(false);
    },
    [
      cards,
      onCardChange,
      onCardsMatched,
      onCardsUnmatched,
      revealCard,
      selectedCardId,
    ]
  );

  const onCardClick = useCallback(
    (cardId: CardId) => {
      if (
        isCheckingMatch ||
        cards[cardId].status === CardStatus.MATCHED ||
        cardId === selectedCardId
      )
        return;
      incrementMoves();
      if (selectedCardId) {
        if (selectedCardId === cardId) return;
        onSecondCardSelection(cardId);
      } else {
        onFirstCardSelection(cardId);
      }
    },
    [
      isCheckingMatch,
      cards,
      incrementMoves,
      selectedCardId,
      onSecondCardSelection,
      onFirstCardSelection,
    ]
  );

  const onRestart = useCallback(async () => {
    await populateCards();
    setSelectedCardId(null);
    setIsCheckingMatch(false);
    setConsecutiveMatchCount(0);
    setMoves(0);
    setScore(getBaseScore(cardSize));
    setMatchedCardIds([]);
  }, [cardSize, populateCards]);

  return {
    cards,
    onCardClick,
    moves,
    score,
    onRestart,
    progress,
    isGameComplete,
  };
};
