import React from 'react';
import styled from 'styled-components';

import { fadeInAnimation } from '../theme/transitions';
import Image from '../components/image';

const GalleryContainer = styled.div`
	animation: ${fadeInAnimation}
		${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut} forwards;
	height: 100%;
	width: 100%;
`;

const GalleryTitle = styled.h2`
	text-align: center;
`;

const GallerySubtitle = styled.p`
	text-align: center;
	padding: ${(props) => props.theme.spacing(12)};
	padding-top: 0;
`;

const GalleryBody = styled.main`
	padding: ${(props) => props.theme.spacing(12)};

	& > img {
		margin: ${(props) => props.theme.spacing(2)};
	}
`;

const Gallery = ({ topic, description, images }) => {
	return (
		<GalleryContainer>
			<article>
				<header>
					<GalleryTitle>{topic}</GalleryTitle>
					<GallerySubtitle>{description}</GallerySubtitle>
				</header>
				<div
					style={{
						display: 'grid',
						placeItems: 'center',
						gridTemplateColumns: '1fr 5fr 1fr',
					}}
				>
					<div></div>
					<GalleryBody>
						{images.map((item, i) => (
							<Image
								key={item.name + i}
								topic={topic}
								name={item.name}
								alt={item.alt}
								position="relative"
							/>
						))}
					</GalleryBody>
					<div></div>
				</div>
			</article>
		</GalleryContainer>
	);
};

export default Gallery;
