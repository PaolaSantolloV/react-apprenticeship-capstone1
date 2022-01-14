import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalProvider from './Global.provider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const mockValue = {
  login: jest.fn(),
  logout: jest.fn(),
  toggleTheme: jest.fn(),
  handleChange: jest.fn(),
};

//this test dont up the coverage
describe('<GlobalProvider>', () => {
  test('should create the GlobalProvider element correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <GlobalProvider value={mockValue} />
      </BrowserRouter>
    );

    expect(container).toBeValid();
  });
});
