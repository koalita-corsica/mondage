// import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Layout from "./layout";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import {Link} from "gatsby";
import * as styles from "../components/game.module.css";
import { BsArrowLeft } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';

function GamePage(props) {
const {title, produits, logo, _rawDescription} = props
console.log(produits)


    return (
    <div className={styles.wrapper}>
        <div className={styles.bandeau}>
            <Link to="/vins" className={styles.retour}><BsArrowLeft className={styles.arrow}/><div className={styles.back}>RETOUR</div></Link>
            <div className={styles.img}>
            {produits.map(item =>
                <img src={item.image.asset.url} alt="" width="359" height="720" />
                )}
            </div>
        </div>
        <div className={styles.desc}>
            <p className={styles.title}> {title} </p>
            <img src={logo.asset.url} alt="" className={styles.logo} />
            <div className={styles.descText}>
                <PortableText blocks={_rawDescription} />
            </div>
        </div>
        <div className={styles.gameBg}>
        {produits.map(item =>
                <div className={styles.game}>
                    <div className={styles.gameBg2}>
                        <img src={item.image.asset.url} alt="" width="359" height="720" />
                        <div className={styles.gameText}>
                            <h1> {item.genre} </h1>
                            <PortableText blocks={item._rawDescription} />
                            <Link to={"/produit/" + `${item.slug.current}`}> <button> Fiche Produit </button> </Link>
                    </div>
                </div>
            </div>
            )};
            </div>
    </div>
  );
}

export default GamePage;
