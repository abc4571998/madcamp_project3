import React, { useState, useCallback, useEffect } from "react";
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  PostListDiv,
} from "./styledComponent";
import ShirtsImage from "./img/shirts.jpeg";
import { axios } from "axios";

const ShowSearch = () => {
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const [colortag, setColortag] = useState("");
  const [colorArr, setColorArr] = useState([]);
  const [category1tag, setCategory1tag] = useState("");
  const [category1Arr, setCategory1Arr] = useState([]);
  const [category2tag, setCategory2tag] = useState("");
  const [category2Arr, setCategory2Arr] = useState([]);
  const [totalSelectTag, setTotalTagArr] = useState([]);

  //   useEffect(() => {
  //     axios.get("/").then((response) => {
  //       console.log(response);
  //     });
  //   }, []);

  const btnSaveClick = (e) => {
    setTotalTagArr((totalSelectTag) => [...totalSelectTag, hashArr]);
    setTotalTagArr((totalSelectTag) => [...totalSelectTag, colorArr]);
    setTotalTagArr((totalSelectTag) => [...totalSelectTag, category1Arr]);
    setTotalTagArr((totalSelectTag) => [...totalSelectTag, category2Arr]);

    console.log(totalSelectTag);
  };
  const pushTag = (e) => {
    const { name } = e.target;
    setHashArr((hashArr) => [...hashArr, e.target.name]);
    console.log(hashArr);
  };

  const pushColorTag = (e) => {
    const { name } = e.target;
    setColorArr((colorArr) => [...colorArr, e.target.name]);
  };

  const pushCategory1Tag = (e) => {
    const { name } = e.target;
    setCategory1Arr((category1Arr) => [...category1Arr, e.target.name]);
  };

  const pushCategory2Tag = (e) => {
    const { name } = e.target;
    setCategory2Arr((category2Arr) => [...category2Arr, e.target.name]);
  };
  //const deleteTag = (e) => {};

  const deleteHash = () => {
    setHashArr((hashArr) => []);
  };

  const deleteColor = () => {
    setColorArr((colorArr) => []);
  };

  const deleteCategory1 = () => {
    setCategory1Arr((category1Arr) => []);
  };

  const deleteCategory2 = () => {
    setCategory1Arr((category2Arr) => []);
  };
  return (
    <>
      <PostSection>
        <PostTitleDiv className="TitleDiv">
          <PostTitle>Select My Style</PostTitle>
        </PostTitleDiv>
        <PostListDiv></PostListDiv>
      </PostSection>
      <div className="selectStyle">
        <div className="selectStyle-menu">
          <div className="selectStyle-menu__title">Select TPO</div>
          <section className="selectStyle-menu__content">
            <button
              className="tag-button tag-button__clear btn btnEffect__clear"
              onClick={deleteHash}
            >
              Tag Clear
            </button>
            <div className="Search-tag">
              <button
                className="tag-button btn btnEffect"
                name="cute"
                onClick={pushTag}
              >
                cute
              </button>
              <button
                className="tag-button btn btnEffect"
                name="lovely"
                onClick={pushTag}
              >
                lovely
              </button>
              <button
                className="tag-button btn btnEffect"
                name="basic"
                onClick={pushTag}
              >
                basic
              </button>
              <button
                className="tag-button btn btnEffect"
                name="abcdse"
                onClick={pushTag}
              >
                abcdse
              </button>
            </div>
            <div className="selectStyle-selection">
              <span>My Selection : </span>
              {hashArr.map((name) => (
                <button key={name} className="btn__select" name={name}>
                  {name}
                </button>
              ))}
            </div>
          </section>
        </div>
        <div className="selectStyle-menu">
          <div className="selectStyle-menu__title selectStyle-menu__title-light">
            Select Color
          </div>
          <section className="selectStyle-menu__content selectStyle-menu__content-light">
            <button
              className="tag-button tag-button__clear btn btnEffect__clear"
              onClick={deleteColor}
            >
              Color Clear
            </button>
            <div className="Search-tag">
              <button
                className="tag-button btn btnEffect"
                name="red"
                onClick={pushColorTag}
              >
                red
              </button>
              <button
                className="tag-button btn btnEffect"
                name="green"
                onClick={pushColorTag}
              >
                green
              </button>
              <button
                className="tag-button btn btnEffect"
                name="blue"
                onClick={pushColorTag}
              >
                blue
              </button>
              <button
                className="tag-button btn btnEffect"
                name="yellow"
                onClick={pushColorTag}
              >
                yellow
              </button>
            </div>
            <div className="selectStyle-selection">
              <span>My Selection : </span>
              {colorArr.map((name) => (
                <button className="btn__select" name={name}>
                  {name}
                </button>
              ))}
            </div>
          </section>
        </div>
        <div className="selectStyle-menu">
          <div className="selectStyle-menu__title">Select Category</div>
          <section className="selectStyle-menu__content">
            <button
              className="tag-button tag-button__clear btn btnEffect__clear"
              onClick={deleteCategory1}
            >
              Category Clear
            </button>
            <div className="Search-tag">
              <button
                className="tag-button btn btnEffect"
                name="tops"
                onClick={pushCategory1Tag}
              >
                tops
              </button>
              <button
                className="tag-button btn btnEffect"
                name="skirt"
                onClick={pushCategory1Tag}
              >
                skirt
              </button>
              <button
                className="tag-button btn btnEffect"
                name="shorts"
                onClick={pushCategory1Tag}
              >
                shorts
              </button>
              <button
                className="tag-button btn btnEffect"
                name="bags"
                onClick={pushCategory1Tag}
              >
                bags
              </button>
            </div>
            <div className="selectStyle-selection">
              <span>My Selection : </span>
              {category1Arr.map((name) => (
                <button className="btn__select" name={name}>
                  {name}
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="selectStyle-menu">
          <div className="selectStyle-menu__title selectStyle-menu__title-light">
            Select Category2
          </div>
          <section className="selectStyle-menu__content selectStyle-menu__content-light">
            <button
              className="tag-button tag-button__clear btn btnEffect__clear"
              onClick={deleteCategory2}
            >
              Category Clear
            </button>
            <div className="Search-tag">
              <button
                className="tag-button btn btnEffect"
                name="tops"
                onClick={pushCategory2Tag}
              >
                tops
              </button>
              <button
                className="tag-button btn btnEffect"
                name="skirt"
                onClick={pushCategory2Tag}
              >
                skirt
              </button>
              <button
                className="tag-button btn btnEffect"
                name="shorts"
                onClick={pushCategory2Tag}
              >
                shorts
              </button>
              <button
                className="tag-button btn btnEffect"
                name="bags"
                onClick={pushCategory2Tag}
              >
                bags
              </button>
            </div>
            <div className="selectStyle-selection">
              <span>My Selection : </span>
              {category2Arr.map((name) => (
                <button className="btn__select" name={name}>
                  {name}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="saveStyle">
        <button className="btn btn__save" onClick={btnSaveClick}>
          Save Style
        </button>
      </div>
      <PostSection>
        <PostTitleDiv className="TitleDiv showStyle">
          <PostTitle>Show My Style </PostTitle>
        </PostTitleDiv>
        <PostListDiv></PostListDiv>
      </PostSection>
      <div className="showStyleSection">
        <div className="showStyle-div">
          <img src={ShirtsImage} alt="" />
          <div className="showStyle-content">
            {totalSelectTag.map((name) => (
              <div className="btn__select-Div">
                {name.map((v) => (
                  <button className="btn__select" name={v}>
                    {v}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSearch;
