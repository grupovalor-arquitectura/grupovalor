import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import LogoGV from "../../../assets/LogoGV.svg?react";
import ChipButton from "../ui/ChipButton";

export default function LoginContainer({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 820,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* LOGO */}

        <Box
          sx={{
            color: "background.default",
            mb: 8,
          }}
        >
          <LogoGV
            style={{
              width: 480,
              height: "auto",
              display: "block",
            }}
          />
        </Box>

        {/* TÍTULO */}

        <Typography
          variant="h3"
          sx={{
            mb: 10,
            fontWeight: 700,
            color: "background.default",
            textAlign: "center",
          }}
        >
          Panel de administración
        </Typography>

        {/* FORMULARIO */}

        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
          }}
        >
          {/* EMAIL */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              mb: 5,
            }}
          >
            <Typography
              sx={{
                width: 180,
                color: "background.default",
              }}
            >
              Correo electrónico
            </Typography>

            <TextField
              fullWidth
              variant="standard"
              value={email}
              placeholder="admin@grupovalor.com"
              onChange={(event) =>
                onEmailChange(event.target.value)
              }
            />
          </Box>

          {/* PASSWORD */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Typography
              sx={{
                width: 180,
                color: "background.default",
              }}
            >
              Contraseña
            </Typography>

            <TextField
              fullWidth
              variant="standard"
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(event) =>
                onPasswordChange(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onSubmit();
                }
              }}
            />
          </Box>

          {/* ERROR */}

          {error && (
            <Typography
              sx={{
                color: "error.main",
                mt: 2,
                textAlign: "center",
              }}
            >
              {error}
            </Typography>
          )}

          {/* BOTÓN */}

         <Box
            sx={{
              mt: 7,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ChipButton
              label="Ingresar"
              onClick={onSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}