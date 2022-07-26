import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 420,
		},
	},
	typography: {
		h1: {
			fontSize: 26,
			fontWeight: 500,
		},
		h2: {
			fontSize: 20,
			fontWeight: 600,
		},
		caption: {
			fontSize: 10,
		},
		body1: {
			fontSize: 12,
		}
	},
	palette: {
		mode: 'dark',
		neutral: {
			dark: grey[700],
			main: grey[600],
			light: grey[500],
			contrastText: grey[50],
		},
	},
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					color: grey[50],
					fieldset: {
						borderColor: grey[500],
					},
					input: {
						width: 120,
						padding: '4px 16px 4px 16px',
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: grey[400],
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: grey[400],
					},
				},
			},
		},
	},
})

export default theme
