import '@testing-library/jest-dom';
import { lightTheme, darkTheme } from './theme';

const expectedLight = {
  body: 'white',
  text: '#383838',
  primary: ' #e72c2c',
  secondary: '#eeeeee',
};

const expectedDark = {
  body: '#00002e',
  text: '#96b3ff',
  primary: ' #014ba0',
  secondary: '#002864',
};

describe('theme', () => {
  test('should have the lightTheme correctly', () => {
    expect(lightTheme).toMatchObject(expectedLight);
  });

  test('should have the darkTheme correctly', () => {
    expect(darkTheme).toMatchObject(expectedDark);
  });
});
