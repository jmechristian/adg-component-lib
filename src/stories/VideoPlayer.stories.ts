import type { Meta, StoryObj } from '@storybook/react';

import { VideoPlayer } from '../../lib/main';

const meta: Meta<typeof VideoPlayer> = {
  title: 'Utility/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
    // 👇 All Button stories expect a label arg
    url: {
      control: 'text',
      description: 'URL of the video',
    },
    width: {
      control: 'text',
      description: 'Width of the video player',
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
type Story = StoryObj<typeof VideoPlayer>;

export const Primary: Story = {
  args: {
    url: 'https://www.youtube.com/embed/FREWIrxnlJM?si=bGNhyyZLJINbGR8F',
    width: '100%',
  },
};
