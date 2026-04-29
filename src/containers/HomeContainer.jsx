import FooterContainer from "./FooterContainer";
import LayoutBase from "../LayoutBase";
import Header from "../components/Header";

import useMenu from "../hooks/useMenu";

export default function HomeContainer() {
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <LayoutBase
        header={
            <Header
                onMenuClick={toggleMenu}
                isOpen={isOpen}   
            />
        }

        main={<div />}

        footer={<FooterContainer />}
    />
  );
}