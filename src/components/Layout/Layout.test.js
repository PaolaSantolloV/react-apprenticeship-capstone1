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

  test('should show dark theme correctly', () => {
    const mockValue = {
      theme: 'dark',
      isDarkTheme: 'dark',
      isDark: false,
      inputValue: '',
      sessionData: {},
      isLogin: false,
    };

    const { container } = render(
      <GlobalProvider value={mockValue}>
        <Layout />
      </GlobalProvider>
    );
    expect(container);
  });

  test('should show light theme correctly', () => {
    const mockValue = {
      theme: 'light',
      isDarkTheme: '',
      isDark: false,
      inputValue: '',
      sessionData: {},
      isLogin: false,
    };

    const { container } = render(
      <GlobalProvider value={mockValue}>
        <Layout />
      </GlobalProvider>
    );
    expect(container);
  });
});
