import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../components/title';
import BackArrow from '../components/back-arrow';

const BackLink = styled(Link)`
	font-size: ${(props) => props.theme.fonts.format.subtitle.fontSize};
	padding: ${(props) => props.theme.spacing(12)};
`;

const PageShell = (Page, title, back) => {
	return (props) => (
		<>
			<header>
				{back ? (
					<BackLink to="/">
						<BackArrow />
					</BackLink>
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
