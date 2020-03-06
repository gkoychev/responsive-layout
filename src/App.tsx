import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./layouts/Main/Main";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        },
        colors: {
          header: "#51592E",
          footer: "#CCC77B",
          colorA: "#719147",
          colorB: "#938B78",
          colorC: "#F8E0AE",
          colorD: "#F0D37A"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
