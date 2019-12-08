import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/about'
import Team from "../components/Team"
import FAQs from "../components/FAQs"
import About from "../components/about"

const IndexPage = () => (
  <Layout main={true}>
    <SEO title="Home" />
    <About />
    <Team />
    <FAQs />
    <div id="Sponsor">
      <h1>Interested in sponsoring Hack The Plug?</h1>
      <p>Please email <b>hacktheplug@gmail.com</b> to discuss sponsorship</p>
    </div>
  </Layout>
)

export default IndexPage
