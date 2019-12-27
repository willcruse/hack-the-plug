/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {
  useStaticQuery,
  graphql
} from "gatsby"

import Header from "./header"
import StyledBackgroundSection from "./bg"

const Layout = ({ children, main}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <Header siteTitle="HackThePlug" main={main} style={{
        maxWidth: '100%'
      }}/>
      {main ? <StyledBackgroundSection className="hello" /> : <></> }
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>

    </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired
}

export default Layout;
