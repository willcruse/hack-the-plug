import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/about'
import QA from "../components/qa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="About">
        <h1>About Hack the Plug</h1>
        <p>
          Hack The Plug is a student run, 24 Hour hackathon held at the University of Bath. Come join us to learn something new, build something cool or start a company!
        </p>
    </div>
    <div id="FAQs">
      <h1>FAQs</h1>
      <QA question="Will you provide travel reimbusment?" ans="We aim to allocate travel up to £50 for those inside the UK and up to £300 for those outside the UK" />
      <QA question="How much does Hack the Plug cost to attend?" ans="Hack the Plug is completly free to attend!" />
    </div>
  </Layout>
)

export default IndexPage
