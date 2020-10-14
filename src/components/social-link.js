import styled from 'styled-components';
import { motion } from 'framer-motion';

const SocialLink = styled(motion.a)`
	color: ${(props) => props.theme.colors.black};
	text-decoration: none;

	&:hover {
		color: ${(props) => props.theme.colors.black};
		text-decoration: underline;
	}
`;

export default SocialLink;
