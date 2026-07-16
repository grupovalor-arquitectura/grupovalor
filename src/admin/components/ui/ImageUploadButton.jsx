import { useRef } from "react";
import { Button } from "@mui/material";

export default function ImageUploadButton({
  children = "Subir imagen",
  multiple = false,
  accept = "image/*",
  loading = false,
  onSelect,
}) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (!loading) {
      inputRef.current?.click();
    }
  };

  const handleChange = (event) => {
    const files = Array.from(event.target.files || []);

    if (!files.length) return;

    if (multiple) {
      onSelect?.(files);
    } else {
      onSelect?.(files[0]);
    }

    // Permite volver a seleccionar el mismo archivo
    event.target.value = "";
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        hidden
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
      />

      <Button
        variant="outlined"
        disabled={loading}
        onClick={handleClick}
        sx={{
            minWidth: 180,

            color: "background.default",
            borderColor: "background.default",

            "&:hover": {
            borderColor: "background.default",
            backgroundColor: "transparent",
            opacity: 0.7,
            },

            "&.Mui-disabled": {
            color: "text.disabled",
            borderColor: "divider",
            },
        }}
        >
        {loading ? "Subiendo..." : children}
        </Button>
    </>
  );
}