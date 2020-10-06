import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    max-height: 100vh;
  }

  body{
    max-height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    fontSize: ${({ theme }) => theme.fonts.format.base};
    ${({ theme }) => ({ ...theme.fonts.format.text })}
  }

  h1 { ${({ theme }) => ({ ...theme.fonts.format.title })}}

  h2 {
    font-style: italic;
    ${({ theme }) => ({ ...theme.fonts.format.subtitle })}
  }

  p { ${({ theme }) => ({ ...theme.fonts.format.text })}}
`;

export default GlobalStyle;
