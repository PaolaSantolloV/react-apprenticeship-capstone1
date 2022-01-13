import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar.component';

describe('<SearchBar>', () => {
  test('should create the SearchBar element correctly', () => {
    const { container } = render(<SearchBar>{'Test'}</SearchBar>);
    expect(container.querySelector('div')).toBeValid();
  });
});
