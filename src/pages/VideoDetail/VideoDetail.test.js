import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoDetailPage from './VideoDetail.page';
import GlobalProvider from '../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

jest.mock('./VideoDetail.page', () => jest.fn(() => null));

describe('<VideoDetail>', () => {
  test('should create the VideoDetail element correctly', () => {
    const props = {
      history: {
        location: {
          video: {
            title: 'oli',
          },
        },
      },
    };

    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <VideoDetailPage data-my-custom-prop={props} />
        </GlobalProvider>
      </BrowserRouter>
    );

    expect(container.querySelector('div'));
  });
});
