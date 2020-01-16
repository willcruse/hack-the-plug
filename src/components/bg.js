import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Image from './image'
import About from '../components/about'
import BackgroundImage from 'gatsby-background-image'
import { Form, Button } from "react-bootstrap";

const BackgroundSection = ({ className }) => (

  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg3.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      console.log(data)
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >

          <Image style ={{
            top: '10px',
            left: '7%',
            maxWidth: '30%',
            minWidth: '280px',
            maxHeight: 'auto'
          }}></Image>

          <p style={{
            textAlign: "center",
            minWidth: "70%",
            maxWidth: "70%",
            marginLeft: "15%",
            backgroundColor: "rgba(255, 249, 240, 0.7)",
            padding: 20,
            borderRadius: 5,
            fontSize: "calc(10px + 1.5vw)"
          }}>A 24 hour Hackathon at <a style={{fontWeight: "bold"}}>the University of Bath</a><br />
          <a style={{fontWeight: 300, fontSize: "70%", color: "rgb(28, 28, 28)"}}>28th-29th of March 2020</a></p>

        </BackgroundImage>
      )
    }}
  />
)
// export default BackgroundSection;
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  overflow: hidden;
  height: 100vh;
  margin-top: 0px;
  z-index: -1;
  background-position: bottom;
  background-repeat: repeat-y;
  background-size: cover;`
export default StyledBackgroundSection
