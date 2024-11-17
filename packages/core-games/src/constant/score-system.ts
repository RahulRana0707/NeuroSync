import { CardSize } from "./card-size";

export const GRID_BASED_SCORE = {
  [CardSize.FourByFour]: 15,
  [CardSize.FourByFive]: 20,
  [CardSize.FiveByFour]: 25,
  [CardSize.SixByFive]: 30,
  [CardSize.SixBySix]: 35,
};

export const CONSECUTIVE_MATCH_POINT = 25;

export const MISMATCH_MINUS_POINT = 10;
