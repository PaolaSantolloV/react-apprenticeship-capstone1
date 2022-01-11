import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  a{
    color:${({ theme }) => theme.text};
  }
`;
export const lightTheme = {
  body: 'white',
  text: '#383838',
  primary: ' #e72c2c',
  secondary: '#eeeeee',
};

export const darkTheme = {
  body: '#00002e',
  text: '#96b3ff',
  primary: ' #014ba0',
  secondary: '#002864',
};
