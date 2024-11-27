import React from "react";
import logo from "../../Images/Vector.jpg";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="imagelogo" className="header__logo" />
      <hr className="header__line" />
    </header>
  );
}

export default Header;
