import styled from 'styled-components';
import { motion } from 'framer-motion';

const Title = styled(motion.h1)`
	padding: ${(props) => props.theme.spacing(12)};
`;

export default Title;
