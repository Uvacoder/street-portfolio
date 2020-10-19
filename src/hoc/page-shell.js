import React from 'react';

import Title from '../components/title';
import BackContainer from '../components/back-container';
import BackArrow from '../components/back-arrow';
import BackLink from '../components/back-link';
import { transitions } from '../theme';

const PageShell = (Page, title, backTo) => {
	return (props) => (
		<>
			<header>
				{backTo ? (
					<BackContainer
						initial={{ opacity: 0, x: '-100%' }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: transitions.framer.easeOut }}
					>
						<BackLink to={backTo}>
							<BackArrow />
						</BackLink>
					</BackContainer>
				) : (
					<Title
						initial={{ opacity: 0, y: '-100%' }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: transitions.framer.easeOut }}
					>
						{title}
					</Title>
				)}
			</header>
			<Page {...props} />
		</>
	);
};

export default PageShell;
