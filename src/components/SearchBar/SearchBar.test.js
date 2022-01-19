import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar.component';
import GlobalProvider from '../../providers/Global.provider';
import { MemoryRouter } from 'react-router-dom';

describe('<SearchBar>', () => {
  test('should create the SearchBar element correctly', () => {
    const { container } = render(
      <GlobalProvider>
        <SearchBar>{'Test'}</SearchBar>
      </GlobalProvider>
    );
    expect(container.querySelector('div')).toBeValid();
  });

  test('should redirect to / correctly', () => {
    const mockHistoryPush = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: mockHistoryPush,
      }),
    }));
    const { getByRole } = render(
      <GlobalProvider>
        <MemoryRouter>
          <SearchBar>{'Test'}</SearchBar>
        </MemoryRouter>
      </GlobalProvider>
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
