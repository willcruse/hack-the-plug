import React from "react"

const QA = (props) => {
    return (<div style={{
      backgroundColor: "rgba(166, 166, 166, 0.1)",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5
    }}>
        <h4>{props.question}</h4>
        <p>{props.ans}</p>
    </div>)
}

export default QA
