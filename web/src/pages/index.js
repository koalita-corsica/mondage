import React, {useState} from "react";
import { Link } from "gatsby"
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Slider from "../components/slider";
import PortableText from "../components/portableText";
import bottle from "../asset/Laudria_Rouge.png" 
import domainImg from "../asset/accueildomaine.jpg"
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import * as styles from "../pages/index.module.css";

export const query = graphql`
query AccueilQuery {
  allSanityPage(filter: {slug: {current: {eq: "accueil"}}}) {
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

const IndexPage = (props) => {
  const { data, errors } = props;
  const [count, setCount] = useState(0);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];



  function moins() {
    count && count == 0 ? setCount(2) : setCount(count + 1)
  }

  function plus() {
    count && count == 2 ? setCount(0) : setCount(count + 1)
  }

  return (
    <Layout>
      {data.allSanityPage.edges.map(item =>
      <React.Fragment>
        <div className={styles.wrapperAccueil}>
          <div className={styles.section1}>
              <img src={bottle} className={styles.bottle}/>
              <div className={styles.block1}>
                <h1> {item.node.pageBuilder[0].title1} </h1>
                <PortableText blocks={item.node.pageBuilder[0]._rawDesc} />
                <button className={styles.gamme}><Link to="/vins">VOIR NOS GAMMES</Link></button> 
            </div>
          </div>
          <div className={styles.section2}>
            <h1> {item.node.pageBuilder[1].title1} </h1>
            <img src={domainImg} className={styles.domainimg}/>
            <PortableText blocks={item.node.pageBuilder[1]._rawDesc} />
          </div>
          <div className={styles.section3}>
            <div className={styles.sliderimg}/>
            <div className={styles.sliderContain}>
              <h1> {item.node.pageBuilder[2].title1} </h1>
              <div className={styles.slider}>
                <IoIosArrowBack onClick={moins} />
                  <Slider count={count} />
                <IoIosArrowForward onClick={plus}/>
              </div>
            </div>
          </div>
          <div className={styles.section4}>
            <div className={styles.pressContain}>
              <h1> {item.node.pageBuilder[3].title1} </h1>
              <div className={styles.pressBlock}>
                <PortableText blocks={item.node.pageBuilder[3]._rawDesc} />
                <button className={styles.article}><Link to="/presse">VOIR LES ARTICLES</Link></button>
              </div>
            </div>
            <div className={styles.pressimg}/>
          </div>
        </div>
      </React.Fragment>
      )}
    </Layout>
  );
};

export default IndexPage;
