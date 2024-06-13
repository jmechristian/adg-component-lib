import type { Meta, StoryObj } from '@storybook/react';

import { H4 } from '../../lib/components/H4';

const meta: Meta<typeof H4> = {
  title: 'Typography/H4',
  component: H4,
  argTypes: {
    // 👇 All Button stories expect a label arg
    textColor: {
      control: 'text',
      description: 'Tailwind String',
    },
    children: {
      control: 'text',
      description: 'The is an H4 Headline.',
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
type Story = StoryObj<typeof H4>;

export const Primary: Story = {
  args: {
    children: 'This is an H4 Headline.',
    textColor: 'text-black',
  },
};
