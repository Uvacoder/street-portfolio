import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackLink = styled(Link)`
	font-size: ${(props) => props.theme.fonts.format.subtitle.fontSize};
	padding: ${(props) => props.theme.spacing(12)};
`;

export default BackLink;
