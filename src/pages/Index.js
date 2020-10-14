import React, { useState } from 'react';
import { motion } from 'framer-motion';

import BackgroundGallery from '../components/background-gallery';
import Main from '../components/main';
import Divider from '../components/divider';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Index = ({ topics, links }) => {
	const [current, setCurrent] = useState(topics[0]);

	const handleSelect = (topic) => {
		setCurrent(topics.filter((t) => t.topic === topic)[0]);
	};

	return (
		<>
			<BackgroundGallery
				topic={current.topic}
				color={current.color}
				images={current.images}
				max={7}
			/>
			<Main>
				<Divider
					initial={{ opacity: 0, width: 0 }}
					animate={{ opacity: 1, width: 72 }}
					transition={{ duration: 0.6, ease: 'easeIn' }}
				/>
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1, duration: 0.6, ease: 'easeIn' }}
				>
					<span>Choose a project</span>
				</motion.div>

				<Nav topics={topics} current={current} onSelect={handleSelect} />
			</Main>
			<Footer links={links} />
		</>
	);
};

export default Index;
