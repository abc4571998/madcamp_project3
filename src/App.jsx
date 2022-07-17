import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHome from "./PageHome.jsx";
import Home from "./pages/Home";
import Menubar from "./pages/Menubar";
import Write from "./WritePost";
import Post from "./ShowPost";
import Search from "./Search";
import MyPage from "./MyPage";
import Style from "./Style";
import Login from "./Login";
import "./styles.css";

const API_URL = "";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<PageHome />}></Route>
        <Route
          path="/pagehome/*"
          element={<PageHome apiUrl={API_URL} />}
        ></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/style/*" element={<Style />}></Route>
        <Route path="/mypage/*" element={<MyPage />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/post" element={<PageHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<div>There's nothing here!</div>} />
      </Route>
    </Routes>
  );
}

export default App;
