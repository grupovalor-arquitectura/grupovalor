import { Box, Typography } from "@mui/material";

import { useProjects } from "../../../context/ProjectsContext";

import CompanyRow from "./CompanyRow";

export default function CompanyTable() {
  const { companies } = useProjects();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "background.default",
          mb: 5,
        }}
      >
        Compañías
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 280px 100px",
          gap: 4,
          alignItems: "center",
          pb: 2,
          borderBottom: "1px solid",
          borderColor: "background.default",
        }}
      >
        <Typography color="background.default">
          Nombre
        </Typography>

        <Typography color="background.default">
          Slug
        </Typography>

        <Typography
          color="background.default"
          sx={{ justifySelf: "end" }}
        >
          Editar
        </Typography>
      </Box>

      {companies.map((company) => (
        <CompanyRow
          key={company.slug}
          company={company}
        />
      ))}
    </Box>
  );
}