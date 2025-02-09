import type { Meta, StoryObj } from '@storybook/react';
import { FullWidth } from '../../lib/main';

const meta: Meta<typeof FullWidth> = {
  title: 'Components/Images/FullWidth',
  component: FullWidth,
  argTypes: {
    image: {
      control: {
        type: 'object',
      },
    },
    setModalAction: {
      description: 'Function to set the modal action',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FullWidth>;

export const Default: Story = {
  args: {
    image: {
      id: '1',
      url: 'https://placehold.co/1600x900',
      caption: 'This is a test image',
    },
    setModalAction: () => {},
  },
};
