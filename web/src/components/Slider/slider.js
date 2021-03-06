import { Link, StaticQuery, graphql } from "gatsby";
import React from "react";
import PortableText from "../portableText";
import { myContext } from "../../provider";

import * as styles from "./slider.module.css";

const game = [];

const Slider = ({ data, count }) => (
  data.allSanityGame.edges.map((item) => game.push(item.node)),
  (
    <myContext.Consumer>
      {context => (
    <div className={styles.slide}>

      <img
        className={styles.sliderBot}
        src={game[count].produits[0].image.asset.url}
        alt=""
        width="357"
      />

      <div className={styles.content}>
        <img
          src={game[count].logo.asset.url}
          alt=""
          className={styles.sliderLogo}
          width='300'
          height='200'
        />
        <h1 className={styles.title}> {game[count].title} </h1>
        {context.isEN ? <PortableText blocks={game[count].description._rawEn} className={styles.desc} /> : <PortableText blocks={game[count].description._rawFr} className={styles.desc} />}
        <button>
          <Link
            to={"/game/" + `${game[count].slug.current}`}
            className={styles.btn}
          >
            {context.isEN ? "SEE MORE" : "VOIR PLUS"}
          </Link>
        </button>
      </div>
    </div>
      )}
      </myContext.Consumer>
  )
);
export default function MySlider(props) {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSanityGame {
            edges {
              node {
                title
                slug {
                  current
                }
                description {
                  _rawFr
                  _rawEn
                }
                logo {
                  asset {
                    url
                  }
                }
                produits {
                  image {
                    asset {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <Slider data={data} {...props} />}
    />
  );
}
