import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fadeInLeftAnimation } from '../theme/transitions';

const TopicWrapper = styled.div`
	align-items: flex-end;
	display: flex;
`;

const TopicSelector = styled.div`
	animation: ${fadeInLeftAnimation}
		${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut} forwards;
	animation-delay: ${(props) => props.delay * 250 || 0}ms;
	font-size: ${(props) => props.theme.fonts.format.subtitle.fontSize};
	font-style: italic;
	font-weight: ${(props) => props.theme.fonts.format.subtitle.fontWeight};
	line-height: ${(props) => props.theme.fonts.format.subtitle.lineHeight};
	opacity: 0;
	position: relative;
	text-transform: capitalize;
	overflow: hidden;
	${(props) => props.theme.transitions.easing.easeInOut};

	& label {
		color: ${(props) =>
			props.isSelected ? props.theme.colors.main : props.theme.colors.black};
		cursor: pointer;
		display: block;
		transform: translateY(0);
		transition: all ${(props) => props.theme.transitions.duration.base}ms;
	}

	& span {
		color: ${(props) => props.theme.colors.main};
		display: block;
		position: absolute;
		top: 0;
		transform: translateY(-100%);
	}

	&:hover label {
		color: ${(props) => props.theme.colors.main};
		transform: translateY(100%);
	}

	&:hover span {
		color: ${(props) => props.theme.colors.main};
		transform: translateY(-100%);
	}

	& input {
		position: absolute;
		left: -50vw;
	}
`;

const TopicLink = styled(Link)`
	animation: ${fadeInLeftAnimation}
		${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut} forwards;
	display: flex;
	font-size: ${(props) => props.theme.fonts.format.base};
	font-weight: bold;
	opacity: 0;
	text-decoration: none;

	&::before {
		content: '/';
		display: block;
	}

	&:hover {
		color: ${(props) => props.theme.colors.black};
		text-decoration: underline;
	}
`;

const Topic = ({ topic, delay, isSelected, onSelect }) => {
	return (
		<TopicWrapper>
			<TopicSelector delay={delay} isSelected={isSelected} content={topic}>
				<label htmlFor={topic} onChange={() => onSelect(topic)}>
					{topic}
					<span>{topic}</span>
					<input
						type="radio"
						id={topic}
						name="topic"
						defaultChecked={isSelected}
					/>
				</label>
			</TopicSelector>
			{isSelected ? (
				<TopicLink alt={topic} to={`/${topic}`}>
					explore
				</TopicLink>
			) : null}
		</TopicWrapper>
	);
};

export default Topic;
