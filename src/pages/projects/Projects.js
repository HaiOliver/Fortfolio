import React, { Component } from "react";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cella from "../../components/placehoder/Cella-component";
import Shackfolio from "../../components/placehoder/shackfolio-component";
import OneOcean from "../../components/placehoder/oneOcean-component.js";
import JOS from "../../components/placehoder/jos-component";

// list of projects I did

class Projects extends Component {
  render() {
    // ====================================================================

    // ====================================================================

    const theme = this.props.theme;

    return (
      <div className="projects-main">
        {/* <Header theme={theme} /> */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              {/* <div className="projects-heading-img-div">


              </div> */}
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* start my personal project */}

        <div>
          <Container class="container-project">
            {/* ======================================================================================= */}
            {/* OneOcean */}
            <Row style={{ marginTop: "100px", marginBottom: "250px" }}>
              <Col sm>
                {/* project go here */}
                <OneOcean />
              </Col>
            </Row>
            {/* Shackfolio */}
            <Row style={{ marginTop: "100px", marginBottom: "250px" }}>
              <Col sm>
                {/* project go here */}
                <Shackfolio />
              </Col>
            </Row>

            {/* JOS */}
            <Row style={{ marginBottom: "200px" }}>
              <Col sm>
                {/* project go here */}
                <JOS />
              </Col>
            </Row>

            {/* Cella */}
            <Row style={{ marginTop: "100px", marginBottom: "450px" }}>
              <Col sm>
                {/* project go here */}
                <Cella />
              </Col>
            </Row>

            {/* ======================================================================================= */}
          </Container>
        </div>
      </div>
    );
  }
}

export default Projects;
