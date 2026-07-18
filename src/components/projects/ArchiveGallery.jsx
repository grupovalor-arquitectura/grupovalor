import { Box } from "@mui/material";
import { useRef } from "react";

export default function ArchiveGallery({ gallery = [] }) {
  const containerRef = useRef(null);

  if (!gallery.length) return null;

  const scroll = (direction) => {
    if (!containerRef.current) return;

    const amount = containerRef.current.clientWidth * 0.8;

    containerRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const arrowStyle = (rotation) => ({
    width: 34,
    height: 34,

    border: "2px solid",
    borderColor: "secondary.main",

    borderTop: "none",
    borderRight: "none",

    transform: `rotate(${rotation}deg)`,

    cursor: "pointer",

    transition: "all .3s ease",

    "&:hover": {
      transform: `rotate(${rotation}deg) scale(1.15)`,
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        py: 4,

        display: "grid",
        gridTemplateColumns: "40px minmax(0,1fr) 40px",
        columnGap: 0,
        alignItems: "center",
        
      }}
    >
      {/* ================= LEFT ================= */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          onClick={() => scroll("left")}
          sx={arrowStyle(45)}
        />
      </Box>

      {/* ================= GALLERY ================= */}

      <Box
        ref={containerRef}
        sx={{
          overflowX: "auto",
          overflowY: "hidden",

          scrollBehavior: "smooth",

          scrollbarWidth: "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {gallery.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Project image ${index + 1}`}
              loading="lazy"
              draggable={false}
              sx={{
                flexShrink: 0,

                width: {
                  xs: 280,
                  md: 520,
                },

                aspectRatio: "4 / 3",

                objectFit: "cover",

                display: "block",

                userSelect: "none",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ================= RIGHT ================= */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          onClick={() => scroll("right")}
          sx={arrowStyle(225)}
        />
      </Box>
    </Box>
  );
}