import React from 'react';
import styled from 'styled-components';

import SocialLink from './social-link';
import { transitions } from '../theme';

const FooterWrapper = styled.footer`
	bottom: 0;
	display: flex;
	gap: 1rem;
	overflow: hidden;
	padding: 1rem;
	position: absolute;
`;

const Footer = ({ links }) => {
	return (
		<FooterWrapper>
			{links.map((link, i) => (
				<SocialLink
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: i * 0.2,
						duration: 0.6,
						ease: transitions.framer.easeOut,
					}}
					key={link.title}
					href={link.to}
					alt={link.title}
				>
					{link.title}
				</SocialLink>
			))}
		</FooterWrapper>
	);
};

export default Footer;
