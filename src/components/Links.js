import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
    Link
} from "gatsby"

const Links = () => {
    return (
        <Container fluid >
            <Row >
                <Col xs="auto" sm="auto">
                <Row>
                { /* The Link to the About section */}
                <Col style={
                    {
                        alignSelf: `flex-end`,
                        textAlign: 'center'
                    }
                } >
                    <h2 >
                        <Link to="/"
                            style={
                                {
                                    color: `black`,
                                    fontSize: 14
                                }
                            } > About
          </Link>
                    </h2>
                </Col>

                { /* The Link to the committee section */}
                <Col style={
                    {
                        alignSelf: `flex-end`,
                        textAlign: 'center'
                    }
                } >
                    <h2>
                        <Link to="/committee"
                            style={
                                {
                                    color: `black`,
                                    float: `bottom`,
                                    fontSize: 14
                                }
                            } > Team
          </Link>
                    </h2>
                </Col>

                { /* The Link to the application section */}
                <Col style={
                    {
                        alignSelf: `flex-end`,
                        textAlign: 'center'
                    }
                } >
                    <h2 >
                        <Link to="/apply"
                            style={
                                {
                                    color: `black`,
                                    float: `bottom`,
                                    fontSize: 14
                                }
                            } > FAQs
          </Link>
                    </h2>
                </Col>

                { /* The Link to the sponsors section */}
                <Col style={
                    {
                        alignSelf: `flex-end`,
                        textAlign: 'center'
                    }
                } >
                    <h2 >
                        <Link to="/apply"
                            style={
                                {
                                    color: `black`,
                                    float: `bottom`,
                                    fontSize: 14
                                }
                            } > Sponsors
          </Link>
                    </h2>
                </Col>
                </Row>
                </Col>
                <Col sm="auto" xs={0}></Col>
            </Row>
        </Container>)
}

export default Links;