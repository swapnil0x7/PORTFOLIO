import React from "react";
import "./App.css";
import MyNavbar from "./components/myNavBar/mynavbar.component";
import MyCarousal from "./components/myCarousal/mycarousal.component";
import TitleMessage from "./components/TitleMessage/titlemessage.components";
import About from "./pages/about/about.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/project-timeline/projects-timeline.component";
import Skills from "./pages/skills/skills.component";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import ContactForm from "./components/contact-form/contact-form.component"
const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <About />
      <div>
        <Container className="container-box rounded">
          <Skills />
        </Container>

        <Container className="container-box rounded">
          <Fade bottom duration={500}>
            <hr />
            <TimeLine />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />
            <ContactForm />
          </Slide>
        </Container>
      </div>
    </div>
  );
};

export default App;
