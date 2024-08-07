import type { Meta, StoryObj } from '@storybook/react';

import { BrutalButton } from '../../lib/main';

const meta: Meta<typeof BrutalButton> = {
  title: 'Utility/Brutal-Button',
  component: BrutalButton,
  argTypes: {
    // 👇 All Button stories expect a label arg
    link: {
      description: 'Link',
    },
    textColor: {
      control: 'text',
      description: 'Text Color',
    },
    background: {
      control: 'text',
      description: 'background color',
    },
    text: {
      control: 'text',
      description: ' Button Text',
    },
    small: {
      control: 'boolean',
      description: 'Is small?',
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
type Story = StoryObj<typeof BrutalButton>;

export const Primary: Story = {
  args: {
    link: 'https://www.google.com',
    textColor: 'text-neutral-900',
    background: 'bg-clemson',
    text: 'Demo Button',
    small: false,
  },
};
