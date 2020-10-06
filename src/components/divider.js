import styled from 'styled-components';

const Divider = styled.hr`
	margin-left: 0;
	text-align: left;
	width: ${(props) => props.theme.sizing(17)};
`;

export default Divider;
