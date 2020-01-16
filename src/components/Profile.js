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
                    height: "auto",
                    width: "80%",
                    minWidth: '50px',
                    padding: "0%",
                    backgroundColor: 'rgb(255, 255, 255, 0)'
                }}>
                    <ProfileImages pers={this.props.pers}/>
                    <h3 style={{
                      fontSize: "calc(6px + 1vw)",
                      marginBottom: '0px',
                      textAlign: 'center'
                    }}>{details[this.props.pers].name}</h3>
                    <h4 style={{
                      fontSize: "calc(4px + 1vw)",
                      fontWeight: 300,
                      textAlign: 'center'
                    }}>{details[this.props.pers].role}</h4>
                </Jumbotron>
            </div>
        );
    }
}

export default Profile;
