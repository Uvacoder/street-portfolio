import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import random from '../utils/random';

const Image = ({ width, height, fontSize, topic, name, alt, position }) => {
	const imgPath = `images/${topic}/${name}`;
	const styles = {
		left: width && random(width - 25 * fontSize),
		position,
		top: height && random(height - 25 * fontSize),
		width: `${random(25, 10)}rem`,
	};

	return (
		<LazyLoadImage
			delayTime={900}
			loading="lazy"
			effect="blur"
			alt={alt}
			style={{
				...styles,
			}}
			placeholderSrc={`${imgPath}.jpg`}
			src={`${imgPath}.webp`}
		/>
	);
};

export default Image;
