import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    typography: {
        fontFamily: "Satoshi, sans-serif",
    },
    palette: {
        primary: {
        main: "#bfafaa",   // color base (texto/iconos)
        },
        secondary: {
        main: "#c16242",   // hover / activo
        },
        background: {
        default: "#421b1e", // fondo oscuro
        paper: "#bfafaa",   // superficies claras
        },
    },
});

export default theme;