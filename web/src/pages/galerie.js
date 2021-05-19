import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import styles from "../pages/galerie.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query GaleriePageQuery {
    allSanityPage(filter: {slug: {current: {eq: "la-galerie"}}}) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

const GaleriePage = (props) => {
  const { data, errors } = props;

  return (
    <Layout>
      <SEO title="galerie" />
      {data.allSanityPage.edges.map(item =>
          <h1>{item.node.title}</h1>
        )}
    </Layout>
  );
};

export default GaleriePage;
