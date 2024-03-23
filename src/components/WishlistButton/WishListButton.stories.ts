import type { Meta, StoryObj } from "@storybook/react";
import { WishlistButton } from "./indexWishlistButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/WishlistButton",
  component: WishlistButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    fillColor: "#dedede",
    strokeColor: "#bebebe",
  },
} satisfies Meta<typeof WishlistButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddToWishlist: Story = {};
AddToWishlist.args = {
  fillColor: "#dedede",
  strokeColor: "#bebebe",
};

export const AddedToWishlist: Story = {};
AddedToWishlist.args = {
  fillColor: "#242424",
  strokeColor: "#242424",
};
