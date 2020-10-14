const random = (max, min = -2) => {
	return Math.floor(Math.random() * (max - min) + min);
};

export default random;
