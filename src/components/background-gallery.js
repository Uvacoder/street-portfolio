import React from 'react';
import styled from 'styled-components';

import Image from './image';

const Wrapper = styled.div`
	background-color: ${(props) => props.backgroundColor};
	height: 100vh;
	overflow: hidden;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -99;
`;

const BackgroundGallery = ({ topic, color, images, max }) => {
	const maxWH = window.innerHeight;
	const maxWW = window.innerWidth;
	const fontSize = parseFloat(
		window.getComputedStyle(document.querySelector('body'), null).fontSize
	);

	return (
		<Wrapper backgroundColor={color}>
			{images.map((item, i) => {
				if (i >= max) return null;

				return (
					<Image
						key={item.name}
						height={maxWH}
						width={maxWW}
						fontSize={fontSize}
						topic={topic}
						name={item.name}
						alt={item.alt}
						position="absolute"
					/>
				);
			})}
		</Wrapper>
	);
};

export default BackgroundGallery;
