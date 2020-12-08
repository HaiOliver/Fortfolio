import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tilt from 'react-parallax-tilt';
import './cella.scss'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Cella = (props) => {

      return (
        <Tilt className="parallax-effect-cella" perspective={500} >
            <div className="inner-element" >
                <div className="div-cella">

                  <i className="fab fa-js-square fa-lg" style={{color: "orange", marginRight:"10px"}}></i>
                  <i class="fab fa-laravel" fa-lg style={{color: "orange", marginRight:"10px"}}></i>
                  <i className="fab fa-php fa-lg" fa-lg style={{color: "blue", marginRight:"10px"}}></i>
                  <i class="fas fa-database" fa-lg style={{color: "gray", marginRight:"10px"}}></i>
                  <i class="fab fa-css3-alt" fa-lg style={{color: "orange", marginRight:"10px"}}></i>
                </div>

                <div style={{marginBottom:"10px"}}>
                        <a href="https://www.thecela.com/" style={{textDecoration:'none'}}>https://www.thecela.com/</a>

                </div>
                <div className="text-cella">



                  <ul>

                      <li>
                      Technologies used:  PHP, JavaScript, Laravel, CSS, HTML, MySQL.
                      </li>
                      <li>
                      Assisted with the transition from a waterfall method to the more efficient Agile methodology.
                      </li>
                      <li>Created new features, functionality, and capabilities on Ecommerce sites using advanced CSS, JavaScript and modern libraries.</li>
                  </ul>


</div>

            </div>

        </Tilt>


      );
    };

export default Cella;