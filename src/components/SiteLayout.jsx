import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

export default function SiteLayout() {
  return (
    <>
      <CustomCursor />

      <Outlet />

    </>
  );
}