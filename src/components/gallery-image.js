import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import random from '../utils/random';

const expand = keyframes`
  0% {
    order: 0;
    transform: scale(0);
  }
  100% {
    order: -1;
    transform: scale(100%);
  }
`;

const ImageWrapper = styled.div`
	display: block;
	width: ${(props) => props.width}rem;
	animation: ${(props) => (props.selected ? expand : null)}
		${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut} forwards;
`;

const Image = ({ topic, name, description, alt }) => {
	const [selected, setSelected] = useState(false);

	const imgPath = `images/${topic}/${name}`;

	return (
		<ImageWrapper
			width={random(25, 10)}
			selected={selected}
			onClick={() => setSelected(!selected)}
		>
			<picture>
				<source srcSet={`${imgPath}.webp`} type="image/webp" />
				<LazyLoadImage
					style={{ width: '100%' }}
					loading="lazy"
					effect="blur"
					delayTime={250}
					alt={alt}
					srcSet={`${imgPath}.jpg`}
					type="image/jpg"
				/>
			</picture>
		</ImageWrapper>
	);
};

export default Image;
