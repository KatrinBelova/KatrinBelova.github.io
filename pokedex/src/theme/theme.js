import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#4a474b',
    },
    secondary: {
      main: '#4792e7',
    },
  },
  typography: {
    h2: {
      fontWeight: 600,
    },
  },
});

export default theme;
