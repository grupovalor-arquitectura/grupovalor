import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import theme from "./theme";
import Router from "./router/Router";
import GlobalLoader from "./components/GlobalLoader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router />
      <GlobalLoader />
    </ThemeProvider>
  );
}

export default App;