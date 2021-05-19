import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import styles from "../pages/domaine.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query DomainePageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const DomainePage = (props) => {
  

  

  return (
    <Layout>
      <SEO title="Domaine" />
      <h1>Le DOMAINE</h1>
    </Layout>
  );
};

export default DomainePage;
