/* eslint-disable react/jsx-key */
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import * as styles from "../pages/galerie.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import galerie1 from "../asset/galerie1.webp";
import galerie2 from "../asset/galerie2.webp";
import galerie3 from "../asset/galerie3.webp";
import galerie4 from "../asset/galerie4.webp";
import galerie5 from "../asset/galerie5.webp";
import galerie6 from "../asset/galerie6.webp";
import galerie7 from "../asset/galerie7.webp";
import galerie8 from "../asset/galerie8.webp";
import galerie9 from "../asset/galerie9.webp";
import galerie10 from "../asset/galerie10.webp";
import galerie11 from "../asset/galerie11.webp";
import galerie12 from "../asset/galerie12.webp";
import galerie13 from "../asset/galerie13.webp";
import galerie14 from "../asset/galerie14.webp";
import galerie15 from "../asset/galerie15.webp";
import { myContext } from "../provider";

export const query = graphql`
  query GaleriePageQuery {
    allSanityPage(filter: { slug: { current: { eq: "la-galerie" } } }) {
      edges {
        node {
          title {
            fr
            en
          }
        }
      }
    }
  }
`;

const isBrowser = typeof window !== "undefined";

const GaleriePage = (props) => {
  const { data, errors } = props;

  return (
    <Layout>
      <SEO title="Galerie" />
      {data.allSanityPage.edges.map((item) => (
        <myContext.Consumer>
        {context => (
        <React.Fragment>
          <div className={styles.wrapperTitle}>
            <div className={styles.titleContain}>
              <div className={styles.trait}></div>
              {context.isEN ? <div className={styles.title}>{item.node.title.en}</div> : <div className={styles.title}>{item.node.title.fr}</div>}
              <div className={styles.trait2}></div>
            </div>
          </div>
        </React.Fragment>
        )}
        </myContext.Consumer>
      ))}
      <div className={styles.gridGalery}>
        <div className={styles.galerie1}>{/* <img src={galerie1} /> */}</div>
        <div className={styles.galerie2}>{/* <img src={galerie2} /> */}</div>
        <div className={styles.galerie3}>{/* <img src={galerie3} /> */}</div>
        <div className={styles.galerie4}>
          <img src={galerie4} alt="" />
        </div>
        <div className={styles.galerie5}>
          <img src={galerie5} alt="" />
        </div>
        <div className={styles.galerie6}>
          <img src={galerie6} alt="" />
        </div>
        <div className={styles.galerie7}>
          <img src={galerie7} alt="" />
        </div>
        <div className={styles.galerie8}>
          <img src={galerie8} alt="" />
        </div>
        <div className={styles.galerie9}>
          <img src={galerie9} alt="" />
        </div>
        <div className={styles.galerie10}>
          <img src={galerie10} alt="" />
        </div>
        <div className={styles.galerie11}>{/* <img src={galerie11} /> */}</div>
        <div className={styles.galerie12}>{/* <img src={galerie12} /> */}</div>
        <div className={styles.galerie13}>
          <img src={galerie13} alt="" />
        </div>
        <div className={styles.galerie14}>
          <img src={galerie14} alt="" />
        </div>
        <div className={styles.galerie15}>
          <img src={galerie15} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default GaleriePage;
