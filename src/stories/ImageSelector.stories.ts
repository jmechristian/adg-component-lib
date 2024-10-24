import type { Meta, StoryObj } from '@storybook/react';

import { ImageSelector } from '../../lib/main';

const meta: Meta<typeof ImageSelector> = {
  title: 'Utility/ImageSelector',
  component: ImageSelector,
  argTypes: {
    // 👇 All Button stories expect a label arg
    images: {
      description: 'Array of images',
    },
    selected: {
      description: 'Array of selected images',
    },
    returnSelected: {
      description: 'Function to return selected images',
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
type Story = StoryObj<typeof ImageSelector>;

export const Primary: Story = {
  args: {
    images: [
      'https://packmedia54032-staging.s3.amazonaws.com/public/top10inusherov2png',
      'https://packmedia54032-staging.s3.amazonaws.com/public/gorillaglueherocmprsdpng',
      'https://packmedia54032-staging.s3.amazonaws.com/public/ai-coverwebp',
      'https://packmedia54032-staging.s3.amazonaws.com/public/Cereal%20Packaging%20in%20ICA%20in%20Mora%2C%20Sweden.jpeg',
      'https://packmedia54032-staging.s3.amazonaws.com/public/demo-imagewebp',
      'https://packmedia54032-staging.s3.amazonaws.com/public/birdseed-seoimagewebp',
      'https://packmedia54032-staging.s3.amazonaws.com/public/sucrose-seoimagewebp',
      'https://packmedia54032-staging.s3.amazonaws.com/public/cory-connors-course-cardpng',
      'https://packmedia54032-staging.s3.amazonaws.com/public/cert-seoimagewebp',
      'https://packmedia54032-staging.s3.amazonaws.com/public/ediblepackagingherov2png',
      'https://packmedia54032-staging.s3.amazonaws.com/public/lcaeprher01cmbzpdpng',
    ],
    selected: [
      'https://packmedia54032-staging.s3.amazonaws.com/public/cory-connors-course-cardpng',
      'https://packmedia54032-staging.s3.amazonaws.com/public/cert-seoimagewebp',
      'https://packmedia54032-staging.s3.amazonaws.com/public/ediblepackagingherov2png',
    ],
    returnSelected: (selected: string[]) => {},
  },
};
