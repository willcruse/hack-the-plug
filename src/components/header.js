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
    <h2> 
      <Link
        to="/apply"
        style={{
          color: `white`,
          float: `right`,
          paddingTop: `13rem`,
        }}
        >
        Apply
      </Link>
      </h2>
      <Image style={{
          // paddingTop: `4rem`,
          maxHeight: `300px`,
          maxWidth: `300px`
        }}/>
    {/* </div> */}
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
