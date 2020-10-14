import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopicLink = styled(Link)`
	display: flex;
	font-size: ${(props) => props.theme.fonts.format.base};
	font-weight: bold;
	text-decoration: none;

	&::before {
		content: '/';
		display: block;
	}

	&:hover {
		color: ${(props) => props.theme.colors.black};
		text-decoration: underline;
	}
`;

export default TopicLink;
