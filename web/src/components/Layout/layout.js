import React from "react";
import Header from "../Header/header";
import Main from "../main";
import "../../styles/layout.css";
import * as styles from "./layout.module.css";
import Footer from "../Footer/footer";
import { myContext } from "../../provider";

const Layout = ({ children, show, nav, showNav, siteTitle }) => (
  <myContext.Consumer>
    {context => (
      <>
      <div className={styles.page}>
        <Header siteTitle={siteTitle} show={show} nav={nav} showNav={showNav} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
    )}
  </myContext.Consumer>
);

export default Layout;
