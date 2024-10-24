import type { Meta, StoryObj } from '@storybook/react';

import { ToggleSwitch } from '../../lib/main';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Utility/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    // 👇 All Button stories expect a label arg
    selected: {
      control: 'boolean',
      description: 'Is true or no?',
    },
    toggleValue: {
      description: 'Parent state control',
    },
    label1: {
      description: 'Label for the first option',
      control: 'text',
    },
    label2: {
      description: 'Label for the second option',
      control: 'text',
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
type Story = StoryObj<typeof ToggleSwitch>;

export const Primary: Story = {
  args: {
    selected: false,
    toggleValue: (value: boolean) => {
      return value;
    },
    label1: 'Setup',
    label2: 'Layout',
  },
};
