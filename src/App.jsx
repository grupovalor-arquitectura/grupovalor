import { HelmetProvider } from "react-helmet-async";
import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import theme from "./theme";
import Router from "./router/Router";
import GlobalLoader from "./components/GlobalLoader";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router />
        <GlobalLoader />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;