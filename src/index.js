import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./asserts/style/globalStyle";
import MUIStyles from "./asserts/style/MUIStyles";
import { StyledEngineProvider } from "@mui/styled-engine";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { GlobalStorage } from "./GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={MUIStyles}>
        <CssBaseline />
        <GlobalStyle />
        <GlobalStorage>
          <App />
        </GlobalStorage>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
