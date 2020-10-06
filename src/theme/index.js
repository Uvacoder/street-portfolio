import GlobalStyle from './global-styles';

const colors = {
	main: '#d7263d',
	white: '#f5f5f5',
	black: '#000',
};

const fontFamily = '"Roboto", "Helvetica", "Ubuntu", "Arial", sans-serif';

const fontWeight = [300, 400, 700];

const format = {
	base: '16px',
	title: {
		fontWeight: 700,
		fontSize: '6rem',
		lineHeight: 1.167,
		letterSpacing: '-0.01562em',
		margin: 0,
	},
	subtitle: {
		fontWeight: 400,
		fontSize: '3.75rem',
		lineHeight: 1.2,
		letterSpacing: '-0.00833em',
		margin: 0,
	},
	text: {
		fontWeight: 400,
		fontSize: '1rem',
		lineHeight: 1.5,
		letterSpacing: '-0.00938em',
	},
};

const fonts = {
	fontFamily,
	fontWeight,
	format,
};

const transitions = {
	easing: {
		easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
		easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
		easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
		sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
	},
	duration: {
		shorter: 200,
		short: 250,
		base: 300,
	},
};

const breakpoints = {
	xs: 0,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920,
};

const spacing = (n) => `${n * 0.25}rem`;
const sizing = (n) => `${n * 0.25}rem`;

const theme = {
	breakpoints,
	colors,
	fonts,
	spacing,
	sizing,
	transitions,
};

export default theme;
export { theme, GlobalStyle };
