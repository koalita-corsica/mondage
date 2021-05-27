import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
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

export const query = graphql`
  query DomainePageQuery {
    allSanityPage(filter: {slug: {current: {eq: "le-domaine"}}}) {
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

const DomainePage = (props) => {
  const { data, errors } = props;

  return (
    <Layout>
     {data.allSanityPage.edges.map(item =>
      <React.Fragment>
        <div className={styles.wrapperDomain}>
          <div className={styles.section1}>
            <h1> {item.node.pageBuilder[0].title1} </h1>
            <PortableText blocks={item.node.pageBuilder[0]._rawDesc} />
          </div>
          <div className={styles.section2}>
            <img src={laura} className={styles.laura}/>
            <h2> {item.node.pageBuilder[1].title1} </h2>
            <PortableText blocks={item.node.pageBuilder[1]._rawDesc} />
          </div>
          <div className={styles.section3}>
            <img  className={styles.domainImg1}/>
            <img  className={styles.domainImg2}/>
            <img  className={styles.domainImg3}/>
          </div>
        </div>
      </React.Fragment>
      )}
    </Layout>
  );
};

export default DomainePage;
