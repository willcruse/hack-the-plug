import React from "react"
import ProfileImages  from "./profileImages";
import { Jumbotron } from "react-bootstrap";

const details = {
    "will": {
        "name": "Will Cruse",
        "role": "Lead Organiser",
    },
    "james": {
        "name": "James Elson",
        "role": "Head of Finance",

    },
    "ollie": {
        "name": "Oliver Redeyoff",
        "role": "Sponsor Relations",
    },
    "awen": {
        "name": "Awen Rhys",
        "role": "Social Media Rep",
    },
    "ed": {
        "name": "Edward Gokman",
        "role": "Team Member",
    },
    "arthur": {
        "name": "Arthur Baker",
        "role": "Team Member",
    }
}
class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.pers}>
                <Jumbotron style={{
                    height: 396,
                    width: 225
                }}>
                    <ProfileImages pers={this.props.pers} />
                    <h3>{details[this.props.pers].name}</h3>
                    <h4>{details[this.props.pers].role}</h4>
                </Jumbotron>
            </div>
        );
    }
}

export default Profile;
