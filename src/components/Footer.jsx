import { Box, Typography, TextField, Button } from "@mui/material";
import GVMono from "../assets/GVMono.svg?react";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#421b1e",
        color: "#d6cfc9",
        px: { xs: 3, md: 6 },
        py: { xs: 5, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
          alignItems: "stretch",
        }}
      >
        {/* LOGO + DIVIDER + DIRECCIÓN */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
          
          {/* LOGO */}
          <GVMono
            style={{
              height: 90,
              width: "auto",
              color: "#d6cfc9",
            }}
          />

          {/* DIVIDER */}
          <Box
            sx={{
              width: "2px",
              height: "auto",
              alignSelf: "stretch",
              backgroundColor: "rgba(214,207,201,0.3)",
              mx: "20px",
            }}
          />

          {/* TEXTO */}
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1 }}>
              Oficina Principal
            </Typography>

            <Typography sx={{ fontSize: 14, lineHeight: 1.6 }}>
              Edificio Monserrate <br />
              Calle 3 Sur # 43 A - 52. <br />
              Oficina 1122 <br />
              Bogotá, Colombia.
            </Typography>
          </Box>
        </Box>

        {/* LINKS */}
        <Box>
          <Typography sx={{ fontSize: 14, lineHeight: 2 }}>
            Términos y condiciones <br />
            Políticas de privacidad <br />
            Manifiesto <br />
            Línea ética
          </Typography>
        </Box>

        {/* CONTACTO */}
        <Box>
          <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1 }}>
            ¿Quieres invertir o <br />
            tienes alguna consulta?
          </Typography>
        </Box>

        {/* FORMULARIO */}
        <Box sx={{  minWidth: 280,
            textAlign: "right",      
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", }}>

                <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 800, }}>
                    Suscríbete a nuestro boletín <br />
                    y entérate de nuestros proyectos
                </Typography>

                <Box sx={{ display: "flex", gap: 1 }}>
                    <TextField
                    placeholder="example@email.com"
                    size="small"
                    variant="outlined"
                    fullWidth
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        borderRadius: "999px",
                        color: "#fff",

                        "& fieldset": {
                            borderColor: "rgba(255,255,255,0.4)",
                        },

                        "&:hover fieldset": {
                            borderColor: "#c16242",
                        },

                        "&.Mui-focused fieldset": {
                            borderColor: "#c16242",
                        },
                        },

                        "& input::placeholder": {
                        color: "rgba(255,255,255,0.5)",
                        },
                    }}
                    />

            <Button
              variant="outlined"
              sx={{
                borderRadius: "999px",
                px: 3,
                color: "#fff",
                borderColor: "rgba(255,255,255,0.4)",

                "&:hover": {
                  borderColor: "#c16242",
                  color: "#c16242",
                },
              }}
            >
              enviar
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: 12,
              mt: 1.5,
              color: "#c16242",
            }}
          >
            Formulario enviado. Revisa tu bandeja.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}