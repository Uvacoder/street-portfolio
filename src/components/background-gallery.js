import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100%;
	position: absolute;
	width: 100%;
	z-index: -99;
	overflow: hidden;
	background-color: ${(props) => props.backgroundColor};
`;

const rndHelper = (max, min = 0) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const TopicImage = ({ width, height, fontSize, topic, number }) => {
	return (
		<img
			alt={topic}
			src={`images/${topic}/${number}.jpg`}
			style={{
				width: `${rndHelper(25, 5)}rem`,
				top: rndHelper(height - 25 * fontSize),
				left: rndHelper(width - 25 * fontSize),
			}}
		/>
	);
};

const BackgroundGallery = ({ topic, color }) => {
	const maxWH = window.innerHeight;
	const maxWW = window.innerWidth;
	const fontSize = parseFloat(
		window.getComputedStyle(document.querySelector('body'), null).fontSize
	);

	return (
		<Wrapper backgroundColor={color}>
			{Array(10)
				.fill(null)
				.map((_, i) => (
					<TopicImage
						key={topic + i}
						height={maxWH}
						width={maxWW}
						fontSize={fontSize}
						topic={topic}
						number={1}
					/>
				))}
		</Wrapper>
	);
};

export default BackgroundGallery;
