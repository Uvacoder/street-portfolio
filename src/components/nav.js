import React from 'react';
import styled from 'styled-components';

import Topic from './topic';

const NavWrapper = styled.nav`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-items: flex-start;
`;

const Nav = ({ topics, current, onSelect }) => {
	return (
		<NavWrapper>
			{topics.map(({ topic }, i) => {
				return (
					<Topic
						key={topic}
						delay={i}
						onSelect={onSelect}
						isSelected={current.topic === topic}
						topic={topic}
					/>
				);
			})}
		</NavWrapper>
	);
};

export default Nav;
