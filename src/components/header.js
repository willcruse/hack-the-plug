import {
  Link
} from "gatsby"
import Image from "../components/image"
import PropTypes from "prop-types"
import React from "react"
import {
  Container,
  Row,
  Col
} from "react-bootstrap"
const Header = (main) => {
  if (main===true) {
    return (
  <div>
    <header style={
      {
        background: `rgba(0, 0, 0, 0.10)`,
        maxHeight: 50
        // marginBottom: `1.45rem`
      }
    }>
      <Container fluid>
        <Row style={{ maxWidth: '50%', marginLeft: '5%' }}>
          {/*<Col style = {
        {
          maxHeight: `300px`,
          maxWidth: `300px`
        }
      } >
      <Image alt = "logo" />


      </Col>
        <Col> < /Col>*/}


          {/* The Link to the About section */}
          <Col style={{ alignSelf: `flex-end`, textAlign: 'center' }}>
            <h2>
              <Link
                to="/"
                style={{
                  color: `black`,
                  fontSize: 14
                }}>About</Link>
            </h2>
          </Col>


          {/* The Link to the committee section */}
          <Col style={{ alignSelf: `flex-end`, textAlign: 'center' }}>
            <h2>
              <Link
                to="/committee"
                style={{
                  color: `black`,
                  float: `bottom`,
                  fontSize: 14
                }}>The team</Link>
            </h2>
          </Col>


          {/* The Link to the application section */}
          <Col style={{ alignSelf: `flex-end`, textAlign: 'center' }}>
            <h2>
              <Link
                to="/apply"
                style={{
                  color: `black`,
                  float: `bottom`,
                  fontSize: 14
                }}>FAQs</Link>
            </h2>
          </Col>


          {/* The Link to the sponsors section */}
          <Col style={{ alignSelf: `flex-end`, textAlign: 'center' }}>
            <h2>
              <Link
                to="/apply"
                style={{
                  color: `black`,
                  float: `bottom`,
                  fontSize: 14
                }}>Sponsors</Link>
            </h2>
          </Col>


        </Row>
      </Container>
    </header>
  </div>

    )
  }
return (
  <div>
    <header style={
      {
        background: `rgba(0, 0, 0, 0.10)`,
        maxHeight: 50
        // marginBottom: `1.45rem`
      }
    }>
      <Container fluid>
        <Row>
          <Col style={{
            maxHeight: `300px`,
            maxWidth: `300px`
          }}>
            <Image alt="logo" />
          </Col>
          <Col style={{ alignSelf: `flex-end` }}>
            <h2>
              <Link
                to="/"
                style={{
                  color: `white`,
                  float: `bottom`,
                }}
              >
                Home
      </Link>
            </h2>
          </Col>
        </Row>
      </Container>
    </header>
  </div>

)

      }

Header.propTypes = {
  siteTitle: PropTypes.string,
  main: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: `Hack The Plug`,
  main: true,
}

export default Header
