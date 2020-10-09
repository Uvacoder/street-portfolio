import React from 'react';
import styled from 'styled-components';

import MainLink from './main-link';

const NavContainer = styled.nav`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing(6)};
`;

const Nav = ({ topics, current, onHover }) => {
	return (
		<NavContainer>
			{topics.map(({ topic }, i) => {
				return (
					<MainLink
						alt={topic}
						delay={i}
						isActive={current.topic === topic}
						key={topic}
						onMouseEnter={() => onHover(topic)}
						to={`/${topic}`}
					>
						{topic}
					</MainLink>
				);
			})}
		</NavContainer>
	);
};

export default Nav;
