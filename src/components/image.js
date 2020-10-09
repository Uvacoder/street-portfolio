import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const rndHelper = (max, min = 0) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const Image = ({ width, height, fontSize, topic, name, alt, position }) => {
	return (
		<LazyLoadImage
			alt={alt}
			src={`images/${topic}/${name}`}
			loading="lazy"
			effect="blur"
			delayTime={250}
			style={{
				left: width && rndHelper(width - 25 * fontSize),
				position,
				top: height && rndHelper(height - 25 * fontSize),
				width: `${rndHelper(25, 10)}rem`,
			}}
		/>
	);
};

export default Image;
