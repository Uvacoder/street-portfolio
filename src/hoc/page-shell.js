import React from 'react';

import Title from '../components/title';
import BackContainer from '../components/back-container';
import BackArrow from '../components/back-arrow';
import BackLink from '../components/back-link';

const PageShell = (Page, title, back) => {
	return (props) => (
		<>
			<header>
				{back ? (
					<BackContainer
						initial={{ opacity: 0, x: '-100%' }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
					>
						<BackLink to="/">
							<BackArrow />
						</BackLink>
					</BackContainer>
				) : (
					<Title
						initial={{ opacity: 0, y: '-100%' }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeIn' }}
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
