import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/header';
import Title from '../components/title';

const BackLink = styled(Link)`
	font-size: ${(props) => props.theme.fonts.format.subtitle.fontSize};
	padding: ${(props) => props.theme.spacing(12)};
`;

const BackArrow = () => {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 16 16"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
			/>
		</svg>
	);
};

const PageShell = (Page, title, back) => {
	return (props) => (
		<>
			<Header>
				{back ? (
					<BackLink to="/">
						<BackArrow />
					</BackLink>
				) : (
					<Title>{title}</Title>
				)}
			</Header>
			<Page {...props} />
		</>
	);
};

export default PageShell;
