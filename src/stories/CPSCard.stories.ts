import type { Meta, StoryObj } from '@storybook/react';

import { CPSCard } from '../../lib/main';

const meta: Meta<typeof CPSCard> = {
  title: 'Certificates/CPSCard',
  component: CPSCard,
  argTypes: {
    // 👇 All Button stories expect a label arg
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CPSCard>;

export const Primary: Story = {
  args: {},
};
