import { createGlobalStyle } from 'styled-components';

/* istanbul ignore next */
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
  body: '#1B2631',
  text: '#eeeeee',
  primary: ' #5D6D7E',
  secondary: '#34495E',
};
