import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <CustomCursor />
      <Home />
    </ThemeProvider>
  );
}

export default App;