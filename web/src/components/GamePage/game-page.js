/* eslint-disable react/jsx-key */
// import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import Layout from "../Layout/layout";
import PortableText from "../portableText";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import { Link } from "gatsby";
import * as styles from "./game.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { sr } from "date-fns/locale";
import { myContext } from "../../provider";

const isBrowser = typeof window !== "undefined";

function GamePage(props) {
  const { title, produits, logo, description, slug } = props;

  return (
    <myContext.Consumer>
            {context => (
    <div className={styles.wrapper}>
      <div className={styles.bandeau}>
        <Link to="/vins" className={styles.retour}>
          <BsArrowLeft className={styles.arrow} />
          {context.isEN ? <div className={styles.back}>BACK</div> : <div className={styles.back}>RETOUR</div>}
        </Link>
        <div className={styles.img}>
          {produits.map((item) => (
            <Link to={"#" + `${item.slug.current}`}>
              <div
                className={styles.btl}
                style={{
                  background: `url(${item.miniImage.asset.url})`,
                  width: '100px',
                  height: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.desc}>
        <p className={styles.title}> {title} </p>
        <img src={logo.asset.url} alt="" className={styles.logo} />
        <div className={styles.descText}>
          {context.isEN ? <PortableText blocks={description._rawEn} /> : <PortableText blocks={description._rawFr} /> } 
        </div>
      </div>
      {produits.map((item) => (
        <div className={styles.gameBg} id={item.slug.current}>
          <div className={styles.game}>
            <div className={styles.gameBg2}>
              <amp-img src={item.image.asset.url} alt="" Layout="responsive" />
              <div className={styles.gameText}>
                <h1> {item.genre} </h1>
                {context.isEN ? <PortableText blocks={item.description._rawEn} /> : <PortableText blocks={item.description._rawFr} /> }
                <button>
                  <Link to={"/produit/" + `${item.slug.current}`}>
                    {context.isEN ? "Product description" : "Fiche Produit" }
                  </Link>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
      <div className={styles.btt}>
        <Link to={"/game/" + `${slug.current}`}>
          <BsArrowUp className={styles.icon} /> <p>{context.isEN ? "TOP OF PAGE" : "HAUT DE PAGE" }</p>
        </Link>
      </div>
    </div>
    )}
    </myContext.Consumer>
  );
}

export default GamePage;
