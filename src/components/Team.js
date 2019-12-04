import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import Profile from "./Profile"
class Team extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="team">
                <Container fluid>
                    <Row>
                        <Col><Profile pers="will" /></Col>
                        <Col><Profile pers="james" /></Col>
                        <Col><Profile pers="ollie" /></Col>
                    </Row>
                    <Row>
                        <Col><Profile pers="awen" /></Col>
                        <Col><Profile pers="ed" /></Col>
                        <Col><Profile pers="arthur" /></Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Team;