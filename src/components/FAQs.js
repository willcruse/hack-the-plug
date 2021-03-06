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
                <QA question="When is Hack The Plug?" ans="Hack The Plug will be held from the 28th to the 29th of March 2020." />
                <QA question="When will applications open/close?" ans="Registration will open soon!" />
                <QA question="Will you provide travel reimbusment?" ans="Unfortunately we will no be able to provide travel reimbursement this year" />
                <QA question="How much does Hack the Plug cost to attend?" ans="Hack the Plug is completely free to attend! Additionaly we will provide food and drink during the event for free!" />
                <QA question="How much experience do I need to attend?" ans="Students with any experience level are welcome to apply! We want to make the event enjoyable for beginners and seasoned pros alike." />
                <QA question="How many people can be in our team?" ans="Accepted team sizes are 1 to 4 people. If you don't have a team no need to worry, we will find you a group on the day of the event!" />
                <p style={{
                  marginTop: 20
                }}>Any other questions about hacktheplug? Please feel free to email us at <a style={{fontWeight: 'bold'}}>hacktheplug@gmail.com</a></p>
            </div>
        );
    }

}

export default FAQs;
