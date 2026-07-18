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
    archiveProjects,
  } = useProjects();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 4,
        mb: 8,
      }}
    >
      <StatCard
        title="Total Proyectos"
        value={projects.length}
      />

      <StatCard
        title="Total Archivo"
        value={archiveProjects.length}
      />
    </Box>
  );
}