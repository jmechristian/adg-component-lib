import type { Meta, StoryObj } from '@storybook/react';

import { SocialGrid } from '../../lib/main';
import { allLessons } from '../data/allLessons';

const meta: Meta<typeof SocialGrid> = {
  title: 'Blocks/Grids/Lessons/Social-Grid',
  component: SocialGrid,
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
    lessons: {
      description: ' lessons attached to grid',
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
type Story = StoryObj<typeof SocialGrid>;

export const Primary: Story = {
  args: {
    headline: 'View more EPR Related Articles',
    lessons: allLessons.slice(0, 6),
  },
};
