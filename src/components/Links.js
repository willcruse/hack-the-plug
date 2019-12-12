import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
    Link
} from "gatsby"

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {
        event.preventDefault();

    }

    render() {
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
                        <Link to="/"
                            style={
                                {
                                    alignSelf: `flex-end`,
                                    textAlign: 'center'
                                }
                            } >
                                <h2>
                                    <p to="/committee" onClick={this.handleClick}
                                        style={
                                            {
                                                color: `black`,
                                                float: `bottom`,
                                                fontSize: 14
                                            }
                                        } > Team
          </p>
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
                        <Link to="/"
                            style={
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
                        <Link to="/"
                            style={
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
}

export default Links;
