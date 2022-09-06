// @mui material components
import { createTheme } from "@mui/material/styles";

// React TS Base Styles
import colors from "assets/theme-dark/base/colors";
import breakpoints from "assets/theme-dark/base/breakpoints";
import typography from "assets/theme-dark/base/typography";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
});
