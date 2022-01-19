import '@testing-library/jest-dom';
import { lightTheme, darkTheme } from './theme';

const expectedLight = {
  body: 'white',
  text: '#383838',
  primary: ' #e72c2c',
  secondary: '#eeeeee',
};

const expectedDark = {
  body: '#1B2631',
  text: '#eeeeee',
  primary: ' #5D6D7E',
  secondary: '#34495E',
};

describe('theme', () => {
  test('should have the lightTheme correctly', () => {
    expect(lightTheme).toMatchObject(expectedLight);
  });

  test('should have the darkTheme correctly', () => {
    expect(darkTheme).toMatchObject(expectedDark);
  });
});
