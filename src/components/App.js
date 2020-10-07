import React, { useState } from 'react';

import BackgroundGallery from './background-gallery';
import Title from './title';
import Main from './main';
import Divider from './divider';
import MainNav from './main-nav';
import MainLink from './main-link';

const topics = [
	{ topic: 'fashion', color: '#f5f5f5' },
	{ topic: 'experimental', color: '#F3B3A6' },
	{ topic: 'architecture', color: '#7798AB' },
	{ topic: 'travel', color: '#FFB563' },
	{ topic: 'film', color: '#DBD56E' },
];

const App = () => {
	const [current, setCurrent] = useState(topics[0]);

	const onHover = (e) => {
		const altText = e.target.getAttribute('alt');
		setCurrent(topics.find((topic) => topic.topic === altText));
	};

	return (
		<>
			<BackgroundGallery topic={current.topic} color={current.color} />
			<header>
				<Title>Street Portfolio</Title>
			</header>
			<Main>
				<Divider />
				<p>Choose a project</p>

				<MainNav>
					{topics.map(({ topic }) => {
						return (
							<MainLink key={topic} onMouseEnter={onHover} alt={topic}>
								{topic}
							</MainLink>
						);
					})}
				</MainNav>
			</Main>
		</>
	);
};

export default App;
