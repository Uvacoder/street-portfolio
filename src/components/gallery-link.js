import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GalleryLink = styled(Link)`
	background-color: red;
	display: block;
	height: 50vh;
	margin: auto;
	overflow: hidden;
	width: 100vw;
	max-width: ${(props) => props.theme.breakpoints.sm};
`;

export default GalleryLink;
