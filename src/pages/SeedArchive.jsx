import { useEffect } from "react";
import { seedArchive } from "../scripts/seedArchive";

export default function SeedArchive() {
  useEffect(() => {
    seedArchive();
  }, []);

  return <h1>Sembrando archivo...</h1>;
}