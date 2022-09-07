// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// React TS Base Styles
import colors from "assets/theme-dark/base/colors";
import breakpoints from "assets/theme-dark/base/breakpoints";
import typography from "assets/theme-dark/base/typography";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";
import globals from "assets/theme-dark/base/globals";

// React TS Helper Functions
import boxShadow from "assets/theme-dark/functions/boxShadow";
import hexToRgb from "assets/theme-dark/functions/hexToRgb";
import linearGradient from "assets/theme-dark/functions/linearGradient";
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
});
