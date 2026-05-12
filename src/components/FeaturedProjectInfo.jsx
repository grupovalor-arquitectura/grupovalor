import { Box, Typography } from "@mui/material";

export default function FeaturedProjectInfo() {
  return (
    <Box
      sx={{
        px: "4vw",

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
            fontSize: "4rem",
            lineHeight: 1,

            color: "#421b1e",
            fontWeight: 700,
          }}
        >
          LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
        </Typography>
      </Box>

      {/* BOTTOM */}
      <Box>
        <Typography
          sx={{
            color: "#421b1e",
            fontSize: "0.9rem",
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