import { Link } from "gatsby"
import Image from "../components/image"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div>
  <header
    style={{
      background: `#008dd5`,
      marginBottom: `1.45rem`,
    }}
  >
    <div 
        style={{
          // paddingTop: `4rem`,
          maxHeight: `100px`,
          maxWidth: `100px`,

        }}>
        <Image />
      </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        
      </h1>
      <h2> 
      <Link
        to="/apply"
        style={{
          color: `white`,
          float: `right`,
        }}
        >
        Apply
      </Link>
      </h2>
    </div>
  </header>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Hello World`,
}

export default Header
