import type { Meta, StoryObj } from '@storybook/react';

import { BasicCallout } from '../../lib/main';

const meta: Meta<typeof BasicCallout> = {
  title: 'Callouts/Basic-Callout',
  component: BasicCallout,
  argTypes: {
    // 👇 All Button stories expect a label arg
    headline: {
      control: 'text',
      description: 'Headline',
    },
    subheadline: {
      control: 'text',
      description: 'Subheadline',
    },
    linkText: {
      control: 'text',
      description: 'Link Text',
    },
    link: {
      control: 'text',
      description: 'Link',
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
type Story = StoryObj<typeof BasicCallout>;

export const Primary: Story = {
  args: {
    headline: 'Master Automotive Packaging from an OEM Perspective',
    subheadline:
      'Gain insights from OEM professionals and learn the unique packaging challenges in the automotive industry. Understand processes from production to after-sales and the crucial role of vehicle launches.',
    linkText: 'View Course',
    link: 'https://packagingschool.com/certifications/get-to-know-apc',
  },
};
