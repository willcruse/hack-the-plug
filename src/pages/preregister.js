import React from "react";
import { Form, Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

class PreReg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "email": "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var toSend = {
            "email": this.state.email
        }
        fetch("https://europe-west1-hack-the-plug.cloudfunctions.net/preregister", {
            method: 'POST',
            body: JSON.stringify(toSend),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'https://hacktheplug.tech'
            }
        }).then((response) => {
            if (response.status === 200) {
                // this.setState({ "success": "inline" });
                // this.setState({ "fail": "none" });
                console.log("s");
            } else {
                // this.setState({ "fail": "inline" });
                // this.setState({ "success": "none" });
                console.log("f");
            }

        }).catch((error) => {
            console.log(error);
            this.setState({ "fail": "inline" });
        });
        console.log(this.state.email);
    }

    handleUpdate(event) {
        event.preventDefault();
        this.setState({
            "email": event.target.value
        });
    }

    render() {
        return (
            <Layout main={false}>
            <div id="prereg">
                <SEO title="Pre-Register" />

                <h1>Pre-Register for HackThePlug</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlID="email">
                        <Form.Label>What is your email address?</Form.Label>
                        <Form.Control type="email" placeholder="your@email.com" name="email" onChange={this.handleUpdate} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                        </Button>
                </Form>
            </div>
            </Layout>
        );
    }
}

export default PreReg;
