import type { Meta, StoryObj } from "@storybook/react";
import { GameSuccess } from "./index";

const meta: Meta<typeof GameSuccess> = {
  title: "molecules/Game success",
  component: GameSuccess,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SoloMatchingPairsBoard: Story = {
  args: {
    moves: 10,
    score: 100,
    onHome: () => {},
    onRestart: () => {},
  },
};
