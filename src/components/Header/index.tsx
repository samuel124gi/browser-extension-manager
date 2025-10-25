import Logo from "../../assets/icons/logo.svg";
import Switch from "../../assets/icons/icon-moon.svg";

import { MainContainer } from "./styles";

const Header = () => {
  return (
    <MainContainer>
      <Logo />
      <Switch />
    </MainContainer>
  );
};

export default Header;
