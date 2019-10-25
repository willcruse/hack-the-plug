import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Button } from 'react-bootstrap'
import { forEach } from "iterall";
class IndexPage extends React.Component {

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
            "tshirt": ""
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(event) {
        let tag = event.target.name;
        console.log(tag);
        this.setState({ [tag]: event.target.value });
    }

    handleSubmit(event) {
        for (var key in this.state) {
            if (this.state.key === "") {
                console.log("Empty")
            }
        }
        console.log(this.state);
        //TODO Send to Server
        event.preventDefault();
    }

    render() {
        return (
            <Layout>
                <SEO title="Apply" />
                <h1>Apply for Hack The Plug</h1>
                <Form onSubmit={this.handleSubmit}>
                    <h3>About You</h3>
                    <Form.Group controlId="name">
                        <Form.Label>What is your name?</Form.Label>
                        <Form.Control type="text" placeholder="Bart Simpson" name="name" onChange={this.handleUpdate} />
                    </Form.Group>
                    <Form.Group controlId="email" >
                        <Form.Label>What is your email address?</Form.Label>
                        <Form.Control type="email" placeholder="eat@myshorts.com" name="email" onChange={this.handleUpdate} />
                    </Form.Group>
                    <Form.Group controlId="school">
                        <Form.Label>What school do you attend?</Form.Label>
                        <Form.Control type="text" placeholder="Springfield Elementary" name="school" onChange={this.handleUpdate} />
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
                    <h3>Demographics</h3>
                    <Form.Group controlId="gender">
                        <Form.Label>What gender are you?</Form.Label>
                        <Form.Control as="select" name="gender" onChange={this.handleUpdate}>
                            <option>Please select</option>
                            <option>M</option>
                            <option>F</option>
                            <option>Prefer not to say</option>                    
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="race">
                        <Form.Label>What race/ethnicity are you?</Form.Label>
                        <Form.Control type="text" name="race" onChange={this.handleUpdate}/>
                    </Form.Group>
                    <h3>Swag</h3>
                    <Form.Group controlId="tshirtSelect">
                        <Form.Label>What T-Shirt size do you wear?</Form.Label>
                        <Form.Control as="select" name="tshirt" onChange={this.handleUpdate}>
                            <option>Please Select</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Layout>
        )
    }
}

export default IndexPage

const styles = {
    "formItem": {
        // "paddingTop": "0.5em"
    }
}
