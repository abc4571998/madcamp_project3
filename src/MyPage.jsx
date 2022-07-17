import React, { useEffect } from "react";
import { Main, MediaDiv } from "./styledComponent.js";

import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import Paging from "./Paging";
import Footer from "./Footer";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WritePost from "./WritePost";
import ShowPost from "./ShowPost";
import { axios } from "axios";
//import Home from "./pages/Home";
import ShowMyPage from "./ShowMyPage";

function MyPage() {
  const [darkMode, setDarkMode] = useState(false); // 다크모드인지 파악

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <MediaDiv>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          titleName={"MyPage"}
        />
        <Main>
          {/* <Routes>
            <Route path="/*" element={<ShowMyPage></ShowMyPage>}></Route>
            <Route path="/write" element={<WritePost></WritePost>}></Route>
            <Route path="/post/:postID" element={<ShowPost></ShowPost>}></Route>
          </Routes> */}
          <div className="loginDiv">
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button>로그인</button>
          </div>
        </Main>
        <Footer />
      </MediaDiv>
    </ThemeProvider>
  );
}

export default MyPage;
