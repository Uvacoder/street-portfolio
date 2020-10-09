import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fadeInLeftAnimation } from '../theme/transitions';

const MainLink = styled(Link)`
	animation: ${fadeInLeftAnimation}
		${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut} forwards;
	animation-delay: ${(props) => props.delay * 250 || 0}ms;
	display: flex;
	font-size: ${(props) => props.theme.fonts.format.subtitle.fontSize};
	font-style: italic;
	font-weight: ${(props) => props.theme.fonts.format.subtitle.fontWeight};
	line-height: ${(props) => props.theme.fonts.format.subtitle.lineHeight};
	opacity: 0;
	position: relative;
	text-transform: capitalize;
	text-decoration: none;
	color: ${(props) =>
		props.isActive ? props.theme.colors.main : props.theme.colors.black};

	&::before,
	&::after {
		bottom: 15%;
		color: ${(props) => props.theme.colors.black};
		display: block;
		font-size: ${(props) => props.theme.fonts.format.base};
		left: 99%;
		position: absolute;
		transition: all ${(props) => props.theme.transitions.duration.base}ms
			${(props) => props.theme.transitions.easing.easeInOut};
	}

	&::before {
		opacity: 0;
		content: 'explore';
		left: calc(100% + 0.3rem);
		transform: translate(1.75rem, -4rem);
	}

	&::after {
		content: '/';
		opacity: 0;
		transform: translateX(-3rem);
	}

	&:hover::after,
	&:hover::before {
		opacity: 1;
		transform: translate(0);
	}
`;

export default MainLink;
