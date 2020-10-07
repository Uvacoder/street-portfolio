import { createGlobalStyle, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(4rem);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

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

  img {
	  animation: ${fadeInAnimation}
	  	${(props) => props.theme.transitions.duration.base}ms
      ${(props) => props.theme.transitions.easing.easeInOut}
      forwards;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.1);
	  height: auto;
    position: absolute;
  }
`;

export default GlobalStyle;
