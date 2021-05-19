import { Link } from "gatsby"
import React from "react"
import * as styles from "./footer.module.css";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const Footer = () => (
     <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.domainMondange}>
                <h3>DOMAINE MONDANGE</h3>
            </div>
            <div className={styles.contact}>
                <p>Laura et Andria Mondange</p>
                <p>Saint-Antoine</p>
                <p>20240 Ghisonaccia</p>
                <p>Tél:+33 (0)4 95 59 70 09</p>
                <p>Port:+33 (0)6 17 05 34 79</p>
            </div>
            <div className={styles.plan}>Plan du site</div>
            <div className={styles.plansite}>
                <ul>
                    <li>
                        <Link to="/accueil">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/vins">Nos vins</Link>
                    </li>
                    <li>
                        <Link to="/domaine">Le domaine</Link>
                    </li>
                    <li>
                        <Link to="/galerie">La galerie</Link>
                    </li>
                    <li>
                        <Link to="/presse">La presse</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.follow}>
                <p>Suivez-nous</p>
                <div className={styles.sociaux}>
                    <div><FaFacebookF/></div>
                    <div><FaInstagram/></div>
                </div>
            </div>
            <div className={styles.bar}></div>
            <div className={styles.domainMondange2}>
                <Link to="/domaine">Domaine Mondange</Link>
            </div>
            <div className={styles.cgv}>
            <Link to="/politique">Politique de confidentialité</Link>
            <p>-</p>
            <Link to="/domaine">Mentions légales</Link>
            <p>-</p>
            <Link to="/domaine">CGV</Link>
        </div>
        </div>
    </div>
)

export default Footer;
