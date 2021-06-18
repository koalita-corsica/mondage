import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../components/layoutProduit";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
import ProduitPage from "../components/produit-page";

export const query = graphql`
  query ProduitTemplateQuery($id: String!) {
    post: sanityProduit(id: { eq: $id }) {
      id
      slug {
        current
      }
      game {
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
        title
      }
      fiche {
        _rawEn
        _rawFr
      }
      image {
        asset {
          url
        }
      }
    }
  }
`;

const ProduitPageTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <ProduitPage {...post} />}
    </Layout>
  );
};

export default ProduitPageTemplate;
