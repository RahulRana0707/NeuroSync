import { CardCategory } from "@/constant/card-category";
import { CardSize } from "@/constant/card-size";
import { Card, cardId } from "@/types/card";
import { generateMatchingPairsCards } from "@/utils/generate-matching-pairs-cards";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface useMatchingPairsCardsProps {
  cardSize: CardSize;
  cardCategory: CardCategory;
}

type UseMatchingPairsCardsReturnType = [
  Record<cardId, Card>,
  Dispatch<SetStateAction<Record<cardId, Card>>>,
];

export const useMatchingPairsCards = ({
  cardCategory,
  cardSize,
}: useMatchingPairsCardsProps): UseMatchingPairsCardsReturnType => {
  const [cards, setCards] = useState<Record<cardId, Card>>({});

  useEffect(() => {
    const generateCards = async () => {
      try {
        const generatedCards = await generateMatchingPairsCards({
          cardSize,
          cardCategory,
        });
        setCards(generatedCards);
      } catch (error) {
        console.error("Error generating cards:", error);
      }
    };

    generateCards();
  }, [cardCategory, cardSize]);

  return [cards, setCards];
};
