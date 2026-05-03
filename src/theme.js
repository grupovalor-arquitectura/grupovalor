import { createTheme } from "@mui/material/styles";

export const brandTheme = {
  default: {
    bg: "#421b1e",
    circle: "#b9afaf",
    text: "#b9afaf",
  },

  arquitectura: {
    bg: "#155249",
    circle: "#a4ccc8",
    text: "#a4ccc8",
  },

  constructora: {
    bg: "#421b1e",
    circle: "#c16242",
    text: "#c16242",
  },

  promotora: {
    bg: "#2f374a",
    circle: "#b9afaf",
    text: "#b9afaf",
  },

  estrategia: {
    bg: "#421b1e",
    circle: "#ddb58b",
    text: "#ddb58b",
  },

  banca: {
    bg: "#421b1e",
    circle: "#94a7c5",
    text: "#94a7c5",
  },
};

/* 🔥 THEME BASE MUI */
const theme = createTheme({
  palette: {
    primary: { main: "#bfafaa" },
    secondary: { main: "#c16242" },
    background: { default: "#421b1e" },
  },

  typography: {
    fontFamily: `"Satoshi", system-ui, sans-serif`,
  },

  custom: {
    brandTheme,
  },

  /* 🔥 SCROLLBAR GLOBAL */
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: "hidden", // 🔥 elimina scroll horizontal
          scrollbarWidth: "thin",
          scrollbarColor: "#c16242 #421b1e",
        },

        /* Chrome / Edge / Safari */
        "*::-webkit-scrollbar": {
          width: "10px",
        },

        "*::-webkit-scrollbar-track": {
          background: "#421b1e",
        },

        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#c16242",
          borderRadius: "0px", // 🔥 angular
        },

        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#d37454",
        },
      },
    },
  },
});

export default theme;