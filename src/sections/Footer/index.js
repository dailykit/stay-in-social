import React from "react";
import { NavLink } from "react-router-dom";
import { FooterWrapper } from "./styles";

export default function Footer() {
  return (
    <FooterWrapper id="main-footer">
      <ul className="nav-list">
        <li>
          <NavLink to="/" exact>
            <div className="nav-list-item" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/experiences" exact>
            <div className="nav-list-item" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/experts" exact>
            <div className="nav-list-item" />
          </NavLink>
        </li>
      </ul>
    </FooterWrapper>
  );
}
