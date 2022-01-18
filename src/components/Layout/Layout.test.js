import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout.component';
import GlobalProvider from '../../providers/Global.provider';

describe('<Layout>', () => {
  test('should create the Layout element correctly', () => {
    const { container } = render(
      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    );
    expect(container.querySelector('div')).toBeValid();
  });
});
