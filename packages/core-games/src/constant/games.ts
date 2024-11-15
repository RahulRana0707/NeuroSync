import { Mode } from "@/constant/mode";

export const PLATFORM = "NEURO SYNC";

export const MATCHING_PAIRS = {
  [Mode.CLASSIC]: {
    title: PLATFORM,
    gameName: "Matching Pairs",
    description:
      "Classic mode where you need to match all pairs as fast as possible.",
  },
  [Mode.TIME]: {
    title: PLATFORM,
    gameName: "Timed Matching Pairs",
    description:
      "Race against the clock to match all pairs before time runs out.",
  },
  [Mode.ZEN]: {
    title: PLATFORM,
    gameName: "Zen Matching Pairs",
    description:
      "Relaxed mode with no time limit, focus on mindfulness and relaxation.",
  },
};
