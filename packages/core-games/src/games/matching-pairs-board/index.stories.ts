import type { Meta, StoryObj } from "@storybook/react";
import MatchingPairsBoard from "./index";

const meta: Meta<typeof MatchingPairsBoard> = {
  title: "Games/Matching Pairs Board",
  component: MatchingPairsBoard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
