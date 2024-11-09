import { JSX } from "react";
import "./index.css";

import { Mode } from "@/constant/mode";
import { CardSize } from "@/constant/card-size";
import { Theme } from "@/types/theme";
import { CardCategory } from "@/constant/card-category";
import { useThemeVariableSetter } from "@/hooks/use-theme-variable-setter";
import SoloMatchingPairs from "@/molecules/solo-matching-pairs";

export interface SoloMatchingPairsBoardProps {
  mode: Mode;
  theme: Theme;
  cardSize: CardSize;
  cardCategory: CardCategory;
}

export const SoloMatchingPairsBoard = ({
  theme,
  cardSize,
  cardCategory,
  mode,
}: SoloMatchingPairsBoardProps): JSX.Element => {
  useThemeVariableSetter({ theme });

  return (
    <section
      className="solo-matching-pairs-board"
      aria-label="Solo Matching Pairs Board"
    >
      <SoloMatchingPairs
        mode={mode}
        cardSize={cardSize}
        cardCategory={cardCategory}
      />
    </section>
  );
};
