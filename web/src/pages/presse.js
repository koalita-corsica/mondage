import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import styles from "../pages/vins.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import PortableText from "../components/portableText";

export const query = graphql`
  query PressePageQuery {
    allSanityPage(filter: {slug: {current: {eq: "la-presse"}}}) {
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

  return (
    <Layout>
     {data.allSanityPage.edges.map(item =>
      <React.Fragment>
        <div className="section1">
          <h1> {item.node.pageBuilder[0].title1} </h1>
          <PortableText blocks={item.node.pageBuilder[0]._rawDesc} />
        </div>
      </React.Fragment>
      )}
      {data.allSanityPost.edges.map(element => 
        <div>
          <h1> {element.node.title} </h1>
          <PortableText blocks={element.node._rawExcerpt} />
          <img src={element.node.mainImage.asset.url} alt="" />
        </div>
      )}
    </Layout>
  );
};

export default PressePage;
