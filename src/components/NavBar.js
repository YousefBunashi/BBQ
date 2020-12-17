import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

import { Logo, ThemeButton, NavItem, UsernameStyled } from "../styles";
import lightLogo from "../lightLogo.png";
import darkLogo from "../darkLogo.png";
import SignupButton from "./SignupButton";
import SigninButton from "./SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Logo to="/" className="navbar-brand" href="#">
        <img
          src={currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
          width="50"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavItem
              className="active"
              to="/Butcheries"
              style={{ margin: 10, float: "right" }}
            >
              Butcheries
            </NavItem>
            <NavItem
              className="active"
              to="/Bbqs"
              style={{ margin: 10, float: "right" }}
            >
              Bbqs
            </NavItem>
          </li>
          {/* if the user is logged in */}
          <li className="nav-item">
            {authStore.user ? (
              <>
                <UsernameStyled>
                  Hello, {authStore.user.username}
                </UsernameStyled>
                <AiOutlineLogout
                  onClick={authStore.signout}
                  size="2em"
                  color="red"
                />
              </>
            ) : (
              <>
                <SignupButton />
                <SigninButton />
              </>
            )}
          </li>
          <li className="nav-item">
            <ThemeButton className="nav-item" onClick={toggleTheme}>
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default observer(NavBar);
