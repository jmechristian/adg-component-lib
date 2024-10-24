import type { Meta, StoryObj } from '@storybook/react';

import { CertCallout } from '../../lib/main';

const meta: Meta<typeof CertCallout> = {
  title: 'Callouts/Cert-Callout',
  component: CertCallout,
  argTypes: {
    // 👇 All Button stories expect a label arg
    headline: {
      control: 'text',
      description: 'Headline',
    },
    subheadline: {
      control: 'text',
      description: 'Subheadline',
    },
    linkText: {
      control: 'text',
      description: 'Link Text',
    },
    cardClickHandler: {
      description: 'The function to call when the card is clicked.',
      action: 'clicked',
    },
    cert: {
      description: 'The certificate to display.',
      control: 'select',
      options: ['CMPM', 'CPS', 'APC', 'CSP', 'FPC'],
    },
    link: {
      description: 'The link to the certificate.',
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CertCallout>;

export const Primary: Story = {
  args: {
    headline: 'Master Automotive Packaging from an OEM Perspective',
    subheadline:
      'Gain insights from OEM professionals and learn the unique packaging challenges in the automotive industry. Understand processes from production to after-sales and the crucial role of vehicle launches.',
    linkText: 'View Certificate',
    cert: 'APC',
    link: 'https://packschool.com/courses/automotive-packaging-certification',
  },
};
