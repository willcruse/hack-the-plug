import React from "react"

const message = (success, color, text) => {
    return (
        <h1 style={{'color': {color}, display: success}}><strong>{text}</strong></h1>
    )
}

export default message;