import { Link } from "gatsby";
import Image from "../components/image";
import PropTypes from "prop-types";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = (main) => {
  if (main == true) {
    return (
<div>
    <header
      style={{
        background: `#008dd5`,
        // marginBottom: `1.45rem`
      }}
    >
      <Container fluid>
        <Row>
          <Col style={{
            maxHeight: `300px`,
            maxWidth: `300px`
          }}>
            <Image alt="logo" />
          </Col>
          <Col></Col>
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
          {/* <Col style={{ alignSelf: `flex-end` }}>
            <h2>
              <Link
                to="/committee"
                style={{
                  color: `white`,
                  float: `bottom`,
                }}>Committee</Link>
                </h2>
          </Col> */}
            {/* The Link to the application page */}
            {/* <Col style={{alignSelf: `flex-end`}}>
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
        </Col>*/}
        </Row>
      </Container>
    </header>
  </div>

    )
  } 
  return (
    <div>
    <header
      style={{
        background: `#008dd5`,
        // marginBottom: `1.45rem`
      }}
    >
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
