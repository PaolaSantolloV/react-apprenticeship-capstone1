import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from './Menu.component';
import GlobalProvider from '../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom';

const mockValue = {
  state: {
    authenticated: true,
  },
};

describe('<Menu>', () => {
  test('should create the Menu element correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <Menu />
        </GlobalProvider>
      </BrowserRouter>
    );

    expect(container.querySelector('div')).toBeValid();
  });

  test('should watch the favorite link correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <GlobalProvider value={mockValue}>
          <Menu />
        </GlobalProvider>
      </BrowserRouter>
    );

    expect(container.querySelector('div')).toBeValid();
  });
});
