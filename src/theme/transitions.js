import { keyframes } from 'styled-components';

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

const fadeInLeftAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-4rem);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const fallInAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-4rem);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

export { fadeInAnimation, fadeInLeftAnimation, fallInAnimation };
