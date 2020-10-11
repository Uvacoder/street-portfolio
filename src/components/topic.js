import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fadeInLeftAnimation } from '../theme/transitions';

const TopicWrapper = styled.div`
	display: flex;
	align-items: flex-end;
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
	text-transform: capitalize;
	position: relative;
	transition: all ${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut};

	& > label {
		color: ${(props) =>
			props.isSelected ? props.theme.colors.main : props.theme.colors.black};
		cursor: pointer;
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
`;

const Topic = ({ topic, delay, isSelected, onSelect }) => {
	return (
		<TopicWrapper>
			<TopicSelector delay={delay} isSelected={isSelected}>
				<label htmlFor={topic} onChange={() => onSelect(topic)}>
					{topic}
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
