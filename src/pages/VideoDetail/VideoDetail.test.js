import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoDetailPage from './VideoDetail.page';
import GlobalProvider from '../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe('<VideoDetail>', () => {
  test('should create the VideoDetail element correctly', () => {
    const props = { history: { location: { videos: { title: 'oli' } } } };

    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <VideoDetailPage {...props} />
        </GlobalProvider>
      </BrowserRouter>
    );

    expect(container.querySelector('div'));
  });
});
