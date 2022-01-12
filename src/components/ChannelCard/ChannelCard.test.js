import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChannelCard from './ChannelCard.component';

describe('<ChannelCard>', () => {
  test('should create the channelCard element correctly', () => {
    const { container } = render(
      <ChannelCard
        title="titleTest"
        logo="default.jpg"
        description="descriptionTest"
      >
        {'Test'}
      </ChannelCard>
    );

    expect(container.querySelector('div')).toBeValid();
  });
});
