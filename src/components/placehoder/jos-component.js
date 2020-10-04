import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tilt from 'react-parallax-tilt';
import './jos.scss'


const JOS = (props) => {

      return (
        <Tilt className="parallax-effect-jos" perspective={500} >


          <div className="inner-element" >
                <div className="div-jos">
                  <i className="fab fa-react fa-lg" style={{color: "blue", marginRight:"10px"}}></i>
                  <i className="fab fa-node fa-lg" style={{color: "green", marginRight:"10px"}}></i>
                  <i className="fab fa-js-square fa-lg" style={{color: "orange", marginRight:"10px"}}></i>

                  <i class="fab fa-aws" fa-lg style={{color: "blue", marginRight:"10px"}}></i>
                  <i class="fab fa-css3-alt" fa-lg style={{color: "orange", marginRight:"10px"}}></i>
                </div>

                <div style={{marginBottom:"10px"}}>
                        <a href="#" style={{textDecoration:'none'}}>Coming soon...</a>

                </div>
                <div>
                        <h5> An nice-looking UI, rich content Web Application for JOS community, I am in charge to design and build robust content in front end team.   </h5>
                </div>

            </div>

        </Tilt>


      );
    };

export default JOS;