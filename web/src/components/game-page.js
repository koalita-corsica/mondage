import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Layout from "./layout";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function GamePage(props) {
const {title, produits, logo, _rawDescription} = props
    return (
    <div>
        {produits.map(item =>
            <img src={item.image.asset.url} alt="" width="359" height="720" />
        )}
        <h1> {title} </h1>
        <img src={logo.asset.url} alt="" width="88" height="124" />
        <PortableText blocks={_rawDescription} />
        {produits.map(item =>
        <div>
            <img src={item.image.asset.url} alt="" width="359" height="720" />
            <h1> {item.genre} </h1>
            <PortableText blocks={item._rawDescription} />
        </div>
        )}
    </div>
  );
}

export default GamePage;
