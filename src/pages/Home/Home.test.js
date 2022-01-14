import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './Home.page';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalProvider from '../../providers/Global.provider';

describe('<HomePage>', () => {
  test('should create the homePage correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <HomePage />
        </GlobalProvider>
      </BrowserRouter>
    );
    expect(container.querySelector('div')).toBeValid();
  });

  test('should create the VideoCards correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GlobalProvider>
          <HomePage />
        </GlobalProvider>
      </BrowserRouter>
    );
    const videoCard = getByTestId('test');
    expect(videoCard).toBeInTheDocument();
    // expect(container.querySelector('div')).toBeValid();
  });
});
