import { extendTheme } from 'native-base';

const colors = {
  primary: {
    50: '#0EBEA9',
    100: '#0DAB98',
    200: '#0B9887',
    300: '#0A8576',
    400: '#097266',
    500: '#075E54',
    600: '#064C44',
    700: '#043933',
    800: '#032622',
    900: '#011311',
  },
};

const theme = extendTheme({
  colors,
  config: {
    initialColorMode: 'dark',
  },
});

export default theme;
