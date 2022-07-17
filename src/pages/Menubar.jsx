import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Menubar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="menubar">
        <Link className="menubar-menu" to="/pagehome">
          Home
        </Link>
        <Link className="menubar-menu" to="/search">
          Search
        </Link>
        <Link className="menubar-menu" to="/style">
          Style
        </Link>
        <Link className="menubar-menu" to="/mypage">
          MyPage
        </Link>
      </div>
      <Outlet />
      {/* <button onClick={goHome} type="button">
        홈으로 돌아가기
      </button> */}
    </>
  );
};

export default Menubar;
