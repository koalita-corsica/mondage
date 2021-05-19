import React from "react";
import Header from "./header";
import Main from "../components/main";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import Footer from "../components/footer";
const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header/>
    <Main>{children}</Main>
    <Footer/>
  </>
);

export default Layout;
