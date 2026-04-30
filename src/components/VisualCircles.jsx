import { Box } from "@mui/material";

export default function VisualCircles() {
  const circles = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",          // ocupa todo el espacio del LayoutBase
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        /* 🔹 Animación del centro */
        "@keyframes breath": {
          "0%": { transform: "scale(1)", opacity: 0.5 },
          "50%": { transform: "scale(1.05)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 0.5 },
        },

        /* 🔹 Onda */
        ...Object.fromEntries(
          [-3, -2, -1, 1, 2, 3].map((pos) => [
            `@keyframes waveMove-${pos}`,
            {
              "0%": {
                transform: "translateX(0) scale(0.95)",
                opacity: 0,
              },
              "40%": {
                opacity: 0.6,
              },
              "100%": {
                transform: `translateX(${pos * 120}px) scale(1)`,
                opacity: 1,
              },
            },
          ])
        ),
      }}
    >
      <svg
        viewBox="0 0 1600 600"   // 🔥 más ancho real
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {circles.map((pos, i) => {
          const delay = Math.abs(pos) * 0.35;

          return (
            <circle
              key={i}
              cx={800}           // 🔥 centro REAL del svg (la mitad de 1600)
              cy={300}
              r={180}           // 🔥 grande pero controlado
              fill="none"
              stroke="#c16242"
              strokeWidth="1"
              style={{
                transformOrigin: "800px 300px",
                opacity: pos === 0 ? 1 : 0,
                animation:
                  pos === 0
                    ? "breath 4s ease-in-out infinite"
                    : `waveMove-${pos} 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards ${delay}s`,
              }}
            />
          );
        })}
      </svg>
    </Box>
  );
}