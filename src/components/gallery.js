import React, { useMemo } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import GalleryHeader from './gallery-header';
import GalleryLink from './gallery-link';
import Image from './gallery-image';

const Gallery = ({ topic, description, images }) => {
	const items = useMemo(() => {
		return images.map(({ name }) => (
			<GalleryLink to={`/${topic}/${name}`} alt={name}>
				<Image
					whileHover={{
						scale: 1.1,
						transition: {
							ease: 'easeInOut',
						},
					}}
					key={name}
					img={`images/${topic}/${name}.webp`}
				/>
			</GalleryLink>
		));
	}, [images, topic]);

	return (
		<>
			<GalleryHeader title={topic} description={description} />

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
