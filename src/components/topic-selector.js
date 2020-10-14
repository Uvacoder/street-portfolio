import styled from 'styled-components';
import { motion } from 'framer-motion';

const TopicSelector = styled(motion.div)`
	font-size: ${(props) => props.theme.fonts.format.subtitle.fontSize};
	font-style: italic;
	font-weight: ${(props) => props.theme.fonts.format.subtitle.fontWeight};
	line-height: ${(props) => props.theme.fonts.format.subtitle.lineHeight};
	position: relative;
	text-transform: capitalize;
	overflow: hidden;
	${(props) => props.theme.transitions.easing.easeInOut};

	& label {
		color: ${(props) =>
			props.isSelected ? props.theme.colors.main : props.theme.colors.black};
		cursor: pointer;
		display: block;
		transform: translateY(-100%);
		transition: all ${(props) => props.theme.transitions.duration.base}ms;
	}

	& span {
		color: ${(props) =>
			props.isSelected ? props.theme.colors.main : props.theme.colors.black};
		display: block;
		position: absolute;
		top: 0;
		transform: translateY(100%);
	}

	&:hover label {
		color: ${(props) => props.theme.colors.main};
		transform: translateY(0%);
	}

	&:hover span {
		transform: translateY(100%);
	}

	& input {
		position: absolute;
		left: -50vw;
	}
`;

export default TopicSelector;
