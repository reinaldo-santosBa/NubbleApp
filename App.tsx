import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { LoginScreen } from './src/screen/auth/LoginScreen/LoginScreen';

function App(): JSX.Element{
	return(
		<ThemeProvider theme={theme}>
			<LoginScreen/>
		</ThemeProvider>
	);
}
export default App;