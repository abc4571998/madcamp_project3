import {
  HeaderDiv,
  TitleLogoDiv,
  TitleBig,
  TitleSmall,
  SubHeaderDiv,
  PageHeader,
  SlogunBig,
  SlogunSmall,
} from "./styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "reactstrap";
import Slogun from "./Slogun";
function Header({ darkMode, setDarkMode, titleName }) {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <div className="headerMain">
      <TitleLogoDiv>
        <TitleBig>으앙</TitleBig>
        <TitleSmall>졸리다</TitleSmall>
      </TitleLogoDiv>
      <div className="headerSlogun">
        <SlogunBig>{titleName} </SlogunBig>
        <SlogunSmall>welcome!</SlogunSmall>
      </div>
      <SubHeaderDiv>
        {darkMode ? (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
        ) : (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
        )}
      </SubHeaderDiv>
    </div>
  );
}

export default Header;
