import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import theme from "./theme";
import Router from "./router/Router";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router />
    </ThemeProvider>
  );
}

export default App;