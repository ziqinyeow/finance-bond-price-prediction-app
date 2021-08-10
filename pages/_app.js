import {
  GlobalStyle,
  ThemeProvider,
  defaultTheme,
  darkTheme,
} from "@/styles/global.js";
import "remixicon/fonts/remixicon.css";
import Dashboard from "@/layouts/Dashboard";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);

  const handleTheme = (dark) => {
    setTheme(dark);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme ? darkTheme : defaultTheme}>
        <Dashboard darkTheme={handleTheme}>
          <Component {...pageProps} />
        </Dashboard>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
