import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesPage from './Favorites.page';

describe('<FavoritesPage>', () => {
  test('should create the favorite page correctly', () => {
    const { container } = render(<FavoritesPage>{'Test'}</FavoritesPage>);
    expect(container.querySelector('div')).toBeValid();
  });

  // test('should see videoCards correctly', () => {
  //   const mockValue = {
  //     key: 'test',
  //     id: 'test',
  //     image: 'teste.jpg',
  //     title: 'test',
  //     description: 'test',
  //   };
  //   const AppContext = React.createContext(mockValue);
  //   jest
  //     .spyOn(GlobalProvider, 'AppContext')
  //     .mockImplementation(() => mockValue);

  //   const { getByTitle } = render(
  //     <GlobalProvider value={AppContext}>
  //       <FavoritesPage>{'test'}</FavoritesPage>
  //     </GlobalProvider>
  //   );
  //   const oli = getByTitle('oli')
  //   expect(oli).toBeInTheDocument();

  //   // const card = getByRole('list');
  //   // expect(card).toBeInTheDocument();
  // });
});
