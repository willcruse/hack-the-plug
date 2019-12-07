import {
    Link
} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import Links from "./Links"
const Header = (props) => {
        return ( 
          <div id = "header">
            {/* <Row > */}
            <header style = {
                {
                    background: `rgba(0, 0, 0, 0.10)`,
                    maxHeight: `50px`
                        // marginBottom: `1.45rem`
                }
            } >

            {props.main ? <Links/> : <div></div>}
  

            </header> 
            {/* </Row>  */}
            </div>

        )
}

Header.propTypes = {
    main: PropTypes.bool,
}

Header.defaultProps = {
    main: true,
}

export default Header