import { lazy, Suspense } from "react";

import { CardSize } from "@/constant/card-size";
import { CardCategory } from "@/constant/card-category";
import { Mode } from "@/constant/mode";
import Loader from "@/atoms/loader";
const SoloClassicMode = lazy(() => import("./components/solo-classic-mode"));
const SoloTimeMode = lazy(() => import("./components/solo-time-mode"));
const SoloZenMode = lazy(() => import("./components/solo-zen-mode"));

export interface SoloMatchingPairsProps {
  cardSize: CardSize;
  cardCategory: CardCategory;
  mode: Mode;
}

const SoloModeComponents = {
  [Mode.CLASSIC]: SoloClassicMode,
  [Mode.TIME]: SoloTimeMode,
  [Mode.ZEN]: SoloZenMode,
};

export const SoloMatchingPairs = ({
  cardSize,
  cardCategory,
  mode,
}: SoloMatchingPairsProps) => {
  const ModeToRender = SoloModeComponents[mode];
  return (
    <Suspense fallback={<Loader />}>
      <ModeToRender cardCategory={cardCategory} cardSize={cardSize} />
    </Suspense>
  );
};
