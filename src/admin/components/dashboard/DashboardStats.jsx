import { Box, Typography } from "@mui/material";

import { useProjects } from "../../../context/ProjectsContext";

function StatCard({ title, value }) {
  return (
    <Box
      sx={{
        flex: 1,
        minHeight: 160,

        border: "1px solid",
        borderColor: "background.default",

        p: 4,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          color: "background.default",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          color: "background.default",
          textAlign: "center",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default function DashboardStats() {
  const {
    projects,
  } = useProjects();

  const saleCount = projects.filter((project) =>
    project.filters?.includes("sale")
  ).length;

  const constructionCount = projects.filter((project) =>
    project.filters?.includes("construction")
  ).length;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 4,
        mb: 8,
      }}
    >
      <StatCard
        title="Total Proyectos"
        value={projects.length}
      />

      <StatCard
        title="En venta | Renta"
        value={saleCount}
      />

      <StatCard
        title="En construcción"
        value={constructionCount}
      />
    </Box>
  );
}