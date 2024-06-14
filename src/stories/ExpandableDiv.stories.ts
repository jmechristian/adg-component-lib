import type { Meta, StoryObj } from '@storybook/react';

import { ExpandableDiv } from '../../lib/main';

const meta: Meta<typeof ExpandableDiv> = {
  title: 'Utility/ExpandableDiv',
  component: ExpandableDiv,
  argTypes: {
    // 👇 All Button stories expect a label arg
    content: {
      control: 'text',
      description: 'Text String',
    },
    textColor: {
      control: 'text',
      description: 'Tailwind string',
    },
    height: {
      control: 'number',
      description: 'Number String',
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
type Story = StoryObj<typeof ExpandableDiv>;

export const Primary: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend ullamcorper imperdiet. Ut nulla est, interdum eget massa sit amet, dapibus blandit eros. Cras ac tellus euismod, sagittis nisi non, fringilla purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet mi porttitor, iaculis augue eget, eleifend nulla. Pellentesque ipsum ipsum, pharetra at elementum ut, congue nec lorem. Aenean ullamcorper tortor hendrerit diam luctus condimentum. Phasellus feugiat ligula sed lorem sollicitudin, ac aliquam nisl varius. Quisque et velit at augue congue venenatis sit amet ac magna.',
    textColor: 'text-black',
    height: 120,
  },
};
