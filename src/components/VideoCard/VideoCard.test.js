import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoCard from './VideoCard.component';
import { BrowserRouter } from 'react-router-dom';

const imageJson = { url: 'default.jpg' };

describe('<VideoCard>', () => {
  test('should create the VideoCard element correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <VideoCard image={imageJson} title="titleTest">
          {'Test'}
        </VideoCard>
      </BrowserRouter>
    );

    expect(container.querySelector('div')).toBeValid();
  });
});
