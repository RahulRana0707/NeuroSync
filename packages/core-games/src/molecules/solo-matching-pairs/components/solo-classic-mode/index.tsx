import { useCallback, useMemo, useRef } from "react";

import "./index.css";

import { CardSize } from "@/constant/card-size";
import { getGridSize } from "@/utils/get-grid-size";
import { CardCategory } from "@/constant/card-category";
import GridCard, { type CardRef } from "@/atoms/card";
import { CardId, CardStatus } from "@/types/card";
import { AnimatePresence, motion } from "framer-motion";
import { useSoloClassicMode } from "./use-solo-classic-mode";
import DetailsPanel from "../details-panel";
import { MATCHING_PAIRS } from "@/constant/games";
import { Mode } from "@/constant/mode";
import { GameSuccess } from "@/molecules/game-success";

export interface SoloClassicModeProps {
  cardSize: CardSize;
  cardCategory: CardCategory;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  }),
};

const GAME_DETAILS = MATCHING_PAIRS[Mode.CLASSIC];

const SoloClassicMode = ({ cardSize, cardCategory }: SoloClassicModeProps) => {
  const cardsRefs = useRef<Record<CardId, CardRef>>({});

  const revealCard = useCallback((cardId: CardId) => {
    const card = cardsRefs.current[cardId];

    if (card) {
      card.reveal();
    }
  }, []);

  const hideCard = useCallback((cardId: CardId) => {
    const card = cardsRefs.current[cardId];

    if (card) {
      card.hide();
    }
  }, []);

  const {
    cards,
    onCardClick,
    moves,
    score,
    progress,
    isGameComplete,
    onRestart,
  } = useSoloClassicMode({
    cardCategory,
    cardSize,
    revealCard,
    hideCard,
  });

  const { rows, columns } = useMemo(() => getGridSize(cardSize), [cardSize]);

  return (
    <div
      className={`solo-matching-pairs-board-wrapper ${isGameComplete ? "game-complete" : ""}`}
    >
      <AnimatePresence>
        {isGameComplete ? (
          <GameSuccess moves={moves} score={score} onRestart={onRestart} />
        ) : (
          <>
            <DetailsPanel
              key="solo-classic-details-panel"
              title={GAME_DETAILS.title}
              gameName={GAME_DETAILS.gameName}
              description={GAME_DETAILS.description}
              score={score}
              movesCount={moves}
              progress={progress}
              onRestart={onRestart}
            />
            <main className="classic-mode-main-panel">
              <motion.div
                className="matching-pairs-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                  gridTemplateColumns: `repeat(${columns}, 1fr)`,
                  gridTemplateRows: `repeat(${rows}, 1fr)`,
                }}
              >
                {Object.keys(cards).map((cardId, i) => {
                  const cardStatus = cards[cardId].status;
                  const showImage =
                    cardStatus === CardStatus.SELECTED ||
                    cardStatus === CardStatus.MATCHED;
                  return (
                    <motion.div
                      key={cardId}
                      className="matching-pairs-grid-cell-wrapper"
                      variants={cardVariants}
                      custom={i}
                    >
                      <GridCard
                        ref={(cardRef) => {
                          if (cardsRefs.current && cardRef) {
                            cardsRefs.current[cardId] = cardRef;
                          }
                        }}
                        className="matching-pairs-grid-cell"
                        onClick={() => {
                          onCardClick(cardId);
                        }}
                        aria-details={cardId}
                      >
                        <AnimatePresence>
                          {cardStatus === CardStatus.HIDDEN && (
                            <h1 style={{ color: "black" }}>{i + 1}</h1>
                          )}
                          {showImage && (
                            <motion.img
                              src={cards[cardId].src}
                              alt="card-image"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              loading="eager"
                              initial={{ opacity: 0.5, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </AnimatePresence>
                      </GridCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SoloClassicMode;
