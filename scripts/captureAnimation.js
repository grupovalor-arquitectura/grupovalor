// ========================================
// CAPTURA DE VisualCircles A PNG CON ALPHA
// ========================================
//
// PLAN B: captura en tiempo real (no usa el "tiempo virtual" de
// Chrome, que puede bloquear la navegación inicial de la página).
//
// Toma capturas lo más rápido posible durante DURATION_SECONDS,
// y guarda el tiempo real entre cada una. Ese registro se usa
// después para armar el video con ffmpeg respetando la duración
// real de cada frame — así sale bien sincronizado aunque las
// capturas mismas no salgan a intervalos perfectamente parejos.
//
// Requiere:
//   npm install --save-dev puppeteer
//
// Antes de correr esto:
//   1. Agrega la ruta temporal /capture-circles a tu router.
//   2. Corre tu servidor de desarrollo en OTRA terminal: npm run dev
//   3. Confirma el puerto exacto que te muestra esa terminal y
//      ajusta la constante URL de abajo si no es 5173.
//
// Uso (parado dentro de la carpeta scripts/):
//   node captureAnimation.js
// ========================================

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ----------------------------------------
// CONFIGURACIÓN
// ----------------------------------------

const URL = "http://localhost:5173/capture-circles";

// Los círculos más externos (posición ±3) no empiezan a "respirar"
// hasta el segundo 6.4 (esperan a que termine su apertura + 4s de
// margen). Con 20s totales, alcanzan a completar varios ciclos
// completos de respiración (cada ciclo dura 4s) antes de cortar.
// Como es una animación infinita en loop, puedes subir o bajar este
// número libremente — no hay ningún salto raro al cortar en
// cualquier punto, siempre que sea después de que todos los
// círculos ya empezaron a respirar (después del segundo ~6.4).
// Los círculos más externos (posición ±3) no empiezan a "respirar"
// hasta el segundo ~6.4 después de que arranca la animación (esperan
// a que termine su apertura + 4s de margen). Dejamos correr ese
// tramo en tiempo real SIN grabar nada, con margen de sobra, para
// que el clip capturado sea 100% respiración/flotación — nada de
// apertura ni de la pausa inicial.
const WARMUP_SECONDS = 8;

// Duración del clip que sí se graba, ya con todos los círculos
// flotando.
const DURATION_SECONDS = 15;

const OUTPUT_DIR = path.join(__dirname, "frames");

async function run() {

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--force-color-profile=srgb"],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1600,
    height: 600,
    // Bajado de 2 a 1: menos píxeles por captura = capturas más
    // rápidas = más frames reales durante los 1.4-3.8s de apertura,
    // que es donde más se nota si faltan frames.
    deviceScaleFactor: 1,
  });

  // Aseguramos que la intro SIEMPRE se reproduzca, sin importar
  // si ya la corriste antes en este mismo navegador.
  await page.evaluateOnNewDocument(() => {
    localStorage.clear();
  });

  console.log("Cargando página...");

  // "networkidle0" nunca se cumple contra un servidor de Vite: el
  // WebSocket de hot-reload (HMR) mantiene la red activa todo el
  // tiempo, así que Puppeteer esperaría para siempre. "load" alcanza
  // — solo necesitamos que la página termine de cargar, no que la
  // red quede en completo silencio.
  await page.goto(URL, { waitUntil: "load" });

  // Margen real para que React monte y los dos requestAnimationFrame
  // del componente alcancen a disparar "entered = true".
  await new Promise((resolve) => setTimeout(resolve, 300));

  console.log(
    `Esperando ${WARMUP_SECONDS}s a que termine la apertura (sin grabar)...`
  );

  await new Promise((resolve) =>
    setTimeout(resolve, WARMUP_SECONDS * 1000)
  );

  console.log(`Capturando ${DURATION_SECONDS}s de respiración...`);

  const startTime = Date.now();
  const timestamps = [];
  let frameIndex = 0;

  while (Date.now() - startTime < DURATION_SECONDS * 1000) {

    const framePath = path.join(
      OUTPUT_DIR,
      `frame_${String(frameIndex).padStart(5, "0")}.png`
    );

    await page.screenshot({
      path: framePath,
      omitBackground: true,
    });

    timestamps.push(Date.now() - startTime);
    frameIndex++;
  }

  await browser.close();

  // ----------------------------------------
  // ARCHIVO DE TIEMPOS PARA FFMPEG
  // ----------------------------------------
  // El "concat demuxer" de ffmpeg permite indicar exactamente
  // cuánto debe durar cada imagen en el video final. Usamos el
  // tiempo real que pasó entre cada captura, así el resultado
  // queda bien sincronizado sin importar la velocidad real de
  // captura de este computador.

  const concatLines = [];

  for (let i = 0; i < frameIndex; i++) {

    const duration =
      i < frameIndex - 1
        ? (timestamps[i + 1] - timestamps[i]) / 1000
        : 0.1;

    concatLines.push(`file 'frame_${String(i).padStart(5, "0")}.png'`);
    concatLines.push(`duration ${duration.toFixed(4)}`);
  }

  // El concat demuxer de ffmpeg requiere repetir el último archivo
  // una vez más al final (limitación conocida del formato).
  concatLines.push(`file 'frame_${String(frameIndex - 1).padStart(5, "0")}.png'`);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "concat.txt"),
    concatLines.join("\n")
  );

  console.log(`\nListo. ${frameIndex} frames guardados en ${OUTPUT_DIR}`);
  console.log("Ahora corre el comando de ffmpeg (ver instrucciones).");
}

run().catch((err) => {
  console.error("ERROR EN CAPTURA:", err);
  process.exit(1);
});