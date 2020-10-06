import React from 'react';

import Title from './title';
import Main from './main';
import Divider from './divider';
import MainNav from './main-nav';
import MainLink from './main-link';

const App = () => {
	return (
		<>
			<header>
				<Title>Street Portfolio</Title>
			</header>
			<Main>
				<Divider />
				<p>Choose a project</p>

				<MainNav>
					<MainLink alt="fashion">Fashion</MainLink>
					<MainLink alt="experimental">Experimental</MainLink>
					<MainLink alt="architecture">Architecture</MainLink>
					<MainLink>Travel</MainLink>
					<MainLink>Film</MainLink>
				</MainNav>
			</Main>
		</>
	);
};

export default App;
