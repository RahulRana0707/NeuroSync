import { CardCategory } from "@/constant/card-category";
import { CardSize } from "@/constant/card-size";
import { useMatchingPairsCards } from "@/hooks/use-matching-pairs-cards";
import { Card, CardId, CardStatus } from "@/types/card";
import { useCallback, useState } from "react";

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
  const [cards, setCards] = useMatchingPairsCards({ cardCategory, cardSize });
  const [selectedCardId, setSelectedCardId] = useState<string | null>();
  const [isCheckingMatch, setIsCheckingMatch] = useState(false);

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
  const resetSelection = useCallback(() => setSelectedCardId(null), []);

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
      resetSelection();
      await new Promise((resolve) => setTimeout(resolve, TIMER_TO_UNHIDE_CARD));
    },
    [resetSelection, setCards]
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
    },
    [hideCard, resetSelection, setCards]
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
      if (selectedCardId) {
        if (selectedCardId === cardId) return;
        onSecondCardSelection(cardId);
      } else {
        onFirstCardSelection(cardId);
      }
    },
    [selectedCardId, onSecondCardSelection, onFirstCardSelection]
  );

  return { cards, onCardClick, isCheckingMatch };
};
