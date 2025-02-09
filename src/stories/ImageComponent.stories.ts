import type { Meta, StoryObj } from '@storybook/react';
import { ImageComponent } from '../../lib/main';

const meta: Meta<typeof ImageComponent> = {
  title: 'Components/Images/ImageComponent',
  component: ImageComponent,
  argTypes: {
    image: {
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageComponent>;

export const Default: Story = {
  args: {
    image: {
      id: '1',
      url: 'https://placehold.co/1600x900',
      caption: 'This is a test image',
    },
  },
};
