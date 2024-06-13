import type { Meta, StoryObj } from '@storybook/react';

import { H2 } from '../../lib/components/H2';

const meta: Meta<typeof H2> = {
  title: 'Typography/H2',
  component: H2,
  argTypes: {
    // 👇 All Button stories expect a label arg
    textColor: {
      control: 'text',
      description: 'Tailwind String',
    },
    children: {
      control: 'text',
      description: 'The is an H2 Headline.',
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
type Story = StoryObj<typeof H2>;

export const Primary: Story = {
  args: {
    children: 'This is an H2 Headline.',
    textColor: 'text-black',
  },
};
