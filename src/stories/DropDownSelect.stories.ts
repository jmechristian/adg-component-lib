import type { Meta, StoryObj } from '@storybook/react';
import { FiEdit, FiTrash, FiShare, FiPlusSquare } from 'react-icons/fi';
import { DropDownSelect } from '../../lib/main';

const meta: Meta<typeof DropDownSelect> = {
  title: 'Utility/DropDownSelect',
  component: DropDownSelect,
  argTypes: {
    // 👇 All Button stories expect a label arg
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
    links: { control: false },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropDownSelect>;

export const Primary: Story = {
  args: {
    backgroundColor: 'bg-black',
    text: 'Post actions',
    links: [
      {
        link: '#',
        text: 'Edit',
        icon: FiEdit,
      },
      {
        link: '#',
        text: 'Duplicate',
        icon: FiPlusSquare,
      },
      {
        link: '#',
        text: 'Share',
        icon: FiShare,
      },
      {
        link: '#',
        text: 'Remove',
        icon: FiTrash,
      },
    ],
  },
};
