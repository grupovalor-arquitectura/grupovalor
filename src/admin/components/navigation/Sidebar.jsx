import { Box } from "@mui/material";

import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        borderRight: "1px solid",
        borderColor: "background.default",

        display: "flex",
        flexDirection: "column",

        py: 4,
      }}
    >
      <NavItem
        label="Dashboard"
        to="/admin"
      />

      <NavItem
        label="Home"
        to="/admin/home"
      />

      <NavItem
        label="Proyectos"
        to="/admin/projects"
      />

      <NavItem
        label="Archivo"
        to="/admin/archive"
      />

      <NavItem
        label="Empresas"
        to="/admin/companies"
      />

      <NavItem
        label="Footer"
        to="/admin/footer"
      />
    </Box>
  );
}