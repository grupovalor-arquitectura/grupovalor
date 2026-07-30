export default function BaseCircles({
  circles,
  active,
  circleColor,
  glow,
  logos,
  onTransitionEnd,
}) {
  return (
    <>
      {circles.map((c, i) => {
        const delay = 1.5 + Math.abs(c.pos) * 0.3;
        const isActive = active === c.key && c.key !== null;
        const Logo = logos[c.key];
        const isLastCircle = c.pos === 3;

        return (
          <g key={i}>
            <circle
              cx={800}
              cy={300}
              r={180}
              fill={circleColor}
              fillOpacity={isActive ? 1 : 0}
              stroke={circleColor}
              strokeWidth={1}
              style={{
                transformOrigin: "800px 300px",
                animation:
                  c.pos === 0
                    ? "breath 4s ease-in-out infinite"
                    : `
                      waveMove-${c.pos} 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards ${delay}s,
                      breath 4s ease-in-out infinite ${delay + 4}s
                    `,
                transition:
                  "fill-opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease",
                filter: isActive ? glow : "none",
              }}
              onAnimationEnd={(e) => {
                if (
                  isLastCircle &&
                  e.animationName.startsWith("waveMove")
                ) {
                  onTransitionEnd?.();
                }
              }}
            />

            {isActive && Logo && (
              <g
                style={{
                  transform: `
                    translateX(${c.pos * 120}px)
                    scale(2)
                  `,
                  transformOrigin: "800px 300px",
                  opacity: 0,
                  animation: "fadeInLogo 0.6s ease-in forwards",
                }}
              >
                <Logo
                  x={800 - 90}
                  y={300 - 30}
                  width={180}
                  height={60}
                  style={{ color: "#421b1e" }}
                />
              </g>
            )}
          </g>
        );
      })}
    </>
  );
}