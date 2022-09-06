// @mui material components
import { createTheme } from "@mui/material";

// Base Styles
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";
import boxShadows from "./base/boxShadows";

// React TS Helper Functions
// import boxShadow from "./base/boxShadows";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  // borders: { ...borders },
  // boxShadows: { ...boxShadows },
  // function: {},
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       ...globals,
  //       ...flatpickr,
  //       ...container,
  //     },
  //   },
  // },
});
