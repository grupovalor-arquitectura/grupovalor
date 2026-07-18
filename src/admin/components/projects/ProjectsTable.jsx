import { Box, Typography } from "@mui/material";

import { DndContext, closestCenter } from "@dnd-kit/core";

import { SortableContext, verticalListSortingStrategy, } from "@dnd-kit/sortable";

import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import updateProjectOrders from "../../services/firestore/updateProjectOrders";
import { useProjects } from "../../../context/ProjectsContext";
import ProjectRow from "./ProjectRow";

export default function ProjectsTable() {
  const { projects, reloadProjects } = useProjects();

  const [items, setItems] = useState([]);

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

      {/* Header */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "40px 80px 80px 1fr 100px 100px",
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
          ID
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

      {/* Filas */}

    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map((p) => p.slug)}
        strategy={verticalListSortingStrategy}
      >
        {items.map((project) => (
          <ProjectRow
            key={project.slug}
            project={project}
          />
        ))}
      </SortableContext>
    </DndContext>
    </Box>
  );
}