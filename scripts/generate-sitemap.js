// scripts/generate-sitemap.js
//
// Genera public/sitemap.xml a partir de las rutas estáticas del sitio
// y de los documentos en Firestore (proyectos y empresas).
//
// Se ejecuta automáticamente antes del build en Vercel (ver "prebuild" en package.json).
// Requiere Node 18+ (usa fetch nativo, que necesita el SDK de Firebase).

import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://grupovalor.com.co";

// Misma config que usa el sitio en firebase.js — se lee del .env
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// -----------------------------
// Rutas estáticas (tomadas de Router.jsx)
// -----------------------------
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/proyectos", priority: "0.9", changefreq: "weekly" },
  { path: "/historia", priority: "0.6", changefreq: "monthly" },
  { path: "/contacto", priority: "0.5", changefreq: "yearly" },
  { path: "/nosotros", priority: "0.6", changefreq: "monthly" },
  { path: "/terminos", priority: "0.2", changefreq: "yearly" },
  { path: "/privacidad", priority: "0.2", changefreq: "yearly" },
];
// Nota: /login y todo /admin quedan fuera a propósito — no deben indexarse.

// -----------------------------
// Rutas dinámicas: proyectos
// -----------------------------
async function getProjectRoutes() {
  const snap = await getDocs(collection(db, "projects"));

  return snap.docs
    // ⚠️ AJUSTA ESTO si tienes un campo de estado (ej. published/status/isDraft)
    // que distinga proyectos publicados de borradores. Ejemplo:
    // .filter((doc) => doc.data().published === true)
    .filter((doc) => !!doc.data().slug)
    .map((doc) => {
      const data = doc.data();
      const lastmod = data.updatedAt?.toDate?.() ?? new Date();
      return {
        path: `/proyectos/${data.slug}`,
        priority: "0.8",
        changefreq: "monthly",
        lastmod,
      };
    });
}

// -----------------------------
// Rutas dinámicas: empresas
// -----------------------------
async function getCompanyRoutes() {
  const snap = await getDocs(collection(db, "companies"));

  return snap.docs
    .filter((doc) => !!doc.data().slug)
    .map((doc) => {
      const data = doc.data();
      const lastmod = data.updatedAt?.toDate?.() ?? new Date();
      return {
        path: `/empresas/${data.slug}`,
        priority: "0.7",
        changefreq: "monthly",
        lastmod,
      };
    });
}

// -----------------------------
// Genera el XML
// -----------------------------
function buildXml(routes) {
  const urls = routes
    .map((route) => {
      const lastmod = (route.lastmod ?? new Date()).toISOString().split("T")[0];
      return `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function main() {
  console.log("Generando sitemap...");

  const [projectRoutes, companyRoutes] = await Promise.all([
    getProjectRoutes(),
    getCompanyRoutes(),
  ]);

  const allRoutes = [...staticRoutes, ...projectRoutes, ...companyRoutes];
  const xml = buildXml(allRoutes);

  const outPath = resolve(__dirname, "../public/sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");

  console.log(`Sitemap generado con ${allRoutes.length} URLs -> ${outPath}`);
  process.exit(0);
}

main().catch((err) => {
  console.error("Error generando el sitemap:", err);
  process.exit(1);
});