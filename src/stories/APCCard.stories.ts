import type { Meta, StoryObj } from '@storybook/react';

import { APCCard } from '../../lib/main';

const meta: Meta<typeof APCCard> = {
  title: 'Certificates/APCCard',
  component: APCCard,
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
type Story = StoryObj<typeof APCCard>;

export const Primary: Story = {
  args: {},
};
