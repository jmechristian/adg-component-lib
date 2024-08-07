import type { Meta, StoryObj } from '@storybook/react';

import { CourseCardGrid } from '../../lib/main';

const meta: Meta<typeof CourseCardGrid> = {
  title: 'Blocks/Grids/Courses/Course-Card-Grid',
  component: CourseCardGrid,
  argTypes: {
    // 👇 All Button stories expect a label arg
    headline: {
      control: 'text',
      description: 'Headline String',
    },
    subheadline: {
      control: 'text',
      description: 'Subheadline - Keep to 220 characters if possible.',
    },
    courses: {
      description: ' lessons attached to grid',
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
type Story = StoryObj<typeof CourseCardGrid>;

export const Primary: Story = {
  args: {
    headline: 'Elevate Your Career with Expert-Led Courses',
    subheadline:
      'Empower your career with expert-led courses designed to give you a competitive edge and drive your professional growth. Unlock your potential and achieve your career goals today.',
    courses: [
      {
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
      {
        altLink: null,
        categoryArray: ['MATERIALS'],
        courseId: 'CPS-C03',
        hours: '6',
        id: '2418801f-a352-4eae-a394-87a5c0c55f79',
        lessons: '60',
        link: 'https://learn.packagingschool.com/enroll/36818',
        objectives: [
          'Comprehend the container development process from beginning to end',
          'Understand and recognize standard corrugated container styles',
          'Learn the global impact of corrugated board',
          'Explore the manufacturing process for corrugated board such as container converting, enhancement treatment, compressive forces, and headspace',
          'Review methods and strategies for optimizing the properties of corrugated board for specific packaging needs',
          'Strategically approach the issues of effectively storing and distributing corrugated containers',
          'Apply course material to real-world case studies',
        ],
        preview: 'https://www.youtube.com/watch?v=ABLmndzcET4',
        price: '399',
        seoImage: 'https://packschool.s3.amazonaws.com/corrugated-sm.png',
        slug: 'corrugated-containers',
        stripeLink: 'https://buy.stripe.com/eVa4hc8bY3jigko3ch',
        subheadline:
          'Explore the corrugated industry with our course, covering corrugated fiberboard manufacturing, container design, and packaging machinery production.',
        title: 'Corrugated Containers',
        videos: '37',
        what_learned:
          'From learning how corrugated fiberboard is manufactured, to how corrugated containers are designed and produced on packaging machinery, this course offers a 360° view of the corrugated industry.',
      },
      {
        altLink: null,
        categoryArray: ['MATERIALS'],
        courseId: 'CPS-C06',
        hours: '6',
        id: 'f2fad11c-4548-41ea-b39d-be5a4913a4f5',
        lessons: '58',
        link: 'https://learn.packagingschool.com/enroll/36822',
        objectives: [
          'Gain a working knowledge of polymers and their history, as well as understand their role in today’s market',
          'Review seven common types of polymers and their applications',
          'Absorb a range of packaging terms related to polymers and their definitions in order to speak this industry-specific language',
          'Evaluate the characteristics of common polymers in order to make business decisions in packaging design',
          'Learn the processes behind blow molding, injection molding, and thermoforming',
          'Comprehend federal regulations regarding plastics in packaging',
          'Dive into the world of additives to see how they provide optimal performance enhancement to plastics, making them safer, cleaner, longer-lasting, easier to process, tougher, and more colorful.',
        ],
        preview: 'https://www.youtube.com/watch?v=KLiJURFwiAM',
        price: '399',
        seoImage: 'https://packschool.s3.amazonaws.com/polymers-sm.png',
        slug: 'polymers-in-packaging',
        stripeLink: 'https://buy.stripe.com/aEUfZUeAm6vu5FK6ov',
        subheadline:
          'Explore polymer types and functionalities in our plastics course, covering selection, processing, and real-world applications, with insights into advantages and disadvantages.',
        title: 'Polymers in Packaging',
        videos: '14',
        what_learned:
          'This course offers practical and applicable lessons on polymer selection, polymer processing, and plastic applications in packaging. Within this course, you are going to learn about the different types of polymers, their roles, functions, pros and cons of each, and real-world applications.​',
      },
      {
        altLink: null,
        categoryArray: ['BUSINESS', 'DESIGN'],
        courseId: 'CPS-C12',
        hours: '5',
        id: 'e39e127a-11bc-448d-a8c0-209b3abbfdb9',
        lessons: '50',
        link: 'https://learn.packagingschool.com/enroll/36830',
        objectives: [
          'Gain a solid foundation and workflow to begin projects to ensure organization and develop a successful product',
          'Optimize your design efforts for efficiency',
          'Learn design terminology, key design theories, and materials',
          'Review various facets of the packaging development process',
          'Construct a successful design survey and managing assets to develop prototypes',
          'Define methodology and understand design criteria',
        ],
        preview: 'https://www.youtube.com/watch?v=-5ubOGuqaGo',
        price: '399',
        seoImage: 'https://packschool.s3.amazonaws.com/design-workflow-sm.png',
        slug: 'packaging-design-workflow',
        stripeLink: 'https://buy.stripe.com/6oE6pk2RE4nm6JO5kx',
        subheadline:
          "Master design concepts: typography, color, imagery, materials. Learn collaboration, iterative development, Dr. Andrew Hurley's RFP guides, design brief template for successful package designs.",
        title: 'Packaging Design Workflow',
        videos: '21',
        what_learned:
          'In this course, we are going to review design terminology, highlight important design theories, such as typography, color, imagery and materials. We are going to discuss how to best approach a project with your team and leverage iterative development to build winning designs. The first step is making sure you have a solid foundation and workflow when starting a project. You will receive Dr. Andrew Hurley’s RFP guides and the design brief template and strategies he’s used to launch over 100 package designs to market.',
      },
    ],
  },
};
