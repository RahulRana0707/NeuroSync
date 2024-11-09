import { useCallback, useMemo } from "react";

import "./index.css";

import { CardSize } from "@/constant/card-size";
import { getGridSize } from "@/utils/get-grid-size";
import { CardCategory } from "@/constant/card-category";
import { useMatchingPairsCards } from "@/hooks/use-matching-pairs-cards";
import GridCard from "@/atoms/card";
import { cardId, Card, CardStatus } from "@/types/card";
import { AnimatePresence } from "framer-motion";

export interface SoloClassicModeProps {
  cardSize: CardSize;
  cardCategory: CardCategory;
}

const SoloClassicMode = ({ cardSize, cardCategory }: SoloClassicModeProps) => {
  const [cards, setCards] = useMatchingPairsCards({ cardCategory, cardSize });
  const { rows, columns } = useMemo(() => getGridSize(cardSize), [cardSize]);

  const onCardChange = useCallback(
    (cardId: cardId, card: Card) => {
      setCards((prevCards) => ({
        ...prevCards,
        [cardId]: card,
      }));
    },
    [setCards]
  );

  const onGridCardClick = useCallback(
    (cardId: cardId) => {
      const card = cards[cardId];
      if (card.status === CardStatus.HIDDEN) {
        onCardChange(cardId, {
          ...card,
          status: CardStatus.SELECTED,
        });
      }
    },
    [cards, onCardChange]
  );

  return (
    <>
      <aside className="classic-mode-details-panel">
        <h1>Solo Matching Pairs Board details panel</h1>
      </aside>
      <main className="classic-mode-main-panel">
        <div
          className="matching-pairs-grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {Object.keys(cards).map((cardId, i) => (
            <GridCard
              key={cardId}
              cardStatus={cards[cardId].status}
              className="matching-pairs-grid-cell"
              onClick={() => {
                onGridCardClick(cardId);
              }}
            >
              <AnimatePresence>
                {cards[cardId].status === CardStatus.HIDDEN && (
                  <h1 style={{ color: "black" }}>{i}</h1>
                )}
                {cards[cardId].status === CardStatus.SELECTED && (
                  <img
                    src={cards[cardId].src}
                    alt="card-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="eager"
                  />
                )}
                {cards[cardId].status === CardStatus.MATCHED && (
                  <div className="matched-card-overlay" />
                )}
              </AnimatePresence>
            </GridCard>
          ))}
        </div>
      </main>
    </>
  );
};

export default SoloClassicMode;
