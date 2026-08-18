import fallbackImage1 from "../assets/IMG_4898.PNG";
import fallbackImage2 from "../assets/IMG_4899.PNG";
import fallbackImage3 from "../assets/IMG_4900.PNG";

// Imágenes que se usan cuando un proyecto no tiene coverImage propia.
// Centralizado acá para que la tarjeta de proyecto (mobile y desktop)
// y el hero del detalle de proyecto siempre muestren la MISMA imagen
// de respaldo para un mismo proyecto.
export const fallbackImages = [fallbackImage1, fallbackImage2, fallbackImage3];

// Determinístico a partir de un identificador del proyecto (no
// Math.random) para que cada proyecto siempre muestre la misma
// imagen de respaldo y no "salte" entre renders ni entre componentes.
export function pickFallbackImage(seed) {
  const str = String(seed ?? "");

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % fallbackImages.length;
  }

  return fallbackImages[Math.abs(hash) % fallbackImages.length];
}
