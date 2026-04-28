import useMenu from "../hooks/useMenu";

export default function HomeContainer() {
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <LayoutBase
      header={
        <Header onMenuClick={toggleMenu} />
      }
      main={<div />}
      footer={<Footer brand="gv°" />}
    />
  );
}