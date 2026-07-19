import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

export default function AdminCheckboxGroup({
  label,
  value = [],
  options = [],
  onChange,
}) {
  const handleToggle = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          mb: 1.5,
          fontWeight: 600,
          color: "background.default",
        }}
      >
        {label}
      </Typography>

    <FormGroup>
    {options.map((option) => (
        <FormControlLabel
        key={option.value}
        control={
            <Checkbox
            checked={value.includes(option.value)}
            onChange={() => handleToggle(option.value)}
            sx={{
                color: "divider",

                "&.Mui-checked": {
                color: "background.default",
                },

                "&:hover": {
                backgroundColor: "transparent",
                },
            }}
            />
        }
        label={option.label}
        sx={{
            color: "background.default",

            "& .MuiFormControlLabel-label": {
            fontSize: 16,
            fontWeight: 400,
            },
        }}
        />
    ))}
    </FormGroup>
    </Box>
  );
}