import { createTheme } from '@shopify/restyle';

const palette = {
	greenPrimary: '#074C4E',
	greenPrimaryLight: '#EAF6F6',
	carrotSecondary: '#F86F2D',
	carrotSecondaryLight: '#FAE6DD',
	greenSuccess: '#4ABC86',
	greenSuccessLight: '#D8FFEC',
	redError: '#EA3838',
	redErrorLight: '#FBECEC',

	grayBlack: '#000000',
	gray1: '#636363',
	gray2: '#8E8E8E',
	gray3: '#B3B3B3',
	gray4: '#E1E1E1',
	gray5: '#F5F5F5',
	grayWhite: '#FFFFFF',
};

export const theme = createTheme({
	colors: {
		...palette,
		primary: palette.greenPrimary,
		primaryContrast: palette.grayWhite,
        
		buttonPrimary: palette.greenPrimary,

		background: palette.grayWhite,
		backgroundContranst: palette.grayBlack,
        
		error: palette.redError,
		errorLight: palette.redErrorLight,
        
		sucess: palette.greenSuccess,
		sucessLight: palette.greenSuccessLight,
        
	},
	spacing: {},
	borderRadius: {
        
	}
});

export type Theme = typeof theme;