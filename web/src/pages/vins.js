/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import * as styles from "../pages/vins.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import PortableText from "../components/portableText";
import { Link } from "gatsby";
import { myContext } from "../provider";

export const query = graphql`
  query VinsPageQuery {
    allSanityPage(filter: { slug: { current: { eq: "nos-vins" } } }) {
      edges {
        node {
          title {
            fr
            en
          }
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
          description {
            _rawFr
            _rawEn
          }
        }
      }
    }
  }
`;

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const VinsPage = (props) => {
  const { data, errors } = props;

  return (
    <Layout>
      <myContext.Consumer>
        {context => (
          <>
      <div className={styles.bandeau}></div>
      <div className={styles.domainContain}>
        <SEO title="Vins" />
        {data.allSanityPage.edges.map((item) => (
          <>
          {context.isEN ? <div className={styles.title}>{item.node.title.en}</div> : <div className={styles.title}>{item.node.title.fr}</div>}
          </>
        ))}
        <div className={styles.content}>
          {data.allSanityGame.edges.map((games) => (
            <div className={styles.gammes}>
              <img
                src={games.node.logo.asset.url}
                alt=""
                className={styles.logo}
              />
              <div className={styles.block}>
                <h1 className={styles.titleGammes}> {games.node.title} </h1>
                {context.isEN ? <PortableText
                  blocks={games.node.description._rawEn}
                  serializers={serializers}
                /> 
                :
                <PortableText
                  blocks={games.node.description._rawFr}
                  serializers={serializers}
                />
                 }
                
                <button>
                  <Link to={"/game/" + `${games.node.slug.current}`}>
                  {context.isEN ? "See the collection" : "Voir la gamme"}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
      )}
      </myContext.Consumer>
    </Layout>
  );
};

export default VinsPage;
