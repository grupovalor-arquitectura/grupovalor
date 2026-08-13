import { Box, Typography } from "@mui/material";

import { DndContext, closestCenter } from "@dnd-kit/core";

import { SortableContext, verticalListSortingStrategy, } from "@dnd-kit/sortable";

import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import updateProjectOrders from "../../services/firestore/updateProjectOrders";
import { useProjects } from "../../../context/ProjectsContext";
import ProjectRow from "./ProjectRow";
import AdminTextField from "../ui/AdminTextField";

export default function ProjectsTable() {
  const { projects, reloadProjects } = useProjects();

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  console.log(
    "Projects recibidos:",
    projects.map((p) => ({
      title: p.title,
      order: p.order,
    }))
  );

  setItems([...projects].sort((a, b) => a.order - b.order));
}, [projects]);

  const normalize = (value) =>
    (value || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredItems = search.trim()
    ? items.filter((project) =>
        normalize(project.title).includes(normalize(search))
      )
    : items;

  const isFiltering = search.trim().length > 0;

  async function handleDragEnd(event) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(
      (item) => item.slug === active.id
    );

    const newIndex = items.findIndex(
      (item) => item.slug === over.id
    );

    const reordered = arrayMove(items, oldIndex, newIndex);

    const updatedItems = reordered.map((project, index) => ({
      ...project,
      order: index + 1,
    }));

    setItems(updatedItems);

    try {
      await updateProjectOrders(updatedItems);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "background.default",
          mb: 5,
        }}
      >
        Proyectos
      </Typography>

      {/* Buscador */}

      <Box sx={{ mb: 5, maxWidth: 360 }}>
        <AdminTextField
          label="Buscar por nombre"
          value={search}
          onChange={(value) => setSearch(value)}
        />
      </Box>

      {/* Header */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "40px 80px 1fr 100px 100px",
          gap: 4,
          alignItems: "center",
          pb: 2,
          borderBottom: "1px solid",
          borderColor: "background.default",
        }}
      >
        <Box />

        <Typography color="background.default">
          Orden
        </Typography>

        <Typography color="background.default">
          Nombre
        </Typography>

        <Typography
          color="background.default"
          sx={{ justifySelf: "end" }}
        >
          Editar
        </Typography>

        <Typography
          color="background.default"
          sx={{ justifySelf: "end" }}
        >
          Eliminar
        </Typography>
      </Box>

      {/* Sin resultados */}

      {isFiltering && filteredItems.length === 0 && (
        <Typography
          sx={{
            color: "background.default",
            opacity: 0.6,
            py: 4,
          }}
        >
          No se encontraron proyectos con ese nombre.
        </Typography>
      )}

      {/* Filas */}

    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={filteredItems.map((p) => p.slug)}
        strategy={verticalListSortingStrategy}
      >
        {filteredItems.map((project) => (
          <ProjectRow
            key={project.slug}
            project={project}
            dragDisabled={isFiltering}
          />
        ))}
      </SortableContext>
    </DndContext>
    </Box>
  );
}