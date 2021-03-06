/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import * as styles from "../pages/domaine.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import PortableText from "../components/portableText";
import laura from "../asset/domainelaura.jpg";
import domainImg1 from "../asset/domainetonneau.jpg";
import domainImg2 from "../asset/domainevigne.jpg";
import domainImg3 from "../asset/domainelabo.jpg";
import { myContext } from "../provider";

export const query = graphql`
  query DomainePageQuery {
    allSanityPage(filter: { slug: { current: { eq: "le-domaine" } } }) {
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
              _rawEn
              _rawFr
            }
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

const isBrowser = typeof window !== "undefined";

const DomainePage = (props) => {
  const { data, errors } = props;

  return (
    <Layout>
      <SEO title="Domaine" />
      {data.allSanityPage.edges.map((item) => (
        <myContext.Consumer>
        {context => (
        <React.Fragment>
          <div className={styles.wrapperDomain}>
            <div className={styles.section1Domaine}>
            {context.isEN ? 
                <div className={styles.block1}>
                  <h1 className={styles.titlesec1}> {item.node.pageBuilder[0].title1.en} </h1>
                  <PortableText
                    blocks={item.node.pageBuilder[0].desc._rawEn}
                    serializers={serializers}
                  />
              </div>
            : 
              <div className={styles.block1}>
                <h1 className={styles.titlesec1}> {item.node.pageBuilder[0].title1.fr} </h1>
                <PortableText
                  blocks={item.node.pageBuilder[0].desc._rawFr}
                  serializers={serializers}
                />
              </div>
            }
            </div>
            <div className={styles.section2}>
              <img
                src={laura}
                Layout="responsive"
                style={{
                  height: "310px",
                  width: "310px",
                  borderRadius: "100%",
                }}
                alt=""
              />
              {context.isEN ? 
              <>
              <h2> {item.node.pageBuilder[1].title1.en} </h2>
              <div className={styles.block2}>
                <PortableText
                  blocks={item.node.pageBuilder[1].desc._rawEn}
                  serializers={serializers}
                />
              </div>
              </>
              :
              <>
              <h2> {item.node.pageBuilder[1].title1.fr} </h2>
              <div className={styles.block2}>
                <PortableText
                  blocks={item.node.pageBuilder[1].desc._rawFr}
                  serializers={serializers}
                />
              </div>
              </>
              } 
            </div>
            <div className={styles.section3}>
              <div className={styles.domainImg1}>
              </div>
              <div className={styles.domainImg2}>
              </div>
              <div className={styles.domainImg3}>
              </div>
              {/* <div className={styles.domainImg1}></img></div>
              <div className={styles.domainImg2}><img src={domainImg2}></img></div>
              <div className={styles.domainImg3}><img src={domainImg3}></img></div> */}
            </div>
          </div>
        </React.Fragment>
        )}
        </myContext.Consumer>
      ))}
      
    </Layout>
  );
};

export default DomainePage;
