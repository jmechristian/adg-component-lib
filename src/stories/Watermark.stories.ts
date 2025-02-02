import type { Meta, StoryObj } from '@storybook/react';
import { Watermark } from '../../lib/main';

const meta: Meta<typeof Watermark> = {
  title: 'Components/Utility/Watermark',
  component: Watermark,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Watermark>;

export const Default: Story = {
  args: {},
};
