import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from './Menu.component';
import AuthProvider from '../../providers/Auth';
import { BrowserRouter } from 'react-router-dom';

describe('<Menu>', () => {
  test('should create the Menu element correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <Menu />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(container.querySelector('div')).toBeValid();
  });
});
