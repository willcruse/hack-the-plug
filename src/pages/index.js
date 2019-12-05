import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/test_component"
import '../components/about'
import Team from "../components/Team"
import FAQs from "../components/FAQs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="About">
        <h1>About Hack the Plug</h1>
        <p>
          Hack The Plug is a student run, 24 Hour hackathon held at the University of Bath. Come join us to learn something new, build something cool or start a company!
        </p>
    </div>
    <Team />
    <FAQs />
    <div id="Sponsor">
      <h1>Interested in sponsoring Hack The Plug?</h1>
      <p>Please email <b>hacktheplug@gmail.com</b> to discuss sponsorship</p>
    </div>
  </Layout>
)

export default IndexPage
