import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function AdminSelect({
  label,
  value,
  onChange,
  options = [],
  sx = {},
}) {
  return (
    <FormControl
      fullWidth
      variant="standard"
      sx={sx}
    >
      <InputLabel
        shrink
        sx={{
          color: "background.default",

          "&.Mui-focused": {
            color: "background.default",
          },
        }}
      >
        {label}
      </InputLabel>

      <Select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        sx={{
          color: "background.default",

          "&:before": {
            borderBottomColor: "background.default",
          },

          "&:after": {
            borderBottomColor: "background.default",
          },

          "&:hover:not(.Mui-disabled):before": {
            borderBottomColor: "background.default",
          },

          "& .MuiSvgIcon-root": {
            color: "background.default",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}