import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ImageUpload } from '../../lib/main';

const meta: Meta<typeof ImageUpload> = {
  title: 'Utility/ImageUpload',
  component: ImageUpload,
  argTypes: {
    // 👇 All Button stories expect a label arg
    placeholderSrc: {
      control: 'text',
      description: 'Placeholder image',
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
type Story = StoryObj<typeof ImageUpload>;

export const Primary: Story = {
  args: {
    placeholderSrc: 'https://packschool.s3.amazonaws.com/cadboard-plant.webp',
  },
};
