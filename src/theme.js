// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Set initial color mode here (either 'light' or 'dark')
    useSystemColorMode: false, // Enable this to respect user's system preferences
  },
  // Add other theme customizations here
});

export default theme;
