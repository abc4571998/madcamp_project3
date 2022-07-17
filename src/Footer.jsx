import { FooterDiv, FooterBig, FooterSmall } from "./styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterDiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>성애 경호 선무</FooterBig>
      <FooterSmall>2022. Project 3</FooterSmall>
    </FooterDiv>
  );
}

export default Footer;
