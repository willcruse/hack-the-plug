import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Image from './image'
import About from '../components/about'
import BackgroundImage from 'gatsby-background-image'
import { Form, Button, Alert } from "react-bootstrap";

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
          <Alert variant="danger" style={{
            textAlign: "center",
            minWidth: "70%",
            maxWidth: "70%",
            marginLeft: "15%",
            backgroundColor: "rgba(255, 249, 240, 0.7)",
            padding: 20,
            borderRadius: 5,
            fontSize: "calc(10px + 1.5vw)"
          }}>
          Due to COVID-19 we have had to cancel HackThePlug 2020
          </Alert>

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
