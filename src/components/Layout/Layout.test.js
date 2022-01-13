import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout.component';
import AuthProvider from '../../providers/Auth';

describe('<Layout>', () => {
  test('should create the Layout element correctly', () => {
    const { container } = render(
      <AuthProvider>
        <Layout />
      </AuthProvider>
    );
    expect(container.querySelector('div')).toBeValid();
  });
});
