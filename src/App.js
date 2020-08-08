import React from "react";
import "./app.css";
import { Row, Col } from "react-flexbox-grid";
import About from "./Components/About/About";
import Skills from "./Components/Skill/Skills";
import Github from "./Components/Github/Github";
import Header from "./Components/Layout/Header";
import Banner from "./Components/Layout/Banner/Banner";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Layout/Footer";
// import SideNav from "./Components/Layout/Navbar/SideNav";
import { ScrollProvider } from "./Context/scroll";
// import { isMobile } from "react-device-detect";
function App() {
  return (
    <ScrollProvider>
      <div className="wrapper">
        <Header />
        <Row>
          <Col lg={12} xs={12}>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Github />
            <Experience />
            <Contact />
          </Col>
        </Row>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App;
