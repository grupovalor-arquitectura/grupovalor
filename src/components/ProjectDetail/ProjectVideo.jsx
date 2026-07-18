import { Box } from "@mui/material";

export default function ProjectVideo({ video }) {
  if (!video) return null;

  const getEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);

      // youtube.com/watch?v=
      if (
        parsed.hostname.includes("youtube.com") &&
        parsed.searchParams.get("v")
      ) {
        return `https://www.youtube.com/embed/${parsed.searchParams.get(
          "v"
        )}`;
      }

      // youtu.be/
      if (parsed.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed${parsed.pathname}`;
      }

      return url;
    } catch {
      return "";
    }
  };

  const embedUrl = getEmbedUrl(video);

  if (!embedUrl) return null;

  return (
    <Box
      sx={{
        bgcolor: "primary.main",

        px: {
          xs: 3,
          md: 7,
        },

        pb: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",

          width: "100%",

          aspectRatio: "16 / 9",

          overflow: "hidden",

          bgcolor: "#000",
        }}
      >
        <Box
          component="iframe"
          src={embedUrl}
          title="Project video"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

          allowFullScreen

          sx={{
            position: "absolute",

            inset: 0,

            width: "100%",

            height: "100%",

            border: 0,
          }}
        />
      </Box>
    </Box>
  );
}