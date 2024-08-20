import type { Meta, StoryObj } from '@storybook/react';

import { LessonSelector } from '../../lib/main';
import { allLessons } from '../data/allLessons';
// import { allLessons } from '../data/allLessons';

const meta: Meta<typeof LessonSelector> = {
  title: 'Blocks/Lessons/Lesson-Selector',
  component: LessonSelector,
  argTypes: {
    // 👇 All Button stories expect a label arg
    lessons: {
      description: ' lessons attached to grid',
    },
    onSelectionChange: {
      description: 'Change Handler',
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
type Story = StoryObj<typeof LessonSelector>;

export const Primary: Story = {
  args: {
    lessons: allLessons,
    onSelectionChange: () => {},
  },
};
