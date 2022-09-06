import { Button, CssBaseline, Paper, ThemeProvider } from "@mui/material";

// React contexts
import { useMaterialUIController } from "./context";

// React Light Mode theme
import theme from "./assets/theme";

// React Dark Mode theme
import themeDark from "./assets/theme-dark";

function App() {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <Button color="success">Submit</Button>
      <Paper>sdasd</Paper>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
