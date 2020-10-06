import styled from 'styled-components';

const MainNav = styled.nav`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing(6)};
`;

export default MainNav;
