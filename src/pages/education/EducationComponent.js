import React, { Component } from "react";

import Educations from "../../containers/education/Educations";

import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import image from '../../assests/images/education.png'

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        {/* <Header theme={this.props.theme} /> */}
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
              <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text,textAlign:"center", fontSize:"90px" }}>
                  Education
                </h1>
                <img src={image} style={{height:"300px"}}/>

              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />

        </div>

      </div>
    );
  }
}

export default Education;
