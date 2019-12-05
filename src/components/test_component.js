import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (

  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
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
          
        </BackgroundImage>
      )
    }}
  />
)
// export default BackgroundSection;
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 500px;
  background-position: bottom;
  background-repeat: repeat-y;
  background-size: cover;`
export default StyledBackgroundSection
