import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from './Menu.component';
import GlobalProvider from '../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom';

describe('<Menu>', () => {
  test('should create the Menu element correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <Menu />
        </GlobalProvider>
      </BrowserRouter>
    );

    expect(container.querySelector('div')).toBeValid();
  });

  test('should see the home link correctly', () => {
    const setShowMenu = jest.fn();
    const useShowMenuSpy = jest.spyOn(React, 'useState');
    useShowMenuSpy.mockImplementation((init) => [init, setShowMenu]);

    const { getByText } = render(
      <BrowserRouter>
        <GlobalProvider>
          <Menu setShowMenu={setShowMenu}>{'Test'}</Menu>
        </GlobalProvider>
      </BrowserRouter>
    );
    const home = getByText('Home');
    fireEvent.click(home);
    expect(home).toBeInTheDocument();
  });

  // test('should see the favorites link correctly', () => {
  //   const setShowMenu = jest.fn();
  //   const useShowMenuSpy = jest.spyOn(React, 'useState');
  //   useShowMenuSpy.mockImplementation((init) => [init, setShowMenu]);

  //   jest.mock('../../providers/Global.provider', () => ({
  //     authenticated: true,
  //   }));

  //   const { getByTitle } = render(
  //     <BrowserRouter>
  //       <GlobalProvider>
  //         <Menu setShowMenu={setShowMenu}>{'Test'}</Menu>
  //       </GlobalProvider>
  //     </BrowserRouter>
  //   );
  //   const home = getByTitle('Favorites');
  //   fireEvent.click(home);
  //   expect(home).toBeInTheDocument();
  // });
});
