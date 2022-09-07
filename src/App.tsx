import { CssBaseline, Paper, ThemeProvider } from "@mui/material";

// React contexts
import { useMaterialUIController } from "./context";

// React Light Mode theme
import theme from "./assets/theme";

// React Dark Mode theme
import themeDark from "./assets/theme-dark";
import MDButton from "components/MDButton";

function App() {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <Paper>sdasd</Paper>
      <MDButton variant="text" color="success">
        Props
      </MDButton>
      <MDButton variant="outlined" color="secondary">
        Props
      </MDButton>
      <MDButton variant="gradient" color="warning">
        Props d
      </MDButton>
      <MDButton variant="text" color="error">
        Props
      </MDButton>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
