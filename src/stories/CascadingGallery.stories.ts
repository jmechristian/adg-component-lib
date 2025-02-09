import type { Meta, StoryObj } from '@storybook/react';
import { CascadingGallery } from '../../lib/main';

const meta: Meta<typeof CascadingGallery> = {
  title: 'Components/Galleries/CascadingGallery',
  component: CascadingGallery,
  argTypes: {
    images: {
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
type Story = StoryObj<typeof CascadingGallery>;

export const Default: Story = {
  args: {
    images: [
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/f86ae294c488099af5150f041291aa08.webp',
        id: 'f86ae294c488099af5150f041291aa08',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/7bbb134c5a7d375e56175b93fa9c98a6.webp',
        id: '7bbb134c5a7d375e56175b93fa9c98a6',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/48f780c4d731e865f7a37904584db7a9.webp',
        id: '48f780c4d731e865f7a37904584db7a9',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/e0ffe772c8cc4695809c1961650b2bc9.webp',
        id: 'e0ffe772c8cc4695809c1961650b2bc9',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/fa606714e4b1913e1bbb214ac260edeb.webp',
        id: 'fa606714e4b1913e1bbb214ac260edeb',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/c3883c62cd4c49d79dc7b5b4a396404a.webp',
        id: 'c3883c62cd4c49d79dc7b5b4a396404a',
        caption: '05v_180726_adg_0193.webp',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/8adcde6f05dda8f249363d0d622c9df3.webp',
        id: '8adcde6f05dda8f249363d0d622c9df3',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/fdfd1ca2a13ccaa7ce3f304e498e7441.webp',
        id: 'fdfd1ca2a13ccaa7ce3f304e498e7441',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/a2ebcd2c49309d4748f80a089a36b838.webp',
        id: 'a2ebcd2c49309d4748f80a089a36b838',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/3ed2adc91639a71a33e4edbf2741c865.webp',
        id: '3ed2adc91639a71a33e4edbf2741c865',
        caption: '',
      },
      {
        url: 'https://adg-projects.nyc3.digitaloceanspaces.com/633c84a374ee7da573c908cddf5cb48b.webp',
        id: '633c84a374ee7da573c908cddf5cb48b',
        caption: '',
      },
    ],
  },
};
