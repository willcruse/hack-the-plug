import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */


const ProfileImages = (props) => {

      var data = useStaticQuery(graphql`
      query {
        willImage: file(relativePath: { eq: "willPic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jamesImage: file(relativePath: { eq: "jamesPic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oliverImage: file(relativePath: { eq: "oliverPic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        awenImage: file(relativePath: { eq: "awenPic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        edImage: file(relativePath: { eq: "edPic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        arthurImage: file(relativePath: { eq: "arthurPic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    switch (props.pers) {
      case "will":
        return (<Img fluid={data.willImage.childImageSharp.fluid} />);
        break;
      case "james":
        return (<Img fluid={data.jamesImage.childImageSharp.fluid} />);
        break;
      case "ollie":
        return (<Img fluid={data.oliverImage.childImageSharp.fluid} />);
        break;
      case "awen":
        return (<Img fluid={data.awenImage.childImageSharp.fluid} />);
        break;
      case "ed":
        return (<Img fluid={data.edImage.childImageSharp.fluid} />);
        break;
      case "arthur":
        return (<Img fluid={data.arthurImage.childImageSharp.fluid} />);
        break;
      default:
        return (<h1>Error</h1>);
        break;
 }
}
export default ProfileImages;
