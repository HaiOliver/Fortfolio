import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tilt from 'react-parallax-tilt';
import './shackfolio.scss'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Shackfolio = (props) => {

      return (
        <Tilt className="parallax-effect" perspective={500} >

            <div className="inner-element" >
                <div className="div-shackfolio">
                  <i class="fab fa-laravel" fa-lg style={{color: "orange", marginRight:"10px"}}></i>
                  <i className="fab fa-php fa-lg" style={{color: "blue", marginRight:"10px"}}></i>
                  <i className="fab fa-react fa-lg" style={{color: "blue", marginRight:"10px"}}></i>
                  <i className="fab fa-js-square fa-lg" style={{color: "orange", marginRight:"10px"}}></i>
                  <i class="fas fa-database" fa-lg style={{color: "gray", marginRight:"10px"}}></i>

                </div>

                <div style={{marginBottom:"10px"}}>
                        <a href="http://shackfolio.com/" style={{textDecoration:'none'}}>http://shackfolio.com</a>

                </div>
                <div>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5>
                </div>

            </div>

        </Tilt>


      );
    };

export default Shackfolio;