import React, {useState} from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Slider from "../components/slider";
import PortableText from "../components/portableText";

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';


export const query = graphql`
query AccueilQuery {
  allSanityPage(filter: {slug: {current: {eq: "accueil"}}}) {
    edges {
      node {
        title
        pageBuilder {
          title1
          _rawDesc
        }
      }
    }
  }
}
`;

const IndexPage = (props) => {
  const { data, errors } = props;
  const [count, setCount] = useState(0);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];



  function moins() {
    count && count == 0 ? setCount(3 - 1) : setCount(count - 1)
  }

  function plus() {
    count && count == 3 - 1 ? setCount(0) : setCount(count + 1)
  }

  return (
    <Layout>
      {data.allSanityPage.edges.map(item =>
      <React.Fragment>
        <div className="section1">
          <h1> {item.node.pageBuilder[0].title1} </h1>
          <PortableText blocks={item.node.pageBuilder[0]._rawDesc} />
        </div>
        <div className="section2">
          <h1> {item.node.pageBuilder[1].title1} </h1>
          <PortableText blocks={item.node.pageBuilder[1]._rawDesc} />
        </div>
        <div className="section3">
          <h1> {item.node.pageBuilder[2].title1} </h1>
          <AiOutlineArrowLeft onClick={moins} />
            <Slider count={count} />
          <AiOutlineArrowRight onClick={plus}/>
        </div>
        <div className="section4">
          <h1> {item.node.pageBuilder[3].title1} </h1>
          <PortableText blocks={item.node.pageBuilder[3]._rawDesc} />
        </div>
      </React.Fragment>
      )}
    </Layout>
  );
};

export default IndexPage;
