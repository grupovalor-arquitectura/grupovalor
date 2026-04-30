import { Box } from "@mui/material";

export default function VisualCircles({ active = null }) {
  const circles = [
    { pos: -3, key: "promotora" },
    { pos: -2, key: "constructora" },
    { pos: -1, key: "arquitectura" },
    { pos: 0, key: "default" },
    { pos: 1, key: "estrategia" },
    { pos: 2, key: "banca" },
    { pos: 3, key: null },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        /* 🔹 respiración (solo escala) */
        "@keyframes breath": {
          "0%": { scale: 1 },
          "50%": { scale: 1.03},
          "100%": { scale: 1},
        },

        /* 🔹 expansión + quedarse */
        ...Object.fromEntries(
          [-3, -2, -1, 1, 2, 3].map((pos) => [
            `@keyframes waveMove-${pos}`,
            {
              "0%": {
                transform: "translateX(0)",
               
              },
              "30%": {
                
              },
              "100%": {
                transform: `translateX(${pos * 120}px)`,
              },
            },
          ])
        ),
      }}
    >
      <svg
        viewBox="0 0 1600 600"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {circles.map((c, i) => {
          const delay = 1.5 + Math.abs(c.pos) * 0.3; // 🔥 espera inicial + onda progresiva
          const isActive = active === c.key && c.key !== null;

          return (
            <circle
              key={i}
              cx={800}
              cy={300}
              r={180}
              fill={isActive ? "#c16242" : "none"}
              stroke="#c16242"
              strokeWidth={1}
              style={{
                transformOrigin: "800px 300px",

                /* 🔥 CLAVE: animaciones separadas correctamente */
                animation:
                  c.pos === 0
                    ? "breath 4s ease-in-out infinite"
                    : `
                        waveMove-${c.pos} 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards ${delay}s,
                        breath 4s ease-in-out infinite ${delay + 4}s
                      `,


                transition:
                  "fill 0.4s ease, opacity 0.4s ease, filter 0.4s ease",

                filter: isActive
                  ? "drop-shadow(0 0 12px rgba(193,98,66,0.4))"
                  : "none",
              }}
            />
          );
        })}
      </svg>
    </Box>
  );
}