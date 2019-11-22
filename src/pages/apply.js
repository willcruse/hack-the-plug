import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Button, Alert } from 'react-bootstrap'

class ApplyPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "name": '',
            "email": '',
            "school": "",
            "question1": "",
            "question2": "",
            "question3": "",
            "gender": "",
            "race": "",
            "tshirt": "",
            "github": "",
            "cv": "",
            "cvBox": false,
            "success": "none",
            "fail": "none",
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(event) {
        let tag = event.target.name;
        if (tag === "cvBox") {
            this.setState({ [tag]: !this.state.tag });
        } else {
            this.setState({ [tag]: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let toSend = {};
        let keys = Object.keys(this.state);
        for (var keyIndex in keys) {
            var val = keys[keyIndex];
            if (val !== "fail" && val !== "success") {
                console.log(this.state[val]);
                toSend[val] = this.state[val];
            }
        }
        fetch("https://europe-west2-hack-the-plug.cloudfunctions.net/receiveApplicant", {
            method: 'POST',
            body: JSON.stringify(toSend),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'https://hacktheplug.tech'
            }
        }).then((response) => {
            if (response.status === 200) {
                this.setState({ "success": "inline" });
                this.setState({ "fail": "none" });
            } else {
                this.setState({ "fail": "inline" });
                this.setState({ "success": "none" });
            }

        }).catch((error) => {
            console.log(error);
            this.setState({ "fail": "inline" });
        });
    }

    render() {
        return (
            <Layout>
                <SEO title="Apply" />
                <h1>Apply for Hack The Plug</h1>
                <h1 style={{color: 'red'}}>WEBSITE UNDER CONTRUCTION, SUBMITTED APPLICATIONS WILL NOT BE READ OR CONSIDERED</h1>
                <Form onSubmit={this.handleSubmit}>
                    <h3>About You</h3>
                    <Form.Group controlId="name">
                        <Form.Label>What is your name?</Form.Label>
                        <Form.Control type="text" placeholder="Bart Simpson" name="name" onChange={this.handleUpdate} required/>
                    </Form.Group>
                    <Form.Group controlId="email" >
                        <Form.Label>What is your email address?</Form.Label>
                        <Form.Control type="email" placeholder="eat@myshorts.com" name="email" onChange={this.handleUpdate} required/>
                    </Form.Group>
                    <Form.Group controlId="school">
                        <Form.Label>What school do you attend?</Form.Label>
                        <Form.Control type="text" placeholder="Springfield Elementary" name="school" onChange={this.handleUpdate} required/>
                    </Form.Group>
                    <Form.Group controlId="question1" >
                        <Form.Label>Why do you want to attend Hack The Plug?</Form.Label>
                        <Form.Control as="textarea" name="question1" onChange={this.handleUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="question2" >
                        <Form.Label>What's the coolest project you've built?</Form.Label>
                        <Form.Control as="textarea" name="question2" onChange={this.handleUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="question3">
                        <Form.Label>What do you hack for?</Form.Label>
                        <Form.Control as="textarea" name="question3" onChange={this.handleUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="github">
                        <Form.Label>Github Link</Form.Label>
                        <Form.Control type="text" name="github" placeholder="github.com/torvalds" onChange={this.handleUpdate}></Form.Control>
                    </Form.Group>
                    <h3>Demographics</h3>
                    <Form.Group controlId="gender">
                        <Form.Label>What gender are you?</Form.Label>
                        <Form.Control as="select" name="gender" onChange={this.handleUpdate} required>
                            <option>Please select</option>
                            <option>M</option>
                            <option>F</option>
                            <option>Prefer not to say</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="race">
                        <Form.Label>What race/ethnicity are you?</Form.Label>
                        <Form.Control type="text" name="race" onChange={this.handleUpdate} required />
                    </Form.Group>
                    <h3>Swag</h3>
                    <Form.Group controlId="tshirtSelect">
                        <Form.Label>What T-Shirt size do you wear?</Form.Label>
                        <Form.Control as="select" name="tshirt" onChange={this.handleUpdate} required>
                            <option>Please Select</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </Form.Control>
                    </Form.Group>
                    <h3>CV/Resume</h3>
                    <Form.Group controlId="cvUpload">
                        <Form.Label>CV/Resume Link</Form.Label>
                        <Form.Control type="text" name="cv" onChange={this.handleUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="cvShare">
                        <Form.Check name="cvBox" type="checkbox" label="Tick to confirm you are happy for us to share your CV with recruiters" onChange={this.handleUpdate} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Alert key={"successAlert"} variant='success' style={{ "display": this.state.success }}>
                    Submitted sucessfully
                </Alert>
                <Alert key={"failAlert"} variant='danger' style={{ "display": this.state.fail }}>
                    Application Failed
                </Alert>
                <div style={{ "paddingBottom": "5em" }}></div>
            </Layout>
        )
    }
}

export default ApplyPage