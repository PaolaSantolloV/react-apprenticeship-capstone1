import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './NotFound.page';

describe('<NotFound>', () => {
  test('should create the NotFound element correctly', () => {
    const { container } = render(<NotFound>{'Test'}</NotFound>);
    expect(container.querySelector('section')).toBeValid();
  });
});
