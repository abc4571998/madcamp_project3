import React, { useEffect } from "react";
import { Main, MediaDiv } from "./styledComponent.js";

import Header from "./Header";
import Footer from "./Footer";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WritePost from "./WritePost";
import ShowPost from "./ShowPost";
import { axios } from "axios";
import ShowStyle from "./ShowStyle";

function Style() {
  const [darkMode, setDarkMode] = useState(false); // 다크모드인지 파악

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <MediaDiv>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          titleName={"Style"}
        />
        <Main>
          <Routes>
            <Route path="/*" element={<ShowStyle></ShowStyle>}></Route>
            <Route path="/write" element={<WritePost></WritePost>}></Route>
            <Route path="/post/:postID" element={<ShowPost></ShowPost>}></Route>
          </Routes>
        </Main>
        <Footer />
      </MediaDiv>
    </ThemeProvider>
  );
}

export default Style;
