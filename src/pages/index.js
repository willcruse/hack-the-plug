import React from "react"
import {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import '../components/about'
import Sponsors from "../components/Sponsors"
import Team from "../components/Team"
import FAQs from "../components/FAQs"
import About from "../components/about"
import { Form, Button } from "react-bootstrap";
import Timetable from "../components/timetable"

const IndexPage = () => {
  const [input, setInput] = useState('');
  const [reg, setReg] = useState(false);

// const preRegHandler = (event) => {
//   event.preventDefault();
//   fetch("https://europe-west1-hack-the-plug.cloudfunctions.net/preregister", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({email: input})
//   }
//   ).then((response) => {
//     return response.text();
//   }).then((text) => {
//     if (text === 'success') {
//         setReg(true);
//     } else {
//       setInput("Error in Registration");
//     }
//   });
// };


return (
  <Layout main={true}>
    <SEO title="Home" />
    <div style={{
      marginTop: 50,
      marginBottom: 50,
      backgroundColor: "rgb(240, 250, 255)",
      textAlign: 'center',
      padding: '50px'
    }}>
      <h1>Registrations are now open!</h1>
      <Button variant="primary" size="lg" href="https://www.eventbrite.com/e/hacktheplug-tickets-97295799355?aff=web" style={{
        marginTop: 20
      }}>
      Register
      </Button>
    </div>
    {/*<div style={{*/}
    {/*  marginTop: 50,*/}
    {/*  marginBottom: 50,*/}
    {/*  backgroundColor: "rgb(240, 250, 255)",*/}
    {/*  textAlign: 'center',*/}
    {/*  padding: '50px'*/}
    {/*}}>{reg ? <h1>Pre-registered!</h1> : (<div>*/}
    {/*  <h1 style={{*/}
    {/*    textAlign: 'left'*/}
    {/*  }}>Pre-register</h1>*/}
    {/*  <p style={{*/}
    {/*    textAlign: 'left'*/}
    {/*  }}>We will send you an email to let you know when registration opens and any other relevent updates.</p>*/}
    {/*  <input type="text" placeholder="Email address" onInput={e => setInput(e.target.value)}*/}
    {/*  value={input}*/}
    {/*  style={{*/}
    {/*    display: 'inline-block;',*/}
    {/*    minWidth: '20%',*/}
    {/*    minHeight: '50px',*/}
    {/*    borderLeft: '0px solid black',*/}
    {/*    borderTop: '0px solid black',*/}
    {/*    borderRight: '0px solid black',*/}
    {/*    borderBottom: '1px solid black',*/}
    {/*    backgroundColor: "rgb(240, 250, 255)",*/}
    {/*    textAlign: 'center',*/}
    {/*    fontSize: '16px',*/}
    {/*    marginRight: 'auto',*/}
    {/*    marginLeft: 'auto',*/}
    {/*    marginTop: '20px',*/}
    {/*    marginBottom: '20px'*/}
    {/*  }}/>*/}
    {/*  <Button variant="primary" size="lg" style={{*/}
    {/*    display: 'inline-block;',*/}
    {/*    minWidth: '20%',*/}
    {/*    minHeight: '50px',*/}
    {/*    marginTop: '-7px',*/}
    {/*    marginLeft: '20px',*/}
    {/*    marginRight: '20px',*/}
    {/*  }} onClick={preRegHandler}>*/}
    {/*      Pre-Register*/}
    {/*</Button></div>)}*/}
    {/*</div>*/}

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
