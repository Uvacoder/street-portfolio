import styled from 'styled-components';
import { motion } from 'framer-motion';

const Frame = styled(motion.div)`
	align-content: center;
	background-color: ${(props) => props.theme.colors.white};
	display: flex;
	height: 495px;
	justify-content: center;
	max-width: 900px;
	overflow: hidden;
	width: 599px;
`;

export default Frame;
