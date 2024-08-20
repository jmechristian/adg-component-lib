import type { Meta, StoryObj } from '@storybook/react';

import { CourseSelector } from '../../lib/main';
import { allCourses } from '../data/allCourses';
// import { allLessons } from '../data/allLessons';

const meta: Meta<typeof CourseSelector> = {
  title: 'Blocks/Courses/Course-Selector',
  component: CourseSelector,
  argTypes: {
    // 👇 All Button stories expect a label arg
    courses: {
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
type Story = StoryObj<typeof CourseSelector>;

export const Primary: Story = {
  args: {
    courses: allCourses,
    onSelectionChange: () => {},
  },
};
