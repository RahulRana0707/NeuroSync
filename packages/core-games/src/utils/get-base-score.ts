import { CardSize } from "@/constant/card-size";
import { BASE_SCORE_PER_PAIR } from "@/constant/score-system";
import { getGridSize } from "@/utils/get-grid-size";

export const getBaseScore = (cardSize: CardSize) => {
  const { columns, rows } = getGridSize(cardSize);
  const totalPairsOfCards = (columns * rows) / 2;
  return totalPairsOfCards * BASE_SCORE_PER_PAIR;
};
