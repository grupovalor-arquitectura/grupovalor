import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { sendContactForm } from "../../services/contactService";

import ChipButton from "../../admin/components/ui/ChipButton";



const companyOptions = [
  "Grupo Valor",
  "Valor Arquitectura",
  "Valor Constructora",
  "Valor Promotora",
  "Valor Estrategia",
  "Valor Banca de Inversión",
  "No estoy seguro",
];

const fieldSx = {
        mb: 5,

        "& .MuiInputLabel-root": {
            color: "background.default",
        },

        "& .MuiInputLabel-root.Mui-focused": {
            color: "background.default",
        },

        "& .MuiInputBase-input": {
            color: "background.default",
        },

        "& .MuiInputBase-input::placeholder": {
            color: "background.default",
            opacity: 0.7,
        },

        "& .MuiSelect-select": {
            color: "background.default",
        },

        "& .MuiSvgIcon-root": {
            color: "background.default",
        },

        "& .MuiInput-underline:before": {
            borderBottomColor: "background.default",
        },

        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "secondary.main",
        },

        "& .MuiInput-underline:after": {
            borderBottomColor: "secondary.main",
        },
        };

export default function ContactForm() {

    const initialForm = {
        name: "",
        email: "",
        phone: "",
        company: "",
        contactMethod: "",
        message: "",
        privacy: false,
        newsletter: false,
    };
    
    const [status, setStatus] = useState("idle");

    const [form, setForm] = useState(initialForm);

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        };

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "El nombre es obligatorio.";
        }

        if (!form.email.trim()) {
            newErrors.email = "El correo electrónico es obligatorio.";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "El teléfono es obligatorio.";
        }

        if (!form.company) {
            newErrors.company = "Selecciona una empresa.";
        }

        if (!form.contactMethod) {
            newErrors.contactMethod =
            "Selecciona cómo prefieres que te contactemos.";
        }

        if (!form.message.trim()) {
            newErrors.message = "Escribe un mensaje.";
        }

        if (!form.privacy) {
            newErrors.privacy =
            "Debes aceptar la política de tratamiento de datos.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
        };    

    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {
            setStatus("sending");

            console.log("Formulario enviado:", form);

            await sendContactForm(form);

            setForm(initialForm);
            setErrors({});
            setStatus("success");
        } catch (error) {
            console.error(error);

            setStatus("error");
        }
        };

    if (status === "success") {
        return (
            <Box
            sx={{
                width: "100%",
                bgcolor: "primary.main",
                py: {
                xs: 12,
                md: 18,
                },
            }}
            >
            <Box
                sx={{
                maxWidth: 720,
                mx: "auto",
                px: 3,
                textAlign: "center",
                }}
            >
                <Typography
                variant="h2"
                sx={{ mb: 4 }}
                >
                ¡Gracias por escribirnos!
                </Typography>

                <Typography
                sx={{
                    mb: 6,
                    maxWidth: 520,
                    mx: "auto",
                }}
                >
                Hemos recibido tu mensaje correctamente.
                <br />
                Muy pronto uno de nuestros asesores se pondrá en contacto contigo.
                </Typography>

                <ChipButton
                label="Enviar otro mensaje"
                onClick={() => setStatus("idle")}
                />
            </Box>
            </Box>
        );
        }

    return (
        <Box
        sx={{
            width: "100%",
            bgcolor: "primary.main",
            py: {
            xs: 8,
            md: 12,
            },
        }}
        >
        <Box
            component="form"
            sx={{
            maxWidth: 720,
            mx: "auto",
            px: {
                xs: 3,
                md: 0,
            },
            }}
        >
            <Typography
            variant="h2"
            sx={{ 
                mb: 8,
                fontWeight: 700,
                color: "background.default"

             }}
            >
            ¿Cómo podemos ayudarte?
            </Typography>

            <TextField
                fullWidth
                variant="standard"
                label="Nombre"
                placeholder="Laura Pérez"
                name="name"
                value={form.name}
                onChange={handleChange}
                sx={fieldSx}
                />

            <TextField
                fullWidth
                variant="standard"
                label="Correo electrónico"
                placeholder="hola@correo.com"
                name="email"
                value={form.email}
                onChange={handleChange}
                sx={fieldSx}
                />

            <TextField
                fullWidth
                variant="standard"
                label="Teléfono"
                placeholder="300 1234567"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                sx={fieldSx}
            />

            <TextField
                select
                fullWidth
                variant="standard"
                label="Empresa de interés"
                name="company"
                value={form.company}
                onChange={handleChange}
                sx={{
                    ...fieldSx,
                    mb: 6,
                }}
                slotProps={{
                    select: {
                        MenuProps: {
                        PaperProps: {
                            sx: {
                            bgcolor: "primary.main",
                            color: "background.default",
                            },
                        },
                        },
                    },
                    }}
                >
                {companyOptions.map((company) => (
                    <MenuItem
                    key={company}
                    value={company}
                    >
                    {company}
                    </MenuItem>
                ))}
            </TextField>

            <FormControl
                error={Boolean(errors.contactMethod)}
                sx={{ mb: 6 }}
                >
                <FormLabel
                    sx={{
                    color: "background.default",
                    mb: 2,
                    "&.Mui-focused": {
                        color: "background.default",
                    },
                    }}
                >
                    ¿Cómo prefieres que te contactemos?
                </FormLabel>

                <RadioGroup
                    name="contactMethod"
                    value={form.contactMethod}
                    onChange={handleChange}
                >
                    <FormControlLabel
                    value="email"
                    control={
                        <Radio
                        sx={{
                            color: "background.default",
                            "&.Mui-checked": {
                            color: "background.default",
                            },
                        }}
                        />
                    }
                    label="Correo electrónico"
                    sx={{ color: "background.default" }}
                    />

                    <FormControlLabel
                    value="phone"
                    control={
                        <Radio
                        sx={{
                            color: "background.default",
                            "&.Mui-checked": {
                            color: "background.default",
                            },
                        }}
                        />
                    }
                    label="Llamada telefónica"
                    sx={{ color: "background.default" }}
                    />

                    <FormControlLabel
                    value="whatsapp"
                    control={
                        <Radio
                        sx={{
                            color: "background.default",
                            "&.Mui-checked": {
                            color: "background.default",
                            },
                        }}
                        />
                    }
                    label="WhatsApp"
                    sx={{ color: "background.default" }}
                    />
                </RadioGroup>

                <Typography
                    variant="caption"
                    color="error"
                    sx={{ mt: 1 }}
                >
                    {errors.contactMethod}
                </Typography>
                </FormControl>

            <TextField
                fullWidth
                multiline
                rows={5}
                variant="standard"
                label="Mensaje"
                placeholder="Cuéntanos en qué podemos ayudarte."
                name="message"
                value={form.message}
                onChange={handleChange}
                error={Boolean(errors.message)}
                helperText={errors.message}
                sx={{
                    ...fieldSx,
                    mb: 6,
                }}
                />

            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1,
                mb: 6,
            }}
            >
           <FormControlLabel
                sx={{
                    color: "background.default",
                }}
                control={
                    <Checkbox
                    name="privacy"
                    checked={form.privacy}
                    onChange={handleChange}
                    sx={{
                        color: "background.default",
                        "&.Mui-checked": {
                        color: "background.default",
                        },
                    }}
                    />
                }
                label="He leído y acepto la política de tratamiento de datos."
                />

                {errors.privacy && (
                <Typography
                    variant="caption"
                    color="error"
                    sx={{ ml: 4 }}
                >
                    {errors.privacy}
                </Typography>
                )}
            
            <FormControlLabel
                sx={{
                    color: "background.default",
                }}
                control={
                    <Checkbox
                    name="newsletter"
                    checked={form.newsletter}
                    onChange={handleChange}
                    sx={{
                        color: "background.default",
                        "&.Mui-checked": {
                        color: "background.default",
                        },
                    }}
                    />
                }
                label="Deseo suscribirme al boletín."
                />
            </Box>

            <ChipButton
            label="Enviar"
            onClick={handleSubmit}
            />
        </Box>
        </Box>
    );
}