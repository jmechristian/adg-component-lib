import type { Preview } from '@storybook/react';
import '../src/index.css';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        {
          style: {
            minWidth: '1000px',
            maxWidth: '1240px',
            margin: '0 auto',
          },
        },
        React.createElement(Story, null)
      ),
  ],
};

export default preview;
