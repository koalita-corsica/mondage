/* eslint-disable react/jsx-key */
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import * as styles from "../pages/presse.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import PortableText from "../components/portableText";

export const query = graphql`
  query PressePageQuery {
    allSanityPage(filter: { slug: { current: { eq: "la-presse" } } }) {
      edges {
        node {
          title
          pageBuilder {
            title1
            _rawDesc
          }
        }
      }
    }
    allSanityPost {
      edges {
        node {
          title
          cote
          _rawExcerpt
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const PressePage = (props) => {
  const { data, errors } = props;

  const div = document.querySelector('#grand');
  console.log("blablabla" + div);
  return (
    <Layout>
      <div className={styles.wrapperPresse}>
        {data.allSanityPage.edges.map((item) => (
          <div className={styles.presse}>
            <h1> {item.node.pageBuilder[0].title1} </h1>
            <PortableText blocks={item.node.pageBuilder[0]._rawDesc} />
          </div>
        ))}
        {data.allSanityPost.edges.map((element) => (
          <React.Fragment>
            <div className={styles.articlesDroite} data-pos={element.node.cote}>
              <h1> {element.node.title} </h1>
              <PortableText blocks={element.node._rawExcerpt} />
              <img src={element.node.mainImage.asset.url} alt="" />
            </div>
            <div className={styles.articlesGauche} data-pos={element.node.cote}>
              <h1> {element.node.title} </h1>
              <PortableText blocks={element.node._rawExcerpt} />
              <img src={element.node.mainImage.asset.url} alt="" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default PressePage;
