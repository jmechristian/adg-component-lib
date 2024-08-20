import type { Meta, StoryObj } from '@storybook/react';

import { HeaderTwoColumnHero } from '../../lib/main';

const meta: Meta<typeof HeaderTwoColumnHero> = {
  title: 'Blocks/Headers/Header-TwoColumn-Hero',
  component: HeaderTwoColumnHero,
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
    hero: {
      control: 'text',
      description: 'hero image used in background of container',
    },
    setNewHero: {
      control: 'boolean',
      description: 'Function to set new Hero',
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
type Story = StoryObj<typeof HeaderTwoColumnHero>;

export const Primary: Story = {
  args: {
    headline: 'Extended Producer Responsibility (EPR)',
    subheadline:
      'Enter your index description here – where captivating content meets concise information in exactly 350 characters (give or take a smidge)! Whether you’re searching for the perfect blend of facts and flair or just love the idea of placeholders, we’ve got you covered. Stay tuned as this space fills up with awe-inspiring details…eventually. Until then, imagine something incredible!',
    centered: false,
    authors: [
      {
        author: {
          headshot:
            'https://packschool.s3.amazonaws.com/headshots/ALLI-2018-sm.jpeg',
          linkedIn: 'https://www.linkedin.com/in/allikeigley/',
          name: 'Alli Keigley',
          id: '89d486ff-5870-4ddb-816d-6adbc7935075',
        },
      },
      {
        author: {
          headshot: 'https://packschool.s3.amazonaws.com/mitch-headshot-sm.png',
          linkedIn: 'https://www.linkedin.com/in/mitchwebster/',
          name: 'Mitch Webster',
          id: '41f53c00-b19f-43ab-ae79-763cb4c88dc4',
        },
      },
      {
        author: {
          headshot: 'https://packschool.s3.amazonaws.com/JULIE-2018-sm.jpg',
          linkedIn: 'https://www.linkedin.com/in/julie-rice-phdfoodtechnology/',
          name: 'Julie Rice Suggs, PhD',
          id: 'a846afef-8a70-4c17-9f38-5e4768c5ed94',
        },
      },
    ],
    hero: 'https://packschool.s3.amazonaws.com/cadboard-plant.webp',
  },
};
