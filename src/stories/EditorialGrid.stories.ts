import type { Meta, StoryObj } from '@storybook/react';

import { EditorialGrid } from '../../lib/main';
import { allLessons } from '../data/allLessons';

const meta: Meta<typeof EditorialGrid> = {
  title: 'Blocks/Grids/Lessons/Editorial-Grid',
  component: EditorialGrid,
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
    heroLesson: { description: 'Featuerd Lesson' },

    lessons: {
      description: ' lessons attached to grid',
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: ['fullscreen'],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorialGrid>;

export const Primary: Story = {
  args: {
    headline: 'View more EPR Related Articles',
    heroLesson: allLessons[0],
    lessons: allLessons.slice(1, 4),
  },
};
