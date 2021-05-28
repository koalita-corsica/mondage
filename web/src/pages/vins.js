import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import * as styles from "../pages/vins.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import PortableText from "../components/portableText";
import {Link} from "gatsby";

export const query = graphql`
  query VinsPageQuery {
    allSanityPage(filter: {slug: {current: {eq: "nos-vins"}}}) {
      edges {
        node {
          title
        }
      }
    }
    allSanityGame {
      edges {
        node {
          title
          slug {
            current
          }
          logo {
            asset {
              url
            }
          }
          _rawDescription
        }
      }
    }
  }
`;

const VinsPage = (props) => {
  const { data, errors } = props;

  return (
    <Layout>
      <div className={styles.bandeau}></div>
      <div className={styles.domainContain}>
        <SEO title="Vins" />
        {data.allSanityPage.edges.map(item =>
            <div className={styles.title}>{item.node.title}</div>
          )}
        <div className={styles.content}>
          {data.allSanityGame.edges.map(games =>
          <div className={styles.gammes}>
            <img src={games.node.logo.asset.url} alt=""  className={styles.logo}/>
            <div className={styles.block}>
              <h1 className={styles.titleGammes}> {games.node.title} </h1>
              <PortableText blocks={games.node._rawDescription} />
              <Link to={"/game/" + `${games.node.slug.current}`} > <button> Voir la gamme </button> </Link>
            </div>
          </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default VinsPage;
