import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './Home.page';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe('<HomePage>', () => {
  test('should create the homePage correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(container.querySelector('div')).toBeValid();
  });
});
