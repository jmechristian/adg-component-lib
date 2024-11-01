import type { Meta, StoryObj } from '@storybook/react';

import { ThumbnailGallery } from '../../lib/main';

const meta: Meta<typeof ThumbnailGallery> = {
  title: 'Blocks/Galleries/ThumbnailGallery',
  component: ThumbnailGallery,
  argTypes: {
    // 👇 All Button stories expect a label arg
    images: {
      description: 'Array of images',
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
type Story = StoryObj<typeof ThumbnailGallery>;

export const Primary: Story = {
  args: {
    images: [
      {
        id: '1',
        src: 'https://packschool.s3.amazonaws.com/Cory-Connors-Course-Card-Fall.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
        uploadedBy: 'Cory Connors',
      },
      {
        id: '2',
        src: 'https://packschool.s3.amazonaws.com/spc-ecommerce-seoImage.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Metal Carrots',
      },
      {
        id: '3',
        src: 'https://packschool.s3.amazonaws.com/video-cover-sm.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Video Cover',
      },
      {
        id: '4',
        src: 'https://packschool.s3.amazonaws.com/Iron_Bird_Seed.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '5',
        src: 'https://packschool.s3.amazonaws.com/bev-gases-sm.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '6',
        src: 'https://packschool.s3.amazonaws.com/sensory-seoImage.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '7',
        src: 'https://packschool.s3.amazonaws.com/bootcamp-2-seoImage.png',
        alt: 'Cory Connors',
      },
      {
        id: '8',
        src: 'https://packschool.s3.amazonaws.com/aps-hotel.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '1',
        src: 'https://packschool.s3.amazonaws.com/Cory-Connors-Course-Card-Fall.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
        uploadedBy: 'Cory Connors',
      },
      {
        id: '2',
        src: 'https://packschool.s3.amazonaws.com/spc-ecommerce-seoImage.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Metal Carrots',
      },
      {
        id: '3',
        src: 'https://packschool.s3.amazonaws.com/video-cover-sm.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Video Cover',
      },
      {
        id: '4',
        src: 'https://packschool.s3.amazonaws.com/Iron_Bird_Seed.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '5',
        src: 'https://packschool.s3.amazonaws.com/bev-gases-sm.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '6',
        src: 'https://packschool.s3.amazonaws.com/sensory-seoImage.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '7',
        src: 'https://packschool.s3.amazonaws.com/bootcamp-2-seoImage.png',
        alt: 'Cory Connors',
      },
      {
        id: '8',
        src: 'https://packschool.s3.amazonaws.com/aps-hotel.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '1',
        src: 'https://packschool.s3.amazonaws.com/Cory-Connors-Course-Card-Fall.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
        uploadedBy: 'Cory Connors',
      },
      {
        id: '2',
        src: 'https://packschool.s3.amazonaws.com/spc-ecommerce-seoImage.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Metal Carrots',
      },
      {
        id: '3',
        src: 'https://packschool.s3.amazonaws.com/video-cover-sm.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Video Cover',
      },
      {
        id: '4',
        src: 'https://packschool.s3.amazonaws.com/Iron_Bird_Seed.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '5',
        src: 'https://packschool.s3.amazonaws.com/bev-gases-sm.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '6',
        src: 'https://packschool.s3.amazonaws.com/sensory-seoImage.webp',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
      {
        id: '7',
        src: 'https://packschool.s3.amazonaws.com/bootcamp-2-seoImage.png',
        alt: 'Cory Connors',
      },
      {
        id: '8',
        src: 'https://packschool.s3.amazonaws.com/aps-hotel.png',
        caption:
          "Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!",
        alt: 'Cory Connors',
      },
    ],
  },
};
