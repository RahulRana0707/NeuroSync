import { z } from "zod";
import { CardTheme, GameMode, NumberOfPair, PlayerMode } from "@/constant";

export const gameConfigurationFormSchema = z.object({
  gameName: z.string().min(2, {
    message: "Game Name must be at least 2 characters.",
  }),
  playerMode: z
    .string()
    .refine((key) => Object.keys(PlayerMode).includes(key), {
      message: "Please select a valid player mode",
    }),
  mode: z
    .nativeEnum(GameMode, {
      message: "Game Mode is required",
    })
    .default(GameMode.STANDARD),
  pairs: z
    .nativeEnum(NumberOfPair, {
      message: "Number of Pairs is required",
    })
    .default(NumberOfPair["8 x 8"]),
  cardTheme: z.string().refine((key) => Object.keys(CardTheme).includes(key), {
    message: "Please select a valid card theme",
  }),
  enableSound: z.boolean().default(false),
});
