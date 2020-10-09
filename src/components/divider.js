import styled from 'styled-components';

const Divider = styled.hr`
	border-color: ${(props) => props.theme.colors.black};
	margin-left: 0;
	text-align: left;
	width: ${(props) => props.theme.sizing(16)};
`;

export default Divider;
