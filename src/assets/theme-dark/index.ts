// @mui material components
import { createTheme } from "@mui/material/styles";

// React TS Base Styles
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
});
