import styled from 'styled-components';

import { fallInAnimation } from '../theme/transitions';

const Header = styled.header`
	animation: ${fallInAnimation}
		${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut} forwards;
	display: flex;
`;

export default Header;
