import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

import BackContainer from '../components/back-container';
import BackArrow from '../components/back-arrow';
import BackLink from '../components/back-link';
import GalleryTitle from '../components/gallery-title';
import Frame from '../components/frame';
import GalleryImage from '../components/gallery-image';
import { transitions } from '../theme';

const Separator = styled.p`
	color: ${(props) => props.theme.colors.white};
	padding: ${(props) => props.theme.spacing(12)};
	padding-top: 0;
`;

const Image = () => {
	const { topic, name } = useParams();

	return (
		<>
			<header>
				<BackContainer>
					<BackLink to={`/${topic}`}>
						<BackArrow />
					</BackLink>
				</BackContainer>
			</header>

			<main
				style={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 0.6,
						duration: 1,
						ease: transitions.framer.easeInOut,
					}}
				>
					<GalleryTitle>{name.replace('-', ' ')}</GalleryTitle>
				</motion.div>
				<Separator />

				<Frame
					initial={{
						height: '600px',
						width: '600px',
					}}
					animate={{ width: '100%', height: '100vh' }}
					transition={{
						delay: 0.2,
						duration: 1.2,
						ease: transitions.framer.easeInOut,
					}}
				>
					<GalleryImage
						initial={{ scale: 1.1 }}
						animate={{ width: '100%', height: 'auto' }}
						img={`/images/${topic}/${name}.webp`}
					/>
				</Frame>
			</main>
		</>
	);
};

export default Image;
