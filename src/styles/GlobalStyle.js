import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

body, html {
   background-color: ${({ backgroundColor }) => backgroundColor || colors.gray.gray4};
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;
