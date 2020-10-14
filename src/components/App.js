import React from 'react';
import { Switch, Route } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import PageShell from '../hoc/page-shell';
import Index from '../pages/Index';
import Gallery from './gallery';

const App = ({ topics, links }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch>
				<Route
					path="/"
					exact
					component={PageShell(
						() => (
							<Index topics={topics} links={links} />
						),
						'Portfolio',
						false
					)}
				/>
				{topics.map(({ topic, description, images }) => {
					return (
						<Route
							key={topic}
							path={`/${topic}`}
							exact
							component={PageShell(
								() => (
									<Gallery
										topic={topic}
										description={description}
										images={images}
									/>
								),
								topic,
								true
							)}
						/>
					);
				})}
			</Switch>
		</AnimatePresence>
	);
};

export default App;
