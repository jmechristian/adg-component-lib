import type { Meta, StoryObj } from '@storybook/react';

import { HeaderVideoHero } from '../../lib/main';

const meta: Meta<typeof HeaderVideoHero> = {
  title: 'Blocks/Headers/Header-Video',
  component: HeaderVideoHero,
  argTypes: {
    // 👇 All Button stories expect a label arg
    headline: {
      control: 'text',
      description: 'Headline String',
    },
    subheadline: {
      control: 'text',
      description: 'Subheadline - Keep to 220 characters if possible.',
    },
    centered: {
      control: 'boolean',
      description: 'Text centered - True or false',
    },
    authors: {
      description: 'Array of authors',
    },
    url: {
      control: 'text',
      description: 'hero image used in background of container',
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
type Story = StoryObj<typeof HeaderVideoHero>;

export const Primary: Story = {
  args: {
    headline: 'Extended Producer Responsibility (EPR)',
    subheadline:
      'Enter your index description here – where captivating content meets concise information in exactly 350 characters (give or take a smidge)! Whether you’re searching for the perfect blend of facts and flair or just love the idea of placeholders, we’ve got you covered. Stay tuned as this space fills up with awe-inspiring details…eventually. Until then, imagine something incredible!',
    centered: false,
    authors: [
      {
        company: 'Packaging School',
        headshot: 'https://packschool.s3.amazonaws.com/mitch-headshot-sm.png',
        createdAt: '2023-08-22T21:11:37.128Z',
        id: '41f53c00-b19f-43ab-ae79-763cb4c88dc4',
        linkedIn: 'https://www.linkedin.com/in/mitchwebster/',
        name: 'Mitch Webster',
        title: 'Business Solutions Strategist',
        updatedAt: '2023-09-26T16:09:59.874Z',
      },
      {
        company: 'Packaging School',
        headshot:
          'https://packschool.s3.amazonaws.com/headshots/ALLI-2018-sm.jpeg',
        createdAt: '2023-09-20T17:13:49.886Z',
        id: '89d486ff-5870-4ddb-816d-6adbc7935075',
        linkedIn: 'https://www.linkedin.com/in/allikeigley/',
        name: 'Alli Keigley',
        title: 'Production Coordinator',
        updatedAt: '2023-09-26T16:00:26.775Z',
      },
    ],
    url: 'https://www.youtube.com/embed/FREWIrxnlJM?si=bGNhyyZLJINbGR8F',
  },
};
