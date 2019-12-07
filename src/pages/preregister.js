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
        //TODO Send to Backend
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