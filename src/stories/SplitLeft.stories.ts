import type { Meta, StoryObj } from '@storybook/react';
import { SplitLeft } from '../../lib/main';

const meta: Meta<typeof SplitLeft> = {
  title: 'Components/Images/SplitLeft',
  component: SplitLeft,
  argTypes: {
    leftImage: {
      control: {
        type: 'object',
      },
    },
    rightImage: {
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
type Story = StoryObj<typeof SplitLeft>;

export const Default: Story = {
  args: {
    leftImage: {
      id: '1',
      url: 'https://placehold.co/600',
      caption: 'This is a test image',
    },
    rightImage: {
      id: '2',
      url: 'https://placehold.co/2000x1335',
      caption: 'This is a test image',
    },
    setModalAction: () => {},
  },
};
