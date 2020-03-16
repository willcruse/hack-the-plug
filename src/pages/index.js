import React from "react"
import {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import '../components/about'
import Sponsors from "../components/Sponsors"
import Team from "../components/Team"
import FAQs from "../components/FAQs"
import About from "../components/about"
import { Alert } from "react-bootstrap";
import Timetable from "../components/timetable"

const IndexPage = () => {
  const [input, setInput] = useState('');
  const [reg, setReg] = useState(false);

return (
  <Layout main={true}>
    <SEO title="Home" />
    
    <About />
    <Sponsors />
    <Timetable/>
    <Team />
    <FAQs />
    <div id="Sponsor" style={{
      marginTop: 50,
      marginBottom: 50,
      backgroundColor: "rgb(240, 250, 255)",
      minWidth: "100%",
      padding: 50
    }}>
      <h1>Interested in sponsoring Hack The Plug?</h1>
      <p>Please email <b>hacktheplug@gmail.com</b> to discuss sponsorship</p>
    </div>
  </Layout>
)
  }
export default IndexPage
