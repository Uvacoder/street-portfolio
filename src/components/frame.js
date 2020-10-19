import styled from 'styled-components';
import { motion } from 'framer-motion';

const Frame = styled(motion.div)`
	align-content: center;
	justify-content: center;
	display: flex;
	background-color: ${(props) => props.theme.colors.white};
	height: 495px;
	overflow: hidden;
	width: 599px;
`;

export default Frame;
