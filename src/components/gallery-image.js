import styled from 'styled-components';
import { motion } from 'framer-motion';

const GalleryImage = styled(motion.div)`
	background-color: ${(props) => props.theme.colors.white};
	background-image: url(${(props) => props.img});
	background-repeat: no-repeat;
	background-size: cover;
	height: 50vh;
	margin: auto;
	position: ${(props) => props.position || 'center'};
	width: 100vw;
	max-width: ${(props) => props.theme.breakpoints.sm};
`;

export default GalleryImage;
