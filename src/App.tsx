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
import { Card, CardContent, CardHeader, Container, Stack } from "@mui/material";
import MDBox from "components/MDBox";
import MDAlert from "components/MDAlert";
import MDInput from "components/MDInput";

export default function App() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <div>
          <h1>Text Field</h1>
          <Stack direction="row" spacing={1}>
            <MDInput label="Type here..." />
            <MDInput label="Type here..." success />
            <MDInput label="Type here..." error />
            <MDInput variant="standard" label="Type here..." />
            <MDInput type="password" label="Type here..." size="small" />
            <MDInput disabled label="Type here..." size="small" />
            {/* <MDInput label="Type here..." multiline rows={4} /> */}
          </Stack>
        </div>
        <div>
          <h1>Alerts</h1>
          <MDAlert color="error">This is an error alert!</MDAlert>
          <MDAlert color="warning">This is an alert!</MDAlert>
          <MDAlert dismissible color="success">
            This is an alert!
          </MDAlert>
        </div>
        <div>
          <h1>Box</h1>
          <Stack spacing={1} direction="row">
            <MDBox
              color="white"
              bgColor="success"
              // variant="gradient"
              borderRadius="lg"
              shadow="lg"
              opacity={1}
              p={2}
            >
              This is box
            </MDBox>
            <MDBox
              color="white"
              bgColor="info"
              variant="gradient"
              borderRadius="lg"
              shadow="lg"
              opacity={1}
              p={2}
            >
              Box
            </MDBox>
            <MDBox
              color="info"
              bgColor="warning"
              variant="contained"
              borderRadius="lg"
              shadow="lg"
              opacity={1}
              p={2}
            >
              Box
            </MDBox>
          </Stack>
        </div>
        {/* Cards */}
        <div>
          <h1>Cards</h1>
          <Card>
            <CardHeader>This is header</CardHeader>
            <CardContent>fff</CardContent>
          </Card>
        </div>
        {/* Buttons */}
        <div>
          <h1>Buttons</h1>
          <Stack spacing={1} direction="row">
            <MDButton variant="text" color="info">
              Button
            </MDButton>
            <MDButton variant="contained" color="info">
              Button
            </MDButton>
            <MDButton variant="outlined" color="warning">
              Button
            </MDButton>
            <MDButton variant="gradient" color="error">
              Button
            </MDButton>

            <MDButton variant="contained" color="white" size="small">
              Button
            </MDButton>
            <MDButton variant="gradient" color="secondary" size="medium">
              Button
            </MDButton>
            <MDButton variant="gradient" color="success" size="large">
              Button
            </MDButton>
          </Stack>
        </div>
      </Container>
    </ThemeProvider>
  );
}
