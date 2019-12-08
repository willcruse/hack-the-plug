import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Image from './image'
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

          <Button variant="primary" type="submit" size="lg" style={{
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            minWidth: '20%',
            minHeight: '50px'
          }}>
              Pre-Register
          </Button>

        </BackgroundImage>
      )
    }}
  />
)
// export default BackgroundSection;
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  margin-top: -50px;
  z-index: -1;
  background-position: bottom;
  background-repeat: repeat-y;
  background-size: cover;`
export default StyledBackgroundSection
