import { JSX, lazy, Suspense } from "react";

import { Mode } from "@/constant/mode";
import { PlayerType } from "@/constant/player-type";
import Loader from "@/atoms/loader";
import { CardSize } from "@/constant/card-size";
import { CardCategory } from "@/constant/card-category";
import { Theme } from "@/types/theme";

const SoloMatchingPairsBoard = lazy(
  () => import("@/templates/solo-matching-pairs-board")
);
const DuelMatchingPairsBoard = lazy(
  () => import("@/templates/duel-matching-pairs-board")
);

export interface MatchingPairsBoardProps {
  mode: Mode;
  playerType: PlayerType;
  cardSize: CardSize;
  theme: Theme;
  cardCategory: CardCategory;
}

const MatchingPairsBoard = ({
  playerType,
  cardSize,
  cardCategory,
  theme,
  mode,
}: MatchingPairsBoardProps): JSX.Element => {
  if (playerType === PlayerType.SOLO) {
    return (
      <Suspense fallback={<Loader />}>
        <div style={{ width: "100%", height: "800px" }}>
          <SoloMatchingPairsBoard
            cardCategory={cardCategory}
            theme={theme}
            mode={mode}
            cardSize={cardSize}
          />
        </div>
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<Loader />}>
      <DuelMatchingPairsBoard />
    </Suspense>
  );
};

export default MatchingPairsBoard;
