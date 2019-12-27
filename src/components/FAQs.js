import React from "react";
import QA from "../components/qa";


class FAQs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="FAQs" style={{
              marginTop: 50,
              marginBottom: 50,
              backgroundColor: "rgb(249, 255, 240)",
              minWidth: "100%",
              padding: 50
            }}>
                <h1 style={{
                  marginBottom: 30
                }}>FAQs</h1>
                <QA question="When is Hack The Plug?" ans="Hack The Plug will be held from the 28th to the 29th of March 2020" />
                <QA question="When will applications open/close?" ans="Applications will open on the 1st of January and close on the 1st of March" />
                <QA question="Will you provide travel reimbusment?" ans="We aim to provide travel reimbursement" />
                <QA question="How much does Hack the Plug cost to attend?" ans="Hack the Plug is completely free to attend! We will provide food and drink during the event so no need to worry about that." />
            </div>
        );
    }

}

export default FAQs;
