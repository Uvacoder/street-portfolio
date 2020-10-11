import React, { useState } from 'react';

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
				<Divider />
				<p>Choose a project</p>

				<Nav topics={topics} current={current} onSelect={handleSelect} />
			</Main>
			<Footer links={links} />
		</>
	);
};

export default Index;
