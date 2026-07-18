import { Outlet } from "react-router-dom";

import CustomCursor from "./CustomCursor";

export default function SiteLayout() {
  return (
    <>
      <CustomCursor />

      <Outlet />

    </>
  );
}