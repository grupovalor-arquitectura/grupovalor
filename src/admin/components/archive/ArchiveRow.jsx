import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useProjects } from "../../../context/ProjectsContext";

import deleteArchive from "../../services/deleteArchive";

import ConfirmDialog from "../ui/ConfirmDialog";

export default function ArchiveRow({ archive }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const { reloadProjects } = useProjects();

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      setDeleting(true);

      await deleteArchive(archive);

      await reloadProjects();

      setOpenDelete(false);
    } catch (error) {
      console.error(error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "80px 80px 160px 1fr 100px 100px",
        gap: 4,
        alignItems: "center",
        py: 2,
        borderBottom: "1px solid",
        borderColor: "background.default",
      }}
    >
      <Typography color="background.default">
        {archive.id}
      </Typography>

      <Typography color="background.default">
        {archive.order}
      </Typography>

      <Typography color="background.default">
        {archive.year}
      </Typography>

      <Typography color="background.default">
        {archive.title}
      </Typography>

      <Typography
        onClick={() =>
          navigate(`/admin/archive/${archive.id}`)
        }
        sx={{
          color: "background.default",
          cursor: "pointer",
          justifySelf: "end",

          "&:hover": {
            opacity: 0.6,
          },
        }}
      >
        Editar
      </Typography>

      <Typography
        onClick={() => setOpenDelete(true)}
        sx={{
          color: "background.default",
          cursor: "pointer",
          justifySelf: "end",

          "&:hover": {
            opacity: 0.6,
          },
        }}
      >
        Eliminar
      </Typography>

      <ConfirmDialog
        open={openDelete}
        title="Eliminar registro"
        message={`¿Estás seguro de eliminar "${archive.title}"? Esta acción eliminará el registro y todas sus imágenes de forma permanente.`}
        confirmText="Eliminar"
        cancelText="Cancelar"
        loading={deleting}
        onConfirm={handleDelete}
        onClose={() => {
          if (!deleting) {
            setOpenDelete(false);
          }
        }}
      />
    </Box>
  );
}