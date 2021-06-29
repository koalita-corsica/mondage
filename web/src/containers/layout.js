import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  const [nav, showNav] = useState(false);

  const [show, showShow] = useState(false);

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }
        return (
          <React.Fragment>
            <Helmet>
              <meta name="Cache-control" content="max-age=31536000" />
            </Helmet> 
            <Layout
              {...props}
              showNav={showNav}
              siteTitle={data.site.title}
              nav={nav}
              show={show}
            />
        </React.Fragment>
        );
      }}
    />
  );
}

export default LayoutContainer;
