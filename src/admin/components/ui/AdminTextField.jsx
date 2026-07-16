import { TextField } from "@mui/material";

export default function AdminTextField({
  sx = {},
  onChange,
  ...props
}) {
  return (
    <TextField
      fullWidth
      variant="standard"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      onChange={(event) => onChange(event.target.value)}
      sx={{
        "& .MuiInputLabel-root": {
          color: "background.default",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "background.default",
        },
        "& .MuiInputBase-input": {
          color: "background.default",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "background.default",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "background.default",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "background.default",
        },
        ...sx,
      }}
    />
  );
}