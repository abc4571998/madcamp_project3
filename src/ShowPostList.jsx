import React, { useState, useEffect } from "react";
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  PostListDiv,
  LoadingDiv,
  LoadingImg,
  CursorDiv,
} from "./styledComponent";
import { useNavigate } from "react-router-dom";
import {
  faArrowsRotate,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import loadingIcon from "./loading2.svg";

import EachPost from "./EachPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialPostList = [
  { id: 1, title: "오늘 뭐 입지?" },
  { id: 2, title: "오늘 뭐 날씨는?" },
];

function ShowPostList() {
  const [loading, setLoading] = useState(true);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  const addPost = () => {
    setPostList((postList) => [...postList, { id: 4, title: "오잉오잉" }]);
  };

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("./write");
  };

  useEffect(() => {
    setTimeout(() => {
      setPostList(initialPostList);
      setLoading(false);
    }, 600);
  }, []); // 렌더링되고 한번만 실행 원한다.
  return (
    <PostSection>
      <PostTitleDiv>
        <CursorDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
        </CursorDiv>
        <PostTitle>내 코디</PostTitle>
        <CursorDiv>
          <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
        </CursorDiv>
      </PostTitleDiv>
      <PostListDiv>
        {loading ? (
          <LoadingDiv>
            <LoadingImg src={loadingIcon} />
          </LoadingDiv>
        ) : isPost ? (
          <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
        ) : (
          <ul>
            {postList.map((element) => (
              <EachPost
                key={element.id}
                title={element.title}
                postID={element.id}
              />
            ))}
          </ul>
        )}
      </PostListDiv>
    </PostSection>
  );
}

export default ShowPostList;
