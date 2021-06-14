import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import * as styles from "../pages/contact.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import img from "../asset/galerie2.jpg";
import spargo from "../asset/Spargolato_Rouge.png";
import primizia from "../asset/Primizia_Rouge.png";
import laudria from "../asset/Laudria_Rouge.png";
import spargo2 from "../asset/Spargolato_Rouge2.png";
import primizia2 from "../asset/Primizia_Rouge2.png";
import laudria2 from "../asset/Laudria_Rouge2.png";
import Img from "gatsby-image";

export const query = graphql`
  query ContactPageQuery {
    allSanityPage {
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
            _rawDesc
          }
        }
      }
    }
  }
`;

const ContactPage = (props) => {
  return (
    <Layout>
      <SEO title="contact" />
      <div className={styles.wrapperCtc}>
        <Img src={img} className={styles.img} />
        <div className={styles.contactLayout}>
          <h1>contactez-nous</h1>
          <div className={styles.contact}>
            <form className={styles.form}>
              <div className={styles.lbl}>
                <label className={styles.nom}>NOM</label>
                <input
                  type="text"
                  id="nom"
                  className={styles.inputNom}
                  placeholder="Entrez votre nom"
                />
              </div>
              <div className={styles.lbl}>
                <label className={styles.prenom}>PRENOM</label>
                <input
                  type="text"
                  id="prenom"
                  className={styles.inputPrenom}
                  placeholder="Entrez votre prénom"
                />
              </div>
              <div className={styles.lbl}>
                <label className={styles.mail}>ADRESSE E-MAIL</label>
                <input
                  type="text"
                  id="mail"
                  className={styles.inputMail}
                  placeholder="Entrez votre adresse e-mail"
                />
              </div>
              <div className={styles.lbl}>
                <label className={styles.msg}>MESSAGE</label>
                <textarea
                  id="msg"
                  className={styles.msgArea}
                  placeholder="Entrez votre message"
                />
              </div>
              <button className={styles.envoyer}>ENVOYER</button>
            </form>
            <div className={styles.horaire}>
              <div className={styles.ouverture}>HORAIRES D'OUVERTURES</div>
              <div className={styles.dates}>Avril / Octobre</div>
              <p>Du mardi au samedi</p>
              <p>10H - 13H / 15H30 - 19H30</p>
              <div className={styles.dates}>Novembre / Mars</div>
              <p>Du mardi au samedi</p>
              <p>9H - 12H / 14H - 18H</p>
              <div className={styles.dates}>
                Sur réservation, chaque mercredi.
              </div>
              <p>
                Visite commentée de la cave avec dégustation de cinq vins du
                Domaine, accordés à cinq mets corse. Tarif: 35 euros
              </p>
            </div>
            <div className={styles.bouteilles}>
              <div className={styles.rouge1} />
              <div className={styles.rouge12} />
              <div className={styles.rouge13} />
              <div className={styles.rouge21} />
              <div className={styles.rouge22} />
              <div className={styles.rouge23} />

              {/* <img src={laudria} className={styles.rouge1}></img>
              <img src={primizia} className={styles.rouge1}></img>
              <img src={spargo} className={styles.rouge1}></img>
              <img src={laudria2} className={styles.rouge2}></img>
              <img src={primizia2} className={styles.rouge2}></img>
              <img src={spargo2} className={styles.rouge2}></img> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
