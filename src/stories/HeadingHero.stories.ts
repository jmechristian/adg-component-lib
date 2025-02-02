import type { Meta, StoryObj } from '@storybook/react';
import { HeadingHero } from '../../lib/main';

const meta: Meta<typeof HeadingHero> = {
  title: 'Components/Headers/HeadingHero',
  component: HeadingHero,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    location: {
      control: 'text',
    },
    hero: {
      control: 'object',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeadingHero>;

export const Default: Story = {
  args: {
    title: '1405 Point',
    location: 'Washington, DC',
    hero: {
      id: '1',
      url: 'https://adg-projects.nyc3.digitaloceanspaces.com/f86ae294c488099af5150f041291aa08.webp',
      alt: '1405 Point',
      caption: 'Coming Soon',
    },
  },
};
