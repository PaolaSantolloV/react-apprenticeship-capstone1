import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from './Menu.component';
import GlobalProvider from '../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom';

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

  test('should see the home link correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GlobalProvider>
          <Menu>{'Test'}</Menu>
        </GlobalProvider>
      </BrowserRouter>
    );
    expect(getByText('Home')).toBeInTheDocument();
  });
});
