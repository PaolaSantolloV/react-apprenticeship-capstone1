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

  // test('should show dark theme correctly', () => {
  //   const state = {
  //     theme: 'light',
  //     isDarkTheme: 'dark',
  //     isDark: false,
  //     inputValue: '',
  //     sessionData: {},
  //     isLogin: false,
  //   };

  //   const { container } = render(
  //     <GlobalProvider value={state.isDarkTheme}>
  //       <Layout />
  //     </GlobalProvider>
  //   );
  //   expect(container);
  // });
});
