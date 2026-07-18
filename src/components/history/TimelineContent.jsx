import { Box, Typography } from "@mui/material";


export default function TimelineContent({
  milestone,
  tunnelComplete
}) {
  

  return (
   <Box
     sx={{
        position: "absolute",
        top: "160vh",
        left: `calc(31.8% + 42px)`,  
        width: 320,
        zIndex: 20,
    }}
        >

        <Box
          sx={{
            width: "1px",
            height: tunnelComplete
              ? "225px"
              : "0px",

            transition:
              "height 1.2s cubic-bezier(0.22,1,0.36,1)",

            backgroundColor: "#C76A45",
            mt: "-200px",

            mb: 3,


           }}
        />

        <Typography
          sx={{
            fontSize: {
              xs: "2rem",
              md: "2rem",
            },

            fontWeight: 700,

            lineHeight: 1.05,

            color: "#D9C8C5",

            mb: 2,

           opacity: tunnelComplete ? 1 : 0,

              transform: tunnelComplete
                ? "translateY(0)"
                : "translateY(30px)",

              transition:
                "opacity 0.8s ease, transform 0.8s ease",


           
          }}
        >
          {milestone.title}
        </Typography>


        <Typography
        sx={{
            fontSize: "0.9rem",

            lineHeight: 1.45,

            color: "#D9C8C5",

            maxWidth: 280,

            opacity: tunnelComplete ? 1 : 0,

            transform: tunnelComplete
              ? "translateY(0)"
              : "translateY(20px)",

            transition:
              "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
        >
        {milestone.description}
        </Typography>
    </Box>
  );
}