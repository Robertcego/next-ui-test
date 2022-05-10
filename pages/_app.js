import {
  createTheme,
  useTheme,
  NextUIProvider,
  Switch,
} from '@nextui-org/react';
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from 'next-themes';

import '../styles/global.css';
export default function App({ Component, pageProps }) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        primary: '#292929',
      }, // override dark theme colors
    },
  });

  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        primary: '#f2e7fe',
      }, // override light theme colors
    },
  });

  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
