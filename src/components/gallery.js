import React from 'react';
import { useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { topics } from '../config.json';
import GalleryHeader from './gallery-header';
import GalleryLink from './gallery-link';
import GalleryImage from './gallery-image';
import { transitions } from '../theme';

const returnItems = (topic, images) => {
	return images.map(({ name }) => {
		return (
			<GalleryLink to={`/${topic}/${name}`} alt={name}>
				<GalleryImage
					whileHover={{
						scale: 1.1,
						transition: {
							ease: transitions.framer.easeInOut,
						},
					}}
					img={`images/${topic}/${name}.webp`}
				/>
			</GalleryLink>
		);
	});
};

const Gallery = () => {
	const { topic } = useParams();
	const current = topics.filter((t) => t.topic === topic)[0];
	const items = returnItems(current.topic, current.images);

	return (
		<>
			<GalleryHeader title={topic} description={current.description} />

			<main>
				<AliceCarousel
					mouseTracking
					items={items}
					animationType="fadeout"
					animationDuration={600}
					infinite
					disableDotsControls
				/>
			</main>
		</>
	);
};

export default Gallery;
