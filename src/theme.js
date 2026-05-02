import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Satoshi, sans-serif",
  },

  palette: {
    primary: {
      main: "#bfafaa",
    },
    secondary: {
      main: "#c16242",
    },
    background: {
      default: "#421b1e",
      paper: "#bfafaa",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: "thin",
          scrollbarColor: "#c16242 #421b1e",
        },

        "*::-webkit-scrollbar": {
          width: "10px",
        },

        "*::-webkit-scrollbar-track": {
          background: "#421b1e",
        },

        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#c16242",
          borderRadius: "0px", // 🔥 angular (como quieres)
        },

        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#d37454",
        },
      },
    },
  },
});

export default theme;