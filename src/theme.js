import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bfafaa",   // color base
      hover: "#c16242",  // hover / activo
    },
    background: {
      default: "#421b1e",
    },
  },
});

export default theme;