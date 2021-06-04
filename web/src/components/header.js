import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import * as styles from "./header.module.css";

import styled from "styled-components";

const MenuIcon = styled.div`
  display: ${({ show }) => (show === false ? "none" : "none")};
  @media (max-width: 768px) {
    position: absolute;
    top: 2rem;
    left: ${({ nav }) => (nav ? "" : "2rem")};
    right: ${({ nav }) => (nav ? "2rem" : "")};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    cursor: pointer;
    z-index: 100;
    div {
      width: 1.5rem;
      height: 0.33rem;
      background: ${({ nav }) => (nav ? "#f26633" : "white")};
      border-radius: 5px;
      transform-origin: 1px;
      transition: transform 300ms;
      z-index: 900;
      :nth-child(3) {
        width: ${({ nav }) => (nav ? "1.5rem" : "1rem")};
      }
      :first-child {
        transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ nav }) => (nav ? "0" : "1")};
      }
      :nth-child(3) {
        transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
const MenuLinks = styled.nav`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  width: 100%;
  @media (max-width: 768px) {
    text-transform: uppercase;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: ${({ nav }) => (nav ? "block" : "none")};
    background-color: #262626;
    z-index: 90;
    ul {
      list-style-type: none;
      flex-direction: column;
    }
    li {
      margin-top: 1rem;
      margin-left: -15%;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.5rem;
      transition: color 300ms;
      :hover {
        color: #f26633;
      }
    }
    img {
      display: inline-block;
      margin-left: -5.5vw;
    }
  }
`;

const Header = ({ nav, showNav, show }) => (
  <div className={styles.wrapper}>
    <div className={styles.siteTitle}>
      <Link to="/">domaine mondange</Link>
    </div>
    <MenuIcon
      nav={nav}
      onClick={() => showNav(!nav)}
      styles={{ display: "none" }}
    >
      <div />
      <div />
      <div />
    </MenuIcon>
    <MenuLinks nav={nav}>
      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/">ACCUEIL</Link>
          </li>
          <li>
            <Link to="/vins">NOS VINS</Link>
          </li>
          <li>
            <Link to="/domaine">LE DOMAINE</Link>
          </li>
          <li>
            <Link to="/galerie">LA GALERIE</Link>
          </li>
          <li>
            <Link to="/presse">LA PRESSE</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </MenuLinks>
  </div>
);

export default Header;
