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
    const mockValue = {
      listFavVideos: {
        id: 'test',
        image: 'image.jpg',
        title: 'test',
        description: 'test',
        favorite: true,
      },
      authenticated: {
        id: '123',
        name: 'Wizeline',
        avatarUrl:
          'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
      },
    };
    const { getByTitle } = render(
      <GlobalProvider value={mockValue}>
        <Header>{'Test'}</Header>
      </GlobalProvider>
    );
    const icon = getByTitle('iconLogout');
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
});
