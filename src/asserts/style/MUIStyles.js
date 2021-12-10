import { createTheme } from "@mui/material";

const MUIStyles = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#219ebc",
    },
    secondary: {
      main: "#ffc107",
    },
  },
  typography: {
    fontFamily: "Helvetica",
  },
});

export default MUIStyles;
