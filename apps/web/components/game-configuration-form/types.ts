import { CardTheme, GameMode, NumberOfPair } from "@/constant";

export interface GameConfigurationFormProps {
  gameName: string;
  mode: keyof typeof GameMode;
  pairs: keyof typeof NumberOfPair;
  cardTheme: keyof typeof CardTheme;
  enableSound: boolean;
}
