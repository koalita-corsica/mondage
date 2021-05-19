import {Link, StaticQuery, graphql} from 'gatsby'
import React from 'react'
import PortableText from "./portableText";



import * as styles from './slider.module.css'

const game = []


const Slider = ({data, count}) => (
    data.allSanityGame.edges.map(item =>
        game.push(item.node)
        ),
        <div className={styles.slide}>
            <img src={game[count].produits[0].image.asset.url} alt="" width="357" height="703"/>
            <div className={styles.content}>
              <img src={game[count].logo.asset.url} alt=""  width="297" height="281" />
              <h1> {game[count].title} </h1>
              <PortableText blocks={game[count]._rawDescription} />
              <Link to={"/game/" + `${game[count].slug.current}`}> <button> Voir Plus </button> </Link>
            </div>
        </div>
  )
  export default function MySlider (props) {
    return (
      <StaticQuery
        query={graphql`
        query MyQuery {
            allSanityGame {
              edges {
                node {
                  title
                  slug {
                    current
                  }
                  _rawDescription
                  logo {
                    asset {
                      url
                    }
                  }
                  produits {
                    image {
                      asset {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          
        `}
        render={data => <Slider data={data} {...props} />}
      />
    )
  }