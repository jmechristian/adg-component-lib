import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../../lib/main';
import { allLessons } from '../data/allLessons';
// import { allLessons } from '../data/allLessons';

const meta: Meta<typeof Pagination> = {
  title: 'Utility/Pagination',
  component: Pagination,
  argTypes: {
    // 👇 All Button stories expect a label arg
    totalItems: {
      control: 'number',
      description: 'Total items in the array',
    },
    itemsPerPage: {
      control: 'number',
      description: 'Items per page',
    },
    currentPage: {
      control: 'number',
      description: 'Da current page',
    },
    onPageChange: {
      description: 'Function to handle UI and page change',
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
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {
    totalItems: allLessons.length,
    itemsPerPage: 9,
    currentPage: 1,
    onPageChange: () => {},
  },
};
