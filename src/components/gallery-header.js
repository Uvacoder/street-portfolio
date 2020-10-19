import React from 'react';
import { motion } from 'framer-motion';

import GalleryTitle from './gallery-title';
import GallerySubtitle from './gallery-subtitle';

const GalleryHeader = ({ title, description }) => (
	<>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, ease: 'easeIn' }}
		>
			<GalleryTitle>{title}</GalleryTitle>
		</motion.div>
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6, duration: 0.6, ease: 'easeIn' }}
		>
			<GallerySubtitle>{description}</GallerySubtitle>
		</motion.div>
	</>
);

export default GalleryHeader;
