import * as styles from "./produit.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "../author-list";
import Layout from "../Layout/layout";
import PortableText from "../portableText";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "gatsby";

function ProduitPage(props) {
  const { fiche, game, image, slug } = props;
  return (
    <myContext.Consumer>
      {context => (
        <div className={styles.wrapperProduit}>
          <Link to={"/game/" + `${game.slug.current}`} className={styles.retour}>
            <BsArrowLeft className={styles.arrow} />
            <div className={styles.back}><p>{context.isEN ? "BACK" : "RETOUR" }</p></div>
          </Link>
          <img src={image.asset.url} alt="" className={styles.bouteille} />
          <div className={styles.game}>
            <h1> {game.title} </h1>
            <img src={game.logo.asset.url} alt="" className={styles.logo} />
            <div className={styles.desc}>
              {context.isEN ? <PortableText blocks={fiche._rawEn} /> : <PortableText blocks={fiche._rawFr} />}
            </div>
          </div>
          <img src={game.logo.asset.url} alt="" className={styles.logo2} />
        </div>
      )}
    </myContext.Consumer>
  );
}

export default ProduitPage;
