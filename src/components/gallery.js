import React from 'react';
import styled from 'styled-components';

import Image from './gallery-image';

const GalleryContainer = styled.div`
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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: ${(props) => props.theme.spacing(4)};

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
				<GalleryBody>
					{images.map((item, i) => (
						<Image
							key={item.name + i}
							topic={topic}
							name={item.name}
							description={item.description}
							alt={item.alt}
						/>
					))}
				</GalleryBody>
			</article>
		</GalleryContainer>
	);
};

export default Gallery;
