import { Link } from "gatsby"
import Image from "../components/image"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
const Header = () => (
  <div>
    <header
      style={{
        background: `#008dd5`,
        marginBottom: `1.45rem`,
      }}
    >
      <Container>
        <Row>
          <Col>
      <Image style={{
        maxHeight: `300px`,
        maxWidth: `300px`
      }} />
      </Col>
      <Col>
      <h2>
        <Link
          to="/"
          style={{
            color: `white`,
          }}>
          Home
      </Link>
      </h2>
      </Col>
      <Col>
      <h2>
        <Link
          to="/apply"
          style={{
            color: `white`,
          }}
        >
          Apply
      </Link>
      </h2>
      </Col>
      </Row>
      </Container>
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
