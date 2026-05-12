import { Box, Typography } from "@mui/material";

export default function FeaturedProjectInfo() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 4 },

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        

        height: "90vh",
      }}
    >
      {/* TOP */}
      <Box>
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: 1,

            color: "#421b1e",
            fontWeight: 700,
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Typography>
      </Box>

      {/* BOTTOM */}
      <Box>
        <Typography
          sx={{
            color: "#421b1e",
            fontSize: "14px",
            lineHeight: 1.7,
            maxWidth: "320px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et 
        </Typography>
      </Box>
    </Box>
  );
}