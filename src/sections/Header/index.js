import React, { useState } from "react";
import { Flex } from "@dailykit/ui";
import { NavLink } from "react-router-dom";
import { NavBar } from "./styles";
import { BrandLogo, Button, Modal } from "../../components";
import { theme } from "../../theme";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";

export default function Header() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const closeModal = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(false);
  };
  return (
    <NavBar>
      <Flex container alignItems="center">
        <BrandLogo size={theme.sizes.h3} />
        <li className="nav-list-item brand">
          <NavLink to="/">StayInSocial</NavLink>
        </li>
      </Flex>
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink to="/" activeClassName="activeLink" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/experiences" activeClassName="activeLink" exact>
            Experiences
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/experts" activeClassName="activeLink" exact>
            Experts
          </NavLink>
        </li>
      </ul>
      <div className="spacer" />
      <ul className="nav-list">
        <li onClick={() => setSignupModalOpen(true)} className="buttonWrapper">
          <Button
            className="customBtn"
            textColor={theme.colors.textColor4}
            backgroundColor={theme.colors.primaryColor}
          >
            Sign Up
          </Button>
        </li>
        <li onClick={() => setLoginModalOpen(true)} className="buttonWrapper">
          <Button
            className="customBtn"
            textColor={theme.colors.textColor4}
            backgroundColor={theme.colors.secondaryColor}
          >
            Log In
          </Button>
        </li>
      </ul>
      <Modal isOpen={loginModalOpen} close={closeModal} type="sideDrawer">
        <Login isOpen={loginModalOpen} authBtnClassName="auth-btn" />
      </Modal>
      <Modal isOpen={signupModalOpen} close={closeModal} type="sideDrawer">
        <Signup isOpen={signupModalOpen} authBtnClassName="auth-btn" />
      </Modal>
    </NavBar>
  );
}
