import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackContainer = styled(motion.div)`
	padding: ${(props) => props.theme.spacing(12)};
`;

export default BackContainer;
