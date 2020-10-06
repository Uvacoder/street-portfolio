import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import * as serviceWorker from './serviceWorker';
import theme, { GlobalStyle } from './theme';
import App from './components/App';

render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();
