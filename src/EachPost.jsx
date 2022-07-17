import React from "react";
import { EachPostLi, PostLink, PostRepl } from "./styledComponent";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

function EachPost({ title, postID }) {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`${"./post/" + postID}`);
  };
  return (
    <div>
      <EachPostLi onClick={goPost}>
        <div>
          <FontAwesomeIcon icon={faLocationPin} />
          <PostLink>{title}</PostLink>
        </div>
      </EachPostLi>
    </div>
  );
}

export default EachPost;
