import IconAllProjectsClose from "../assets/IconAllProjectsClose.svg?react";
import IconAllProjectsOpen from "../assets/IconAllProjectsOpen.svg?react";

export default function BottomMenuIcon({ isOpen }) {
  return isOpen ? (
    <IconAllProjectsClose width={32} height={32} />
  ) : (
    <IconAllProjectsOpen width={32} height={32} />
  );
}