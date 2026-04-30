import { Box, Typography } from "@mui/material";

export default function FooterStatic() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        pb: { xs: 2, md: 4 },
        pt: "100px"
      }}
    >
      {/* LEFT - LOGO SVG */}
      <Box
        sx={{
          width: 150,
          color: "primary.main", // 👈 viene del theme
          lineHeight: 0, // evita espacio extra
        }}
      >
        <svg
          viewBox="0 0 56.5 39.25"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fill="currentColor"
              d="M28.34.13h-8.1v4.06C18.84,2.1,16.15.16,12.61.16,5.26.16,0,5.53,0,13.27s4.96,12.5,12.26,12.5c3.39,0,6.41-.89,7.97-2.72v3.45c.01,3.62-2.6,5.99-6.24,5.99-2.81,0-5.37-1.08-5.89-4.01H0c.73,7.23,6.08,10.77,14.05,10.77,8.91,0,14.29-5.27,14.29-14.39V.13ZM14.16,19.02c-3.35,0-6.07-2.71-6.07-6.06s2.72-6.06,6.07-6.06,6.07,2.71,6.07,6.06-2.72,6.06-6.07,6.06Z"
            />
            <polygon
              fill="currentColor"
              points="46.09 17.41 41.97 26.1 29.62 .02 37.85 .02 46.09 17.41"
            />
            <circle
              fill="currentColor"
              cx="52.39"
              cy="4.11"
              r="4.11"
            />
          </g>
        </svg>
      </Box>

      {/* RIGHT - TAGLINE */}
      
    </Box>
  );
}