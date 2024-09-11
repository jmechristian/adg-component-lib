import type { Meta, StoryObj } from '@storybook/react';

import { CMPMCard } from '../../lib/main';

const meta: Meta<typeof CMPMCard> = {
  title: 'Certificates/CMPMCard',
  component: CMPMCard,
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
type Story = StoryObj<typeof CMPMCard>;

export const Primary: Story = {
  args: {},
};
