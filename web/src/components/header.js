import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import * as styles from "./header.module.css";

const Header = ({ showNav }) => (
  <div className={styles.wrapper}>
    <div className={styles.siteTitle}>
      <Link to="/">domaine mondange</Link>
    </div>
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
  </div>
);

export default Header;
