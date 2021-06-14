/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
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
import bottle from "../asset/Laudria_Rouge2.png";
import pressImg from "../asset/accueilpresse.jpg";
import domainImg from "../asset/accueildomaine.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import * as styles from "../pages/index.module.css";

export const query = graphql`
  query AccueilQuery {
    allSanityPage(filter: { slug: { current: { eq: "accueil" } } }) {
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
    if (count == 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
  }

  function plus() {
    if (count == 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  function translateLoad() {
    const blockPara = document.querySelector("#block1");
    const bottle = document.querySelector("#bottle");
    blockPara.setAttribute(
      "style",
      "opacity: 1; transform: translateX(0%); transition: all 1.8s"
    );
    bottle.setAttribute(
      "style",
      "opacity: 1; transform: translateX(0%); transition: all 1.8s"
    );
  }
  typeof window !== "undefined" &&
    window.addEventListener("scroll", () => {
      const blockPara = document.querySelector("#block1");
      const bottle = document.querySelector("#bottle");
      blockPara.style.transition = "all 1s";
      bottle.style.transition = "all 1s";
      var i = 0;
      if (window.scrollY == i) {
        blockPara.setAttribute(
          "style",
          "opacity: 1; transform: translateX(0%); transition: all 1s"
        );
        bottle.style.transform = "translateX(0%)";
      }
      if (window.scrollY > 99) {
        blockPara.setAttribute(
          "style",
          "opacity: 0.9; transform: translateX(15%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-15%)";
      }
      if (window.scrollY > 199) {
        // blockPara.style.transform = "translateX(50%)";
        blockPara.setAttribute(
          "style",
          "opacity: 0.8; transform: translateX(30%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-30%)";
      }
      if (window.scrollY > 299) {
        blockPara.setAttribute(
          "style",
          "opacity: 0.7; transform: translateX(45%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-45%)";
      }
      if (window.scrollY > 399) {
        blockPara.setAttribute(
          "style",
          "opacity: 0.6; transform: translateX(60%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-60%)";
      }
      if (window.scrollY > 499) {
        blockPara.setAttribute(
          "style",
          "opacity: 0.5; transform: translateX(75%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-75%)";
      }
      if (window.scrollY > 599) {
        blockPara.setAttribute(
          "style",
          "opacity: 0.4; transform: translateX(90%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-90%)";
      }
      if (window.scrollY > 699) {
        blockPara.setAttribute(
          "style",
          "opacity: 0.3; transform: translateX(105%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-105%)";
      }
      if (window.scrollY > 799) {
        blockPara.setAttribute(
          "style",
          "opacity: 0.2; transform: translateX(120%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-120%)";
      }
      if (window.scrollY > 899) {
        blockPara.setAttribute(
          "style",
          "opacity: 0.1; transform: translateX(135%); transition: all 1s"
        );
        bottle.style.transform = "translateX(-135%)";
      }
    });

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <Layout>
      {data.allSanityPage.edges.map((item) => (
        <React.Fragment>
          <div className={styles.wrapperAccueil} onLoad={translateLoad}>
            <div className={styles.section1}>
              <img src={bottle} className={styles.bottle} id="bottle" />
              <div
                className={styles.block1}
                id="block1"
                data-att="block1"
                onScroll={{}}
              >
                <div className={styles.title}>
                  {item.node.pageBuilder[0].title1.fr}{" "}
                </div>
                <PortableText
                  blocks={item.node.pageBuilder[0].desc._rawFr}
                  className={styles.text}
                  serializers={serializers}
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
                {item.node.pageBuilder[1].title1.fr}{" "}
              </div>
              <img src={domainImg} className={styles.domainimg} />
              <PortableText
                blocks={item.node.pageBuilder[1].desc._rawFr}
                serializers={serializers}
              />
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
                  {item.node.pageBuilder[2].title1.fr}{" "}
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
                  {item.node.pageBuilder[3].title1.fr}{" "}
                </div>
                <div className={styles.pressBlock}>
                  <PortableText
                    blocks={item.node.pageBuilder[3].desc._rawFr}
                    serializers={serializers}
                  />
                  <button className={styles.gamme}>
                    <Link to="/presse">VOIR LES ARTICLES</Link>
                  </button>
                </div>
              </div>
              <div className={styles.pressimg}>
                <img src={pressImg}></img>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default IndexPage;
