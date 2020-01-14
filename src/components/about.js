import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
        <div id="About" style={{
          marginTop: 50,
          marginBottom: 50,
          backgroundColor: "rgb(255, 249, 240)",
          minWidth: "100%",
          padding: 50
        }}>
          <h1>About Hack the Plug</h1>
          <p>Hack The Plug is a student run, 24 Hour hackathon held at the University of Bath.
          If you haven't heard of this type of event before, it is a 24 hour long event where teams
          compete to create the best project. This requires a whole range of skills including
          team managing, programming and designing.</p>
          <p>So come join us to learn something new, build something cool or even maybe start a company!
          </p>
        </div>)
    }
}

export default About;
