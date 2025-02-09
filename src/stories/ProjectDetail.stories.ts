import type { Meta, StoryObj } from '@storybook/react';
import { ProjectDetail } from '../../lib/main';

const meta: Meta<typeof ProjectDetail> = {
  title: 'Components/Utility/ProjectDetail',
  component: ProjectDetail,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
    },
    detail: {
      control: 'text',
    },
    dividers: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectDetail>;

export const Default: Story = {
  args: {
    name: 'Category',
    detail: ['Multi-Family', 'Residential'],
    dividers: true,
  },
};
