import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.component';
import AuthProvider from '../../providers/Auth';

describe('<Header>', () => {
  test('should create the header correctly', () => {
    const { container } = render(
      <AuthProvider>
        <Header>{'Test'}</Header>
      </AuthProvider>
    );

    expect(container.querySelector('header')).toBeValid();
  });
});
