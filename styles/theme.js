import { theme as chakraTheme, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  ...chakraTheme,
  config: {
    useSystemColorMode: true,
    initialColorMode: 'system'
  },
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
});

export default theme;
