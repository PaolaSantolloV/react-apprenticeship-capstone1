import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesPage from './Favorites.page';

describe('<FavoritesPage>', () => {
  test('should create the favorite page correctly', () => {
    const { container } = render(<FavoritesPage>{'Test'}</FavoritesPage>);
    expect(container.querySelector('div')).toBeValid();
  });
});
