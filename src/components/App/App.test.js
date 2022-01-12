import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.component';

describe('<App>', () => {
  test('should create the App element correctly', () => {
    const { container } = render(<App />);

    expect(container.querySelector('div')).toBeValid();
  });
});
