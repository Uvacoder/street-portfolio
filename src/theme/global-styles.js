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

  a {
    color: ${({ theme }) => theme.colors.black};
	  transition: color ${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut};

	  &:hover {
		  color: ${(props) => props.theme.colors.main};
	  }
  }

  h1 {
    font-style: italic;
	  text-transform: capitalize;
    ${({ theme }) => ({ ...theme.fonts.format.title })}
  }

  h2 {
	  text-transform: capitalize;
    ${({ theme }) => ({ ...theme.fonts.format.subtitle })}
  }


  p {
    ${({ theme }) => ({ ...theme.fonts.format.text })}
  }

  img {
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.1);
	  height: auto;
  }
`;

export default GlobalStyle;
