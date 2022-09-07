// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// React TS themes
import theme from "assets/theme";

// React TS Dark Mode themes
import themeDark from "assets/theme-dark";

// React TS contexts
import { useMaterialUIController } from "context";
import MDButton from "components/MDButton";

export default function App() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}
