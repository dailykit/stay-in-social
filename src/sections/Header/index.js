import React from "react";
import { Flex } from "@dailykit/ui";
import { NavLink } from "react-router-dom";
import { NavBar } from "./styles";
import { BrandLogo, Button } from "../../components";
import { theme } from "../../theme";

export default function Header() {
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
        <NavLink to="/signup" className="buttonWrapper">
          <Button
            className="customBtn"
            textColor={theme.colors.textColor4}
            backgroundColor={theme.colors.primaryColor}
          >
            Sign Up
          </Button>
        </NavLink>
        <NavLink to="/login" className="buttonWrapper">
          <Button
            className="customBtn"
            textColor={theme.colors.textColor4}
            backgroundColor={theme.colors.secondaryColor}
          >
            Log In
          </Button>
        </NavLink>
      </ul>
    </NavBar>
  );
}
