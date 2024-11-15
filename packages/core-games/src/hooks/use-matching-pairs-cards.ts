import { CardCategory } from "@/constant/card-category";
import { CardSize } from "@/constant/card-size";
import { Card, CardId } from "@/types/card";
import { generateMatchingPairsCards } from "@/utils/generate-matching-pairs-cards";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

interface useMatchingPairsCardsProps {
  cardSize: CardSize;
  cardCategory: CardCategory;
}

type UseMatchingPairsCardsReturnType = {
  cards: Record<CardId, Card>;
  setCards: Dispatch<SetStateAction<Record<CardId, Card>>>;
  populateCards: () => void;
};

export const useMatchingPairsCards = ({
  cardCategory,
  cardSize,
}: useMatchingPairsCardsProps): UseMatchingPairsCardsReturnType => {
  const [cards, setCards] = useState<Record<CardId, Card>>({});

  const generateCards = useCallback(async () => {
    try {
      const generatedCards = await generateMatchingPairsCards({
        cardSize,
        cardCategory,
      });
      setCards(generatedCards);
    } catch (error) {
      console.error("Error generating cards:", error);
    }
  }, [cardCategory, cardSize]);

  const populateCards = useCallback(async () => {
    try {
      const generatedCards = await generateMatchingPairsCards({
        cardSize,
        cardCategory,
      });
      setCards(generatedCards);
    } catch (error) {
      console.error("Error generating cards:", error);
    }
  }, [cardCategory, cardSize]);

  useEffect(() => {
    generateCards();
  }, [generateCards]);

  return { cards, setCards, populateCards };
};
