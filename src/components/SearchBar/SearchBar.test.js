import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar.component';
import GlobalProvider from '../../providers/Global.provider';

describe('<SearchBar>', () => {
  test('should create the SearchBar element correctly', () => {
    const { container } = render(
      <GlobalProvider>
        <SearchBar>{'Test'}</SearchBar>
      </GlobalProvider>
    );
    expect(container.querySelector('div')).toBeValid();
  });
});
