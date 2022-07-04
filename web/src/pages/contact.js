import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import * as styles from "../pages/contact.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import img from "../asset/galerie2.webp";
import spargo from "../asset/Spargolato_Rouge.png";
import primizia from "../asset/Primizia_Rouge.png";
import laudria from "../asset/Laudria_Rouge.png";
import spargo2 from "../asset/Spargolato_Rouge2.png";
import primizia2 from "../asset/Primizia_Rouge2.png";
import laudria2 from "../asset/Laudria_Rouge2.png";
import { myContext } from "../provider";
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

const isBrowser = typeof window !== "undefined";

const ContactPage = (props) => {
  return (
    <Layout>
      <myContext.Consumer>
        {context => (
          <>
      <SEO title="Contact" />
      <div className={styles.wrapperCtc}>
        <img
          src={img}
          style={{ height: "auto", width: "31vw" }}
          alt=""
        />
        <div className={styles.contactLayout}>
          {context.isEN ? <h1>Contact<span>-</span>us</h1> : <h1>contactez<span>-</span>nous</h1>}
          <div className={styles.contact}>
            {context.isEN ? 
            <form action="https://getform.io/f/147656b8-45a5-4d6d-a25b-da72158258bf" method="POST" className={styles.form}>
            <div className={styles.lbl}>
              <label className={styles.nom}>NAME</label>
              <input
                type="text"
                id="nom"
                className={styles.inputNom}
                placeholder="Enter your name"
                name="nom"
              />
            </div>
            <div className={styles.lbl}>
              <label className={styles.prenom}>FIRST NAME</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                className={styles.inputPrenom}
                placeholder="Enter your first name"
              />
            </div>
            <div className={styles.lbl}>
              <label className={styles.mail}>EMAIL ADDRESS</label>
              <input
                type="text"
                id="mail"
                className={styles.inputMail}
                name="E-mail"
                placeholder="Enter your email address"
              />
            </div>
            <div className={styles.lbl}>
              <label className={styles.msg}>MESSAGE</label>
              <textarea
                id="msg"
                className={styles.msgArea}
                placeholder="Enter your message
                "
                name="message"
              />
            </div>
            <button className={styles.envoyer}>SEND</button>
          </form>
            : 
            <form action="https://getform.io/f/147656b8-45a5-4d6d-a25b-da72158258bf" method="POST" className={styles.form}>
              <div className={styles.lbl}>
                <label className={styles.nom}>NOM</label>
                <input
                  type="text"
                  id="nom"
                  className={styles.inputNom}
                  placeholder="Entrez votre nom"
                  name="nom"
                />
              </div>
              <div className={styles.lbl}>
                <label className={styles.prenom}>PRÉNOM</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
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
                  name="E-mail"
                  placeholder="Entrez votre adresse e-mail"
                />
              </div>
              <div className={styles.lbl}>
                <label className={styles.msg}>MESSAGE</label>
                <textarea
                  id="msg"
                  className={styles.msgArea}
                  placeholder="Entrez votre message"
                  name="message"
                />
              </div>
              <button className={styles.envoyer}>ENVOYER</button>
            </form>
            }
            {context.isEN ?
            <div className={styles.horaire}>
            <h1 className={styles.ouverture}>BUSINESS HOURS </h1>
            <div className={styles.dates}>April / October</div>
            <p>Tuesday-Saturday</p>
            <p>10am -1pm / 3:30pm - 7:30pm</p>
            <div className={styles.dates}>November / March</div>
            <p>Tuesday - Saturday</p>
            <p>9am - 12pm / 2pm - 6pm</p>
            <div className={styles.dates}>
            Wednesdays, by reservation only.
            </div>
            <p>
            Guided tour of the cellar with a tasting of 5 wines from the domain, paired with 5 corsican foods. Cost: 35 euros
            </p>
          </div>
            :
            <div className={styles.horaire}>
              <h1 className={styles.ouverture}>HORAIRES D'OUVERTURE</h1>
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
                Domaine, accordés à cinq mets corses. Tarif : 35 euros
              </p>
            </div>
            }
            <div className={styles.bouteilles}>
              <div className={styles.rouge1} />
              <div className={styles.rouge12} />
              <div className={styles.rouge13} />
              <div className={styles.rouge21} />
              <div className={styles.rouge22} />
              <div className={styles.rouge23} />
            </div>
          </div>

        </div>
      </div>
      </>
      )}
      </myContext.Consumer>
    </Layout>
  );
};

export default ContactPage;
