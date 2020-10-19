import React from 'react';
import { Switch, Route } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import PageShell from '../hoc/page-shell';
import Index from '../pages/Index';
import Image from '../pages/Image';
import Gallery from './gallery';

const App = ({ topics, links }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch>
				{/* HOME */}
				<Route
					path="/"
					exact
					component={PageShell(
						() => (
							<Index topics={topics} links={links} />
						),
						'Portfolio',
						''
					)}
				/>

				{/* INDIVIDUAL PHOTOGRAPHY */}
				<Route path={`/:topic/:name`} component={Image} />

				{/* TOPIC */}
				<Route
					path={`/:topic`}
					exact
					component={PageShell(
						() => (
							<Gallery />
						),
						'',
						'/'
					)}
				/>
			</Switch>
		</AnimatePresence>
	);
};

export default App;
