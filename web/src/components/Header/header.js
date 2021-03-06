import { Link } from "gatsby";
import React from "react";
import { cn } from "../../lib/helpers";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import * as styles from "./header.module.css";
import { Helmet } from 'react-helmet';

import styled from "styled-components";

import { myContext } from "../../provider";


const MenuIcon = styled.div`
  display: ${({ show }) => (show === false ? "none" : "none")};
  @media (max-width: 1024px) {
    position: ${({ nav }) => (nav ? "fixed" : "fixed")};
    left: ${({ nav }) => (nav ? "" : "6vw")};
    // right: ${({ nav }) => (nav ? "6vw" : "")};
    top: ${({ nav }) => (nav ? "10vh" : "")};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    cursor: pointer;
    z-index: 100;
    div {
      width: 2.5rem;
      height: 0.3rem;
      background: ${({ nav }) => (nav ? "#707070" : "#707070")};
      transform-origin: 1px;
      transition: transform 300ms;
      z-index: 900;

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
  list-style-type: none;
  justify-content: space-evenly;
  div {
    display: none;
  }
  @media (max-width: 1024px) {
    align-item: ${({ nav }) => (nav ? "center" : "none")};
    text-transform: uppercase;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ nav }) => (nav ? "block" : "none")};
    background-color: #E3E3DC;
    z-index: 90;
    ul {
      list-style-type: none;
      flex-direction: column;
    }
    li {
      margin-top: 6vh;
      justify-self: center;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: ${({ nav }) => (nav ? "" : "")}
      transition: color 300ms;
      :hover {
        color: #f26633;
      }
    }
    div {
      display: block;
    }
    div:last-child {
      display: flex;
      margin-top: 6vh;
      justify-content: center;
      gap: 3vw;
      svg {
        width: 40px;
        height: auto;
        path{
          color: #685950;
        }
      }
    }
  }
`;

const Header = ({ nav, showNav, show }) => (
  <myContext.Consumer>
    {context => (
  <div className={styles.wrapper}> 
  <Helmet
  htmlAttributes={{
    lang: 'fr',
  }}>
  {/* General tags */}
  <meta name="description" content="Mondange" />
  <meta charset="utf-8" />
  <html lang="fr" />
  <title> Mondange </title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="Koalit??" />
  <script async src="https://cdn.ampproject.org/v0.js"></script>
</Helmet>
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
      <nav className={cn(styles.nav, showNav && styles.showNav)} data-nav="nav">
        <div className={styles.siteTitle}>
          <Link to="/">domaine mondange</Link>
        </div>
        <ul>
          <li>
          {context.isEN ?<Link to="/">WELCOME</Link> : <Link to="/">ACCUEIL</Link>}
          </li>
          <li>
            {context.isEN ? <Link to="/vins">OUR WINES</Link> : <Link to="/vins">NOS VINS</Link>}
          </li>
          <li>
            {context.isEN ? <Link to="/domaine">THE DOMAIN</Link> : <Link to="/domaine">LE DOMAINE</Link>}
          </li>
          <li>
          {context.isEN ? <Link to="/galerie">THE GALLERY</Link> : <Link to="/galerie">LA GALERIE</Link>}
          </li>
          <li>
            {context.isEN ? <Link to="/presse">PRESS</Link>: <Link to="/presse">LA PRESSE</Link>}
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
        {context.isEN ? 
          <select onChange={() => context.changeTheme()}>
            <option value="en">????????</option>
            <option value="fr">????????</option>
           </select>
          : 
          <select onChange={() => context.changeTheme()}>
            <option value="fr">????????</option>
            <option value="en">????????</option>
          </select> 
          }
          </li>
        </ul>
        <div className={styles.sociaux}>
          <FaInstagram />
          <FaFacebookF />
        </div>
      </nav>
    </MenuLinks>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
  </div>
      )}
      </myContext.Consumer>
);

export default Header;
