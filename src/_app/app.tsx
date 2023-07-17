import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import * as Styled from './app.styled';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Styled.Header fontSize='20px'>Svine</Styled.Header>
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  );
};
