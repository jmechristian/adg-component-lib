import type { Meta, StoryObj } from '@storybook/react';

import { CourseCardCallout } from '../../lib/main';

const meta: Meta<typeof CourseCardCallout> = {
  title: 'Callouts/Course-Card-Callout',
  component: CourseCardCallout,
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
    course: {
      description: 'The course for the card.',
    },
    cardClickHandler: {
      description: 'The function to call when the card is clicked.',
      action: 'clicked',
    },
    cardPurchaseHandler: {
      description: 'The function to call when the card is purchased.',
      action: 'purchased',
    },
    discount: {
      description: 'The discount for the course.',
      control: 'number',
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
type Story = StoryObj<typeof CourseCardCallout>;

export const Primary: Story = {
  args: {
    headline: 'Master Automotive Packaging from an OEM Perspective',
    subheadline:
      'Gain insights from OEM professionals and learn the unique packaging challenges in the automotive industry. Understand processes from production to after-sales and the crucial role of vehicle launches.',
    linkText: 'View Course',
    course: {
      type: null,
      altLink: null,
      categoryArray: ['AUTO', 'SUPPLYCHAIN'],
      courseId: 'APC-A04',
      hours: '4',
      id: '35844454-d9a7-4e50-ab62-2298e53764c9',
      lessons: '40',
      link: 'https://learn.packagingschool.com/enroll/623247',
      objectives: [
        'Gain an understanding on the importance of automotive packaging and its supply chain',
        'Interpret categories of production components',
        'Classify overseas shipments',
        'Read and interpret knocked down export methods',
        'Understand and differentiate between production, after sales and overseas packaging challenges',
        'Identify major OEM names and locations',
        'Understand the vehicle manufacturing and assembly process',
        'Understand how packaging flows throughout the automotive supply chain',
        'Approach package development from a lean manufacturing and automation perspective',
      ],
      preview: 'https://youtu.be/WSNuIPQGIXs',
      price: '399',
      seoImage: 'https://packschool.s3.amazonaws.com/operations-1-full-sm.png',
      slug: 'packaging-operations-at-oems',
      stripeLink: null,
      subheadline:
        'This course is a fully online, self-paced program designed for both seasoned and novice professionals in the automotive industry.  This course is part of the Automotive Packaging Certificate program.',
      title: 'Packaging Operations at OEMs',
      videos: null,
      what_learned:
        'The packaging perspective as seen through the eyes of OEMs is discussed in this course. We interviewed OEM industry professionals for this course, and you will learn of the packaging challenges and differences among OEMs.   This course starts with an introduction to the automotive packaging industry and provides the fundamental knowledge necessary to get you up to speed in this vast sector of packaging. We’ll overview the packaging processes involved in packaging production, overseas distribution, and after sales operations.   This course will review packaging considerations, design, and approval processes specifically from the perspective of an OEM. Learners will gain an understanding of the significance of packaging handbooks and how these resources apply across the industry. The importance of vehicle launches and their influence on the packaging development process are also part of this course.',
    },
  },
};
