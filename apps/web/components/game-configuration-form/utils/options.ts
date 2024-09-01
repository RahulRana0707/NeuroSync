import { CardTheme, GameMode, NumberOfPair, PlayerMode } from "@/constant";

export const gameModeOptions = Object.values(GameMode).map((mode) => ({
  value: mode,
  label: mode.charAt(0) + mode.slice(1).toLowerCase(),
}));

export const numberOfPairOptions = Object.values(NumberOfPair).map((pair) => ({
  value: pair,
  label: pair,
}));

export const cardThemeOptions = Object.entries(CardTheme).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);

export const playerModeOptions = Object.entries(PlayerMode).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);
