import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Private from './Private.component';
import AuthProvider from './../../providers/Auth/Auth.provider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe('<Private>', () => {
  test('should create the Private element correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <Private />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(container);
  });
});
