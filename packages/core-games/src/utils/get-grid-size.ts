import { CardSize } from "@/constant/card-size";

const GridSizeMapping = {
  [CardSize.FiveByFour]: { rows: 4, columns: 5 },
  [CardSize.FourByFive]: { rows: 5, columns: 4 },
  [CardSize.FourByFour]: { rows: 4, columns: 4 },
  [CardSize.SixByFive]: { rows: 5, columns: 6 },
  [CardSize.SixBySix]: { rows: 6, columns: 6 },
};

export const getGridSize = (cardSize: CardSize) => {
  return GridSizeMapping[cardSize];
};
