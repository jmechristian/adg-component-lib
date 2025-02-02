import type { Meta, StoryObj } from '@storybook/react';
import { TwoColIntro } from '../../lib/main';

const meta: Meta<typeof TwoColIntro> = {
  title: 'Components/Intros/TwoColIntro',
  component: TwoColIntro,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    description: {
      control: 'text',
    },
    collaborators: {
      control: 'text',
    },
    size: {
      control: 'text',
    },
    subcategory: {
      control: 'text',
    },
    project_type: {
      control: 'text',
    },
    building_type: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TwoColIntro>;

export const Default: Story = {
  args: {
    description:
      '1405 Point in Baltimore, MD offers 289 units across 17 stories. With contemporary design, the apartments feature stunning interiors including high ceilings, large windows, wood-plank floors, designer kitchens, and spacious bedrooms. The recreational spaces include a fitness center with yoga room, a luxe lounge with gaming tables, rooftop swimming pool, and panoramic water views.',
    collaborators: 'This is a collaborator',
    id: '1',
    size: '100,000 sq. ft.',
    subcategory: 'Multi-Family',
    project_type: 'Mixed-Use',
    building_type: 'Residential',
  },
};
