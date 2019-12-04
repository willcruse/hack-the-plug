import React from "react";
import QA from "../components/qa"


class FAQs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="FAQs">
                <h1>FAQs</h1>
                <QA question="When is Hack The Plug?" ans="Hack The Plug will be held from the 28th to the 29th of March 2020" />
                <QA question="Will you provide travel reimbusment?" ans="We aim to provide travel reimbursement" />
                <QA question="How much does Hack the Plug cost to attend?" ans="Hack the Plug is completely free to attend!" />
            </div>
        );
    }

}

export default FAQs;