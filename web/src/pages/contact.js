import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import styles from "../pages/Contact.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query ContactPageQuery {
    allSanityPage {
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
  }
`;

const ContactPage = (props) => {
  

  

  return (
    <Layout>
      <SEO title="contact" />
      <h1>Le Contact</h1>
    </Layout>
  );
};

export default ContactPage;
