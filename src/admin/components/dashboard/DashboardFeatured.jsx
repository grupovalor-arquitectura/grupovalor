import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useProjects } from "../../../context/ProjectsContext";
import updateFeaturedOrders from "../../services/firestore/updateFeaturedOrders";
import FeaturedProjectRow from "./FeaturedProjectRow";

export default function DashboardFeatured() {
  const { featuredProjects, reloadProjects } = useProjects();

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(featuredProjects);
  }, [featuredProjects]);

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
      featuredOrder: index + 1,
    }));

    setItems(updatedItems);

    try {
      await updateFeaturedOrders(updatedItems);
      await reloadProjects();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box
      sx={{
        mt: 8,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 1,
          color: "background.default",
        }}
      >
        Proyectos destacados
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mb: 4,
          color: "background.default",
          opacity: 0.7,
        }}
      >
        Arrastra para cambiar el orden en que aparecen en el Home.
      </Typography>

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((p) => p.slug)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((project) => (
            <FeaturedProjectRow
              key={project.slug}
              project={project}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Box>
  );
}