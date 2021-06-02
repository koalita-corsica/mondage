import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
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
import bottle from "../asset/Laudria_Rouge.png";
import domainImg from "../asset/accueildomaine.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import * as styles from "../pages/index.module.css";

export const query = graphql`
  query AccueilQuery {
    allSanityPage(filter: { slug: { current: { eq: "accueil" } } }) {
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
    count && count == 0 ? setCount(2) : setCount(count + 1);
  }

  function plus() {
    count && count == 2 ? setCount(0) : setCount(count - 1);
  }

  window.addEventListener("scroll", () => {
    const blockPara = document.querySelector("#block1");
    const bottle = document.querySelector("#bottle");
    blockPara.style.transition = "all 1s";
    bottle.style.transition = "all 1s";
    var i = 0;
    console.log(window.scrollY);
    if (window.scrollY == i) {
      blockPara.setAttribute('style', 'opacity: 1; transform: translateX(0%); transition: all 1s');
      bottle.style.transform = "translateX(0%)";
    }
    if (window.scrollY > 133) {
      blockPara.setAttribute('style', 'opacity: 0.75; transform: translateX(25%); transition: all 1s');
      bottle.style.transform = "translateX(-25%)";
    }
    if (window.scrollY > 266) {
      // blockPara.style.transform = "translateX(50%)";
      blockPara.setAttribute('style', 'opacity: 0.5; transform: translateX(50%); transition: all 1s');
      bottle.style.transform = "translateX(-50%)"; 
    }
    if (window.scrollY > 399) {
      blockPara.setAttribute('style', 'opacity: 0.25; transform: translateX(75%); transition: all 1s');
      bottle.style.transform = "translateX(-75%)";  
    }
    if (window.scrollY > 533) {
      blockPara.setAttribute('style', 'opacity: 0; transform: translateX(100%); transition: all 1s');
      bottle.style.transform = "translateX(-100%)";
    }
    if (window.scrollY > 666) {
      blockPara.setAttribute('style', 'opacity: 0; transform: translateX(125%); transition: all 1s');
      bottle.style.transform = "translateX(-125%)";
    }
    // if (window.scrollY > 799) {
    //   blockPara.style.transform = "translateX(150%)";
    //   bottle.style.transform = "translateX(-150%)";
    // }
    // if (window.scrollY > 933) {
    //   blockPara.style.transform = "translate(175%)";
    //   bottle.style.transform = "translate(-175%)";
    // }
  });

  return (
    <Layout>
      {data.allSanityPage.edges.map((item) => (
        <React.Fragment>
          <div className={styles.wrapperAccueil}>
            <div className={styles.section1}>
              <img src={bottle} className={styles.bottle} id="bottle"/>
              <div className={styles.block1} id="block1" onScroll={{}}>
                <div className={styles.title}>
                  {" "}
                  {item.node.pageBuilder[0].title1}{" "}
                </div>
                <PortableText
                  blocks={item.node.pageBuilder[0]._rawDesc}
                  className={styles.text}
                />
                <button className={styles.gamme}>
                  <Link to="/vins" className={styles.a}>
                    VOIR NOS GAMMES
                  </Link>
                </button>
              </div>
            </div>
            <div className={styles.section2}>
              <div className={styles.title}>
                {" "}
                {item.node.pageBuilder[1].title1}{" "}
              </div>
              <img src={domainImg} className={styles.domainimg} />
              <PortableText blocks={item.node.pageBuilder[1]._rawDesc} />
              <button className={styles.gamme}>
                <Link to="/domaine" className={styles.a}>
                  EN SAVOIR PLUS
                </Link>
              </button>
            </div>
            <div className={styles.section3}>
              <div className={styles.sliderimg} />
              <div className={styles.sliderContain}>
                <div className={styles.title}>
                  {" "}
                  {item.node.pageBuilder[2].title1}{" "}
                </div>
                <div className={styles.slider}>
                  <IoIosArrowBack onClick={moins} />
                  <Slider count={count} />
                  <IoIosArrowForward onClick={plus} />
                </div>
              </div>
            </div>
            <div className={styles.section4}>
              <div className={styles.pressContain}>
                <div className={styles.title}>
                  {" "}
                  {item.node.pageBuilder[3].title1}{" "}
                </div>
                <div className={styles.pressBlock}>
                  <PortableText blocks={item.node.pageBuilder[3]._rawDesc} />
                  <button className={styles.gamme}>
                    <Link to="/presse">VOIR LES ARTICLES</Link>
                  </button>
                </div>
              </div>
              <div className={styles.pressimg} />
            </div>
          </div>
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default IndexPage;
