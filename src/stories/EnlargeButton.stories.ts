import type { Meta, StoryObj } from '@storybook/react';
import { EnlargeButton } from '../../lib/main';

const meta: Meta<typeof EnlargeButton> = {
  title: 'Components/Utility/EnlargeButton',
  component: EnlargeButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imageId: {
      control: 'text',
      description: 'The id of the image',
    },
    caption: {
      control: 'text',
      description: 'The caption of the image',
    },
    setModalAction: {
      description: 'The function to set the modal action',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EnlargeButton>;

export const Default: Story = {
  args: {
    imageId: '1',
    caption: '1405 Point',
    setModalAction: () => {},
  },
};
