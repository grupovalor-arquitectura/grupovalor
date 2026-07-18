import { Box, Typography } from "@mui/material";

import { useProjects } from "../../context/ProjectsContext";

import CompanyTable from "../components/companies/CompanyTable";

export default function Companies() {
  const { companies } = useProjects();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "background.default",
        }}
      >
        Compañías
      </Typography>

      <CompanyTable companies={companies} />
    </Box>
  );
}