import React from "react";
import Zynstra from "../images/zynstra.png"
import Bath from "../images/bath_logo.png"
import NetCompany from "../images/netcompany.png"

class Sponsors extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
    return (
            <div id="Sponsors" style={{
              marginTop: 50,
              marginBottom: 50,
              backgroundColor: "rgb(240, 250, 255)",
              minWidth: "100%",
              padding: 50,
              paddingLeft: 0,
              paddingRight: 0
            }}>
              <h1 style={{
                marginLeft: 50,
                marginBottom: 30
              }}>Sponsors</h1>
              <div>
                <img src={Zynstra} style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "30%",
                  minWidth: 100,
                  marginBottom: 50
                }}/>
                <img src={Bath} style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "30%",
                  minWidth: 100,
                  marginBottom: 50
                }}/>
              </div>
            </div>
        );
}
}

export default Sponsors;
