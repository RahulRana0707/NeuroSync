import { CardSize } from "@/constant/card-size";
import { GRID_BASED_SCORE } from "@/constant/score-system";
import { getGridSize } from "@/utils/get-grid-size";

export const getBaseScore = (cardSize: CardSize) => {
  const { columns, rows } = getGridSize(cardSize);
  const totalPairsOfCards = (columns * rows) / 2;
  return totalPairsOfCards * GRID_BASED_SCORE[cardSize];
};
