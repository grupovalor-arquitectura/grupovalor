import { useState } from "react";

export default function useMenu(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return {
    isOpen,
    toggleMenu,
    openMenu,
    closeMenu,
  };
}