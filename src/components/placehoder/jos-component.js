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
                <div style={{fontSize:"20px", textAlign:"left"}}>



                    <ul>
                        <li>
                          Building an beautiful UI/UX fullstack website app using React and Node.js, MySql.
                        </li>

                        <li>Check code, improve code and enhance the functionality and user experience of web applications.</li>
                  </ul>


</div>

            </div>

        </Tilt>


      );
    };

export default JOS;