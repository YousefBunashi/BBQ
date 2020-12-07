import React from "react";
// import { NavLink } from "react-router-dom";
// Styling
import { Logo, ThemeButton, NavStyled, NavItem } from "../styles";
import lightLogo from "../lightLogo.png";
import darkLogo from "../darkLogo.png";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo to="/" className="navbar-brand" href="#">
        <img
          src={currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
          width="50"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavItem className="nav-item" to="/burgers">
            burgers
          </NavItem>
          <NavItem className="active" to="/Bbqs" style={{ padding: 10 }}>
            Bbqs
          </NavItem>
          <ThemeButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};
export default NavBar;
