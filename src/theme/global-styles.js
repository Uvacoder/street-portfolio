import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    max-height: 100vh;
  }

  body{
    max-height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    fontSize: ${({ theme }) => theme.fonts.format.base};
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    ${({ theme }) => ({ ...theme.fonts.format.text })}
  }

  h1 {
    font-style: italic;
    ${({ theme }) => ({ ...theme.fonts.format.title })}
  }

  h2 {
    ${({ theme }) => ({ ...theme.fonts.format.subtitle })}
  }


  p {
    ${({ theme }) => ({ ...theme.fonts.format.text })}
  }
`;

export default GlobalStyle;
