import type { Meta, StoryObj } from "@storybook/react";
import MatchingPairsBoard from "./index";
import { Mode } from "@/constant/mode";
import { PlayerType } from "@/constant/player-type";
import { CardSize } from "@/constant/card-size";
import { CardCategory } from "@/constant/card-category";
import { STELLAR_THEME } from "@/constant/theme";

const meta: Meta<typeof MatchingPairsBoard> = {
  title: "Games/Matching Pairs Board",
  component: MatchingPairsBoard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SoloMatchingPairsBoard: Story = {
  args: {
    mode: Mode.CLASSIC,
    playerType: PlayerType.SOLO,
    cardSize: CardSize.FourByFour,
    cardCategory: CardCategory.FOOD,
    theme: STELLAR_THEME,
  },
};
