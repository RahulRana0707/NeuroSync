import { CardSize } from "@/constant/card-size";

const GridSizeMapping = {
  [CardSize.FiveByFour]: { rows: 4, columns: 5 },
  [CardSize.FiveByFive]: { rows: 5, columns: 5 },
  [CardSize.FiveBySix]: { rows: 5, columns: 6 },
  [CardSize.FiveBySeven]: { rows: 5, columns: 7 },
};

export const getGridSize = (cardSize: CardSize) => {
  return GridSizeMapping[cardSize];
};
