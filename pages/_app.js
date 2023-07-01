import { ThemeProvider } from '@mui/material/styles';
import '@/styles/globals.css';
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
