import { Box } from "@mui/material";

export default function TimelineTunnel({
   originRef,
   circles = 70,
   visibleCircles = circles,
   size = 84,
   step = 8,
}) {

  return (
    <Box
      sx={{
        position: "absolute",

        top: 0,
        left: 0,

        width: size,

        height:
          size +
          (circles - 1) * step,

        pointerEvents: "none",

        zIndex: 2,
      }}
    >
      {Array.from({ length: visibleCircles }).map((_, index) => (
        <Box
            key={index}
            ref={index === 0 ? originRef : null}
            sx={{
                position: "absolute",
                
                top: index * step,
                left: 0,

                animation:
                    index === 0
                    ? "breath 4s ease-in-out infinite"
                    : "none",


                opacity:
                    index < visibleCircles
                        ? 1
                        : 0,

                    transition:
                    "opacity 0.2s ease-out",

                width: size,
                height: size,

                borderRadius: "50%",

                boxSizing: "border-box",

                backgroundColor:
                index === 0
                    ? "#C76A45"
                    : "transparent",

                border:
                index === 0
                    ? "none"
                    : "1px solid #C76A45",

                    
          }}
        />
      ))}
    </Box>
  );
}