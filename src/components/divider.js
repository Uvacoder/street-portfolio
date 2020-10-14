import styled from 'styled-components';
import { motion } from 'framer-motion';

const Divider = styled(motion.hr)`
	border-color: ${(props) => props.theme.colors.black};
	margin-left: 0;
	text-align: left;
`;

export default Divider;
