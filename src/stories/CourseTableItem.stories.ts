import type { Meta, StoryObj } from '@storybook/react';

import { CourseTableItem } from '../../lib/main';

const meta: Meta<typeof CourseTableItem> = {
  title: 'Courses/Course-Table-Item',
  component: CourseTableItem,
  argTypes: {
    // 👇 All Button stories expect a label arg
    course: {
      description: 'It is the course.',
    },
    cardClickHandler: {
      description: 'The function to call when the card is clicked.',
      action: 'clicked',
    },
    discount: {
      description: 'The discount for the course.',
      control: 'number',
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
type Story = StoryObj<typeof CourseTableItem>;

export const Primary: Story = {
  args: {
    course: {
      type: null,
      altLink: null,
      categoryArray: ['INDUSTRY'],
      courseId: 'CPS-C01',
      hours: '8',
      id: 'ff174f01-5f76-486c-8d7a-849d6d3ff914',
      lessons: '82',
      link: 'https://learn.packagingschool.com/enroll/35691',
      objectives: [
        'Define packaging by recalling its functions, levels and types.',
        'Explain the role of packaging in the evolution of society by listing major packaging innovations throughout history.',
        'Describe the global packaging market by value, volume, category segmentation and geography segmentation.',
        'Identify the major stakeholders who influence the packaging development process.',
        'Illustrate the career potential in packaging by recalling specific jobs.',
        'Understand the key phases of the packaging development process.',
        'List product considerations that impact packaging.',
        'Recognize the standard manufacturing process for each fundamental packaging material.',
        'Appraise the sustainability of various packaging materials and processes.',
        'Identify the fundamental packaging materials and types.',
        'Describe finished packaging structures by innovative design.',
        'Establish the fundamental vocabulary required to communicate with stakeholders in the packaging development process.',
      ],
      preview: 'https://www.youtube.com/watch?v=L4Q6sZlXoe4',
      price: '399',
      seoImage:
        'https://packschool.s3.amazonaws.com/packaging-foundations-seoImage-2-sm.png',
      slug: 'packaging-foundations',
      stripeLink: 'https://buy.stripe.com/8wMeVQ8bY7zyecg5kn',
      subheadline:
        'Learn effective stakeholder roles in packaging with our course, covering the holistic system of diverse department impacts on design.',
      title: 'Packaging Foundations',
      videos: '35',
      what_learned:
        'Packaging is a complex process that must be seen as part of a greater system, where each activity has an impact on the final package. Departments such as marketing, sales, procurement, legal, distribution, quality control, manufacturing and warehousing all have unique demands on the package design. After taking this course, you will have the thought process required of a successful stakeholder in the packaging development process.',
    },
  },
};
