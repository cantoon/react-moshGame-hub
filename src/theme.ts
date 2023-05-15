import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#ecf3f8',
      100: '#ccdbe5',
      200: '#abc4d5',
      300: '#89adc6',
      400: '#6896b6',
      500: '#507c9d',
      600: '#3e607a',
      700: '#2e4557',
      800: '#1b2934',
      900: '#070e13',
    },
  },
})

export default theme
