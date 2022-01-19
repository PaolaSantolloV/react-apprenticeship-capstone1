import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.component';
import GlobalProvider from '../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe('<Header>', () => {
  test('should create the header correctly', () => {
    const { container } = render(
      <GlobalProvider>
        <Header>{'Test'}</Header>
      </GlobalProvider>
    );

    expect(container.querySelector('header')).toBeValid();
  });

  test('should create the header correctly when is authenticated', () => {
    const { getByTitle } = render(
      <GlobalProvider>
        <Header>{'Test'}</Header>
      </GlobalProvider>
    );
    const icon = getByTitle('iconLogin');
    fireEvent.click(icon);

    expect(icon).toBeInTheDocument();
  });

  test('should create menu button correctly', () => {
    const { getByTitle } = render(
      <BrowserRouter>
        <GlobalProvider>
          <Header>{'Test'}</Header>
        </GlobalProvider>
      </BrowserRouter>
    );
    const iconMenu = getByTitle('menu');
    fireEvent.click(iconMenu);

    expect(iconMenu).toBeInTheDocument();
  });

  test('should create hide menu button correctly', () => {
    const setShowMenu = jest.fn();
    const useShowMenuSpy = jest.spyOn(React, 'useState');
    useShowMenuSpy.mockImplementation([true, setShowMenu]);

    const { getByTitle } = render(
      <BrowserRouter>
        <GlobalProvider>
          <Header>{'Test'}</Header>
        </GlobalProvider>
      </BrowserRouter>
    );
    const iconMenu = getByTitle('menu');
    fireEvent.click(iconMenu);
    const iconHideMenu = getByTitle('hideMenu');
    fireEvent.click(iconHideMenu);

    expect(iconMenu).toBeInTheDocument();
  });

  test('should create close modal correctly', () => {
    const setShowModal = jest.fn();
    const useShowModalSpy = jest.spyOn(React, 'useState');
    useShowModalSpy.mockImplementation([false, setShowModal]);

    const { getByTitle } = render(
      <BrowserRouter>
        <GlobalProvider>
          <Header>{'Test'}</Header>
        </GlobalProvider>
      </BrowserRouter>
    );
    const closeModal = getByTitle('closeWindow');
    fireEvent.click(closeModal);
  });
});
