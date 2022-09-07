// @mui material components
import { createTheme } from "@mui/material";

// Base Styles
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "assets/theme/base/typography";
import boxShadows from "./base/boxShadows";
import borders from "./base/borders";

// React TS Helper Functions
import boxShadow from "assets/theme/functions/boxShadow";

// React TS components base styles for @mui material components
import button from "assets/theme/components/button";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  borders: { ...borders },
  boxShadows: { ...boxShadows },
  functions: {
    boxShadow,
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     ...globals,
    //     ...flatpickr,
    //     ...container,
    //   },
    // },
    MuiButton: { ...button },
  },
});
