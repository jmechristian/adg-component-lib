import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { GridToggle } from '../../lib/main';

const meta: Meta<typeof GridToggle> = {
  title: 'Utility/GridToggle',
  component: GridToggle,
  argTypes: {
    // 👇 All Button stories expect a label arg
    isTable: {
      control: 'boolean',
      description: 'Is true or no?',
    },
    toggleValue: {
      description: 'Parent state control',
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GridToggle>;

export const Primary: Story = {
  args: {
    isTable: true,
    toggleValue: fn(),
  },
};
