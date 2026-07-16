import { Box, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function CompanyRow({ company }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 280px 100px",
        gap: 4,
        alignItems: "center",
        py: 2,
        borderBottom: "1px solid",
        borderColor: "background.default",
      }}
    >
      <Typography color="background.default">
        {company.name}
      </Typography>

      <Typography color="background.default">
        {company.slug}
      </Typography>

      <Typography
        onClick={() =>
          navigate(`/admin/companies/${company.slug}`)
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
    </Box>
  );
}