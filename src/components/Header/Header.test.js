import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.component';
import GlobalProvider from '../../providers/Global.provider';

describe('<Header>', () => {
  test('should create the header correctly', () => {
    const { container } = render(
      <GlobalProvider>
        <Header>{'Test'}</Header>
      </GlobalProvider>
    );

    expect(container.querySelector('header')).toBeValid();
  });
});
