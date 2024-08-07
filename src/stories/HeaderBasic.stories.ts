import type { Meta, StoryObj } from '@storybook/react';

import { HeaderBasic } from '../../lib/main';

const meta: Meta<typeof HeaderBasic> = {
  title: 'Blocks/Headers/Header-Basic',
  component: HeaderBasic,
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
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderBasic>;

export const Primary: Story = {
  args: {
    headline: 'Extended Producer Responsibility (EPR)',
    subheadline:
      'Extended Producer Responsibility (EPR) in packaging design is a policy approach that holds manufacturers accountable for the entire lifecycle of their products, including end-of-life management. This means that producers are responsible for the collection, recycling, and disposal of their packaging materials, incentivizing them to design more sustainable and eco-friendly packaging solutions. EPR aims to reduce environmental impact and promote a circular economy by shifting the cost and responsibility of waste management from taxpayers to producers.',
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
  },
};
