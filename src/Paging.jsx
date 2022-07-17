import { PagingSection, PagenumberDiv } from "./styledComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Paging() {
  return (
    <PagingSection>
      <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PagenumberDiv>
      <PagenumberDiv>1</PagenumberDiv>
      <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowRight} />
      </PagenumberDiv>
    </PagingSection>
  );
}

export default Paging;
