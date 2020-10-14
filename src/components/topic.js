import React from 'react';
import { motion } from 'framer-motion';

import FlexEndWrapper from './flex-end-wrapper';
import TopicSelector from './topic-selector';
import TopicLink from './topic-link';

const Topic = ({ topic, delay, isSelected, onSelect }) => {
	return (
		<FlexEndWrapper>
			<TopicSelector
				initial={{ opacity: 0, x: '-100%' }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: delay * 0.1, duration: 0.6, ease: 'easeInOut' }}
				isSelected={isSelected}
				content={topic}
			>
				<label htmlFor={topic} onChange={() => onSelect(topic)}>
					{topic}
					<span>{topic}</span>
					<input
						type="radio"
						id={topic}
						name="topic"
						defaultChecked={isSelected}
					/>
				</label>
			</TopicSelector>
			{isSelected ? (
				<motion.span
					initial={{ opacity: 0, y: 50, x: -50 }}
					animate={{ opacity: 1, y: 0, x: 0 }}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
				>
					<TopicLink alt={topic} to={`/${topic}`}>
						explore
					</TopicLink>
				</motion.span>
			) : null}
		</FlexEndWrapper>
	);
};

export default Topic;
