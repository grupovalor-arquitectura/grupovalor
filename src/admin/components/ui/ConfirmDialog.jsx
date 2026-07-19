import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmText = "Aceptar",
  cancelText = "Cancelar",
  loading = false,
  onConfirm,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      onClose={loading ? undefined : onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            bgcolor: "primary.main",
            borderRadius: 2,
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          color: "background.default",
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText
          sx={{
            color: "background.default",
          }}
        >
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          disabled={loading}
          sx={{
            color: "background.default",
            borderColor: "background.default",

            "&:hover": {
              borderColor: "background.default",
              backgroundColor: "transparent",
              opacity: 0.7,
            },
          }}
        >
          {cancelText}
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={onConfirm}
          disabled={loading}
        >
          {loading ? "Eliminando..." : confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}