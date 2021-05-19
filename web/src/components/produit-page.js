import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Layout from "./layout";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function ProduitPage(props) {
  const {_rawFiche, game, image} = props
    return (
    <div>
        <img src={image.asset.url} alt="" width="568" height="957" />
        <h1> {game.title} </h1>
        <img src={game.logo.asset.url} alt="" width="179" height="254"/>
        <PortableText blocks={_rawFiche} />
    </div>
  );
}

export default ProduitPage;
