import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { topics, links } from './config.json';
import * as serviceWorker from './serviceWorker';
import theme, { GlobalStyle } from './theme';
import App from './components/App';

render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<App topics={topics} links={links} />
			</Router>
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();
