import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./asserts/style/globalStyle";
import MUIStyles from "./asserts/style/MUIStyles";
import { StyledEngineProvider } from "@mui/styled-engine";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={MUIStyles}>
        <CssBaseline />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
