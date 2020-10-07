import styled from 'styled-components';

const Divider = styled.hr`
	margin-left: 0;
	text-align: left;
	width: ${(props) => props.theme.sizing(16)};
	border-color: ${(props) => props.theme.colors.black};
`;

export default Divider;
