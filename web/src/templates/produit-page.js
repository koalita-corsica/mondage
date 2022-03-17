import { graphql } from "gatsby";
import React, {useState} from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
import Header from "../components/Header/header";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "gatsby";
import PortableText from "../components/portableText";

import * as styles from "../components/ProduitPage/produit.module.css";

export const query = graphql`
  query ProduitTemplateQuery($id: String!) {
    post: sanityProduit(id: {eq: $id}) {
      id
      slug {
        current
      }
      game {
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
        title
      }
      fiche {
        _rawEn
        _rawFr
      }
      image {
        asset {
          url
        }
      }
    }
  }
`;
// export const query = graphql`
//   query ProduitTemplateQuery($id: String!) {
//     post: sanityProduit(id: {eq: $id}) {
//       id
//       slug {
//         current
//       }
//       game {
//         slug {
//           current
//         }
//         logo {
//           asset {
//             url
//           }
//         }
//         title
//       }
//       fiche {
//         _rawEn
//         _rawFr
//       }
//       image {
//         asset {
//           url
//         }
//       }
//       bouchon {
//         couleur
//         title
//         logo {
//           asset {
//             url
//           }
//         }
//       }
//     }
//   }
// `;

const ProduitPageTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;

  const [nav, showNav] = useState(false);

const [show, showShow] = useState(false);
  return (
    <React.Fragment>
      <div className={styles.contain}>
        <div className={styles.hh}>
          <Header showNav={showNav} nav={nav} show={show}/>
        </div>
        {errors && <SEO title="GraphQL Error" />}
        {post && (
          <SEO
            title={post.game.title || "Untitled"}
            description={toPlainText(post._rawExcerpt)}
            image={post.mainImage}
          />
        )}

        {errors && (
          <>
            <GraphQLErrorList errors={errors} />
          </>
        )}
        
        <div className={styles.wrapperProduit}>
          <Link to={"/game/" + `${post.game.slug.current}`} className={styles.retour}>
            <BsArrowLeft className={styles.arrow} />
            <div className={styles.back}><p>RETOUR</p></div>
          </Link>
          <img src={post.image.asset.url} alt="" className={styles.bouteille} />
          <div className={styles.game}>
            <h1> {post.game.title} </h1>
            <img src={post.game.logo.asset.url} alt="" className={styles.logo} />
            <div className={styles.desc}>
              <PortableText blocks={post.fiche._rawFr} />
            </div>
          </div>
          <img src={post.game.logo.asset.url} alt="" className={styles.logo2} />
        </div>
      </div>
    </React.Fragment>  
  );
};

export default ProduitPageTemplate;
