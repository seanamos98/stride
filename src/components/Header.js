import React from "react";
import "./Header.css";

const Header = ({ title, search }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="header__item">
        <p className="header__searchIcon">{search}</p>
        <p>Login</p>
      </div>
    </div>
  );
};

export default Header;
