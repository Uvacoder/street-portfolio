import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	position: absolute;
	bottom: 0;
	padding: 1rem;
	display: flex;
	gap: 1rem;
`;

const SocialLink = styled.a`
	color: ${(props) => props.theme.colors.black};
	text-decoration: none;

	&:hover {
		color: ${(props) => props.theme.colors.black};
		text-decoration: underline;
	}
`;

const Footer = ({ links }) => {
	return (
		<FooterWrapper>
			{links.map((link) => (
				<SocialLink key={link.title} href={link.to} alt={link.title}>
					{link.title}
				</SocialLink>
			))}
		</FooterWrapper>
	);
};

export default Footer;
