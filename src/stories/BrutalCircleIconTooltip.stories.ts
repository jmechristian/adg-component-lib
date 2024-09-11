import type { Meta, StoryObj } from '@storybook/react';

import { BrutalCircleIconTooltip } from '../../lib/main';

const meta: Meta<typeof BrutalCircleIconTooltip> = {
  title: 'Utility/BrutalCircleIconTooltip',
  component: BrutalCircleIconTooltip,
  argTypes: {
    // 👇 All Button stories expect a label arg
    children: {
      description: 'Usually an Icon Component',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip String',
    },
    bgColor: {
      control: 'text',
      description: 'Tailwind String',
    },
    fn: {
      description: 'OnClick Function',
    },
    pulse: {
      control: 'boolean',
      description: 'Pulse Animation',
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
type Story = StoryObj<typeof BrutalCircleIconTooltip>;

export const Primary: Story = {
  args: {
    children: 'X',
    bgColor: 'bg-orange-400',
    tooltip: 'Tooltip',
    fn: () => {},
    pulse: false,
  },
};
