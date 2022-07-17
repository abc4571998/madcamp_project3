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
const initialImageList = [
  { id: 1, src: "img/image1.png", title: "style" },
  { id: 2, src: "img/image2.jpeg", title: "style" },
  { id: 3, src: "img/image4.jpeg", title: "style" },
];

function ShowStyle() {
  const [loading, setLoading] = useState(true);
  const [isImage, setIsImage] = useState(false);
  const [ImageList, setImageList] = useState([initialImageList]);

  const addImage = () => {
    setImageList((ImageList) => [
      ...ImageList,
      { id: 4, src: "img/image3.jpeg", title: "style" },
    ]);
  };

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("./write");
  };

  useEffect(() => {
    setTimeout(() => {
      setImageList(initialImageList);
      setLoading(false);
    }, 1000);
  }, []); // 렌더링되고 한번만 실행 원한다.
  return (
    <PostSection>
      <PostTitleDiv>
        <CursorDiv>
          <FontAwesomeIcon onClick={addImage} icon={faArrowsRotate} />
        </CursorDiv>
        <PostTitle>Show Style</PostTitle>
        <CursorDiv>
          <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
        </CursorDiv>
      </PostTitleDiv>
      <PostListDiv>
        {loading ? (
          <LoadingDiv>
            <LoadingImg src={loadingIcon} />
          </LoadingDiv>
        ) : isImage ? (
          <LoadingDiv>추천할 스타일이 없습니다.</LoadingDiv>
        ) : (
          ImageList.map(({ id, src, title }) => (
            <img className="showImage" key={id} src={src} />
          ))
        )}
      </PostListDiv>
    </PostSection>
  );
}

export default ShowStyle;
