import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/text/text';
import { Button } from './src/components/button/button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App(): JSX.Element{
	return(
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<View style={{paddingHorizontal: 20}}>
					<Text preset='headingLarge' italic>
						CoffStack
					</Text>
					<Button preset='outline' loading title='Entrar' />
				</View>
			</SafeAreaView>
		</ThemeProvider>
	);
}
export default App;