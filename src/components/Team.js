import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import Profile from "./Profile"
class Team extends React.Component {
    constructor(props) {
        super(props);
        this.teamRef = React.createRef();
    }

    render() {
        return (
            <div id="team" ref={this.teamRef}style={{
              marginTop: 50,
              marginBottom: 50,
              backgroundColor: "rgba(255, 240, 240, 0.65)",
              minWidth: "100%",
              padding: 20
            }}>
              <h1 style={{marginLeft: 30, marginRight: 30, marginBottom: 50}}>Hack The Plug team</h1>
                <Container fluid>
                    <Row>
                        <Col><Profile pers="will"/></Col>
                        <Col><Profile pers="james" /></Col>
                        <Col><Profile pers="ollie" /></Col>
                    </Row>
                    <Row>
                        <Col><Profile pers="awen" /></Col>
                        <Col><Profile pers="ed" /></Col>
                        <Col><></></Col>
                    </Row>
                </Container>
            </div >
        );
    }

}

export default Team;
