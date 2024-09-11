import type { Meta, StoryObj } from '@storybook/react';

import { CSPCard } from '../../lib/main';

const meta: Meta<typeof CSPCard> = {
  title: 'Certificates/CSPCard',
  component: CSPCard,
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
type Story = StoryObj<typeof CSPCard>;

export const Primary: Story = {
  args: {},
};
