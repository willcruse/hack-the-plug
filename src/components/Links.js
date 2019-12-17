import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ThemeConsumer } from "styled-components";


class Links extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {
        event.preventDefault();
        window.scrollTo(0, );
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
                                <p to="/about" onClick={(event) => {
                                    console.log(this.refs);
                                    this.refs.about.current.scrollIntoView();
                                }}
                                    style={
                                        {
                                            color: `black`,
                                            float: `bottom`,
                                            fontSize: 14
                                        }
                                    }>About</p>
                            </Col>

                            { /* The Link to the committee section */}
                            <Col style={
                                {
                                    alignSelf: `flex-end`,
                                    textAlign: 'center'
                                }
                            } >
                                <p to="/committee" onClick={this.handleClick}
                                    style={
                                        {
                                            color: `black`,
                                            float: `bottom`,
                                            fontSize: 14
                                        }
                                    }>Team</p>
                            </Col>

                            { /* The Link to the application section */}
                            <Col style={
                                {
                                    alignSelf: `flex-end`,
                                    textAlign: 'center'
                                }
                            } >
                                <p to="/faqs" onClick={this.handleClick}
                                    style={
                                        {
                                            color: `black`,
                                            float: `bottom`,
                                            fontSize: 14
                                        }
                                    }>FAQs</p>
                            </Col>

                            { /* The Link to the sponsors section */}
                            <Col style={
                                {
                                    alignSelf: `flex-end`,
                                    textAlign: 'center'
                                }
                            } >
                                <p to="/sponsors" onClick={this.handleClick}
                                    style={
                                        {
                                            color: `black`,
                                            float: `bottom`,
                                            fontSize: 14
                                        }
                                    }>Sponsors</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="auto" xs={0}></Col>
                </Row>
            </Container>)
    }
}

export default Links;
