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
import { el } from "date-fns/locale";

export const query = graphql`
  query PressePageQuery {
    allSanityPage(filter: { slug: { current: { eq: "la-presse" } } }) {
      edges {
        node {
          title {
            fr
            en
          }
          pageBuilder {
            title1 {
              fr
              en
            }
            desc {
              _rawFr
              _rawEn
            }
          }
        }
      }
    }
    allSanityPost {
      edges {
        node {
          title {
            fr
            en
          }
          cote
          excerpt {
            _rawFr
            _rawEn
          }
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

  return (
    <Layout>
      <div className={styles.wrapperPresse}>
        {data.allSanityPage.edges.map((item) => (
          <div className={styles.presse}>
            <h1> {item.node.pageBuilder[0].title1.fr} </h1>
            <PortableText blocks={item.node.pageBuilder[0].desc._rawFr} />
          </div>
        ))}
        {data.allSanityPost.edges.map((element) => (
          <React.Fragment>
            <div className={styles.container}>
              {element.node.cote === "gauche" ? (
                <div className={styles.gauche}>
                  <div
                    className={styles.articlesGauche}
                    data-pos={element.node.cote}
                  >
                    <h1> {element.node.title.fr} </h1>
                    <PortableText blocks={element.node.excerpt._rawFr} />
                    <img src={element.node.mainImage.asset.url} alt="" />
                  </div>
                </div>
              ) : (
                <div className={styles.droite}>
                  <div
                    className={styles.articlesDroite}
                    data-pos={element.node.cote}
                  >
                    <h1> {element.node.title.fr} </h1>
                    <PortableText blocks={element.node.excerpt._rawFr} />
                    <img src={element.node.mainImage.asset.url} alt="" />
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default PressePage;
