import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Education from '../education/EducationComponent';
import Experience from '../experience/Experience';
import Projects from '../projects/Projects';
import ChartSkill from '../../components/chart/chart';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const data = [
  {
    "id": "React",
    "label": "React",
    "value": 25,
    "color": "hsl(226, 70%, 50%)"
  },  {
    "id": "Flutter",
    "label": "Flutter",
    "value": 5,
    "color": "hsl(159, 70%, 50%)"
  },
  {
    "id": "JavaScript",
    "label": "JavaScript",
    "value": 15,
    "color": "hsl(33, 70%, 50%)"
  },


  {
    "id": "Node.js",
    "label": "Node.js",
    "value": 5,
    "color": "hsl(159, 70%, 50%)"
  }
  ,
  {
    "id": "MySql",
    "label": "MySql ",
    "value": 10,
    "color": "hsl(159, 70%, 50%)"
  }
  ,{
    "id": "MongoDB",
    "label": "MongoDB",
    "value": 5,
    "color": "hsl(159, 70%, 50%)"
  } , {
    "id": "Python",
    "label": "Python",
    "value": 15,
    "color": "hsl(182, 70%, 50%)"
  },

  {
    "id": "PhP",
    "label": "PhP",
    "value": 5,
    "color": "hsl(159, 70%, 50%)"
  }
  ,

  {
    "id": "Swift",
    "label": "Swift",
    "value": 5,
    "color": "hsl(159, 70%, 50%)"
  },  {
    "id": "Css",
    "label": "css",
    "value": 10,
    "color": "hsl(59, 70%, 50%)"
  },
  {
    "id": "Machine Learning",
    "label": "ML",
    "value": 5,
    "color": "hsl(159, 70%, 50%)"
  },
  {
    "id": "Dot.Net ",
    "label": "Dot.Net",
    "value": 5,
    "color": "hsl(159, 70%, 50%)"
  }
]

class Home extends Component {
  render() {

    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        {/* skill */}
        <Skills theme={this.props.theme} />
        {/* show summary skill */}
        <Container >
          <h1 lg= {true} style={{textAlign:"center", fontSize:"80px"}}>Summary my tech skills:</h1>
          <Row style={{height:"700px",width:"auto"}}>

            <ChartSkill data={data}/>

          </Row>


        </Container >
        <Container style={{marginTop:"auto" }}>
        <h3 style={{textAlign:"center", fontSize:"60px",marginBottom:"30px"}}>Skills, Languages & Technologies</h3>

        <Row >

          <Col sm style={{fontSize:"20px", lineHeight:"50px"}}>
              <h1>Advanced</h1>
              <ul className="d-flex flex-column">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Css</li>
                  <li>Python</li>
                  <li>Redux</li>

              </ul>
          </Col>
          <Col sm style={{fontSize:"20px", lineHeight:"50px"}}>
          <h1>Good</h1>
              <ul className="d-flex flex-column">
                  <li>MySql</li>
                  <li>MongoDB</li>
                  <li>Node.js</li>
                  <li>PhP</li>
                  <li>Laravel</li>
                  <li>Flutter</li>
                  <li>Dot.Net</li>
                  <li>PWA</li>
              </ul>
          </Col>
          <Col sm style={{fontSize:"20px", lineHeight:"50px"}}>
          <h1>Good enough</h1>
              <ul className="d-flex flex-column">
                  <li>Machine Learning</li>
                  <li>Azure</li>
                  <li>Docker</li>
                  <li>Swift</li>
                  <li>AWS</li>

              </ul>


          </Col>
          </Row>
        </Container>
        {/* project */}
        <Projects theme={this.props.theme}/>
        {/* experience */}
        <Experience theme={this.props.theme}/>
        {/* education */}
        <Education theme={this.props.theme}/>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
