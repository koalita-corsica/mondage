import * as styles from "./produit.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Layout from "./layout";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import { BsArrowLeft } from 'react-icons/bs';
import {Link} from "gatsby";

function ProduitPage(props) {
  const {_rawFiche, game, image} = props
    return (
<<<<<<< HEAD
    <div>
        <img src={image.asset.url} alt="" width="568" height="957" />
        <h1> {game.title} </h1>
        <PortableText blocks={_rawFiche} />
=======
    <div className={styles.wrapperProduit}>
        <Link to="/vins" className={styles.retour}><BsArrowLeft className={styles.arrow}/><div className={styles.back}>RETOUR</div></Link>
        <img src={image.asset.url} alt=""  className={styles.bouteille}/>
        <div className={styles.game}>
          <img src={game.logo.asset.url} alt="" className={styles.logo}/>
          <h1> {game.title} </h1>
          <div className={styles.desc}>
            <PortableText blocks={_rawFiche} />
          </div>
        </div>
>>>>>>> f4bad6dab6f33067bd7ae27f3e2ca998ffb1d2fb
    </div>
  );
}

export default ProduitPage;
