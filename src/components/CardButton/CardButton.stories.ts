import type { Meta, StoryObj } from '@storybook/react';
import { CardButton } from './indexButton';
import "../../App.css";

const meta = {
  title: 'Components/CardButton',
  component: CardButton,
  parameters: {
    layout: 'centered',
  },
   tags: ['autodocs'],
   args: {
    label: "Add to cart",
    color: "basic",
    size: "large",
   }
} satisfies Meta<typeof CardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddedToCart: Story = {};
AddedToCart.args = {
    label: "Added to cart",
    color: "clicked",
    size: "large",
}

export const AddToCart: Story = {};
AddToCart.args = {
    label: "Add to cart",
    color: "basic",
    size: "large"
}
