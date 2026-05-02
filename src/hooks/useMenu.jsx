import { useState } from "react";

export default function useMenu(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return { isOpen, toggleMenu };
}