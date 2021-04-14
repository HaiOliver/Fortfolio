import React from 'react';
import Tilt from 'react-parallax-tilt';
import './cella.scss'


const Cella = (props) => {

      return (
        <Tilt className="parallax-effect-cella" perspective={500} >
            <div className="inner-element" >
                <div className="div-cella">
                  <i className="fab fa-python" style={{color: "green", marginRight:"10px"}}></i>
                  <i className="fab fa-google-drive" fa-lg style={{color: "blue", marginRight:"10px"}}></i>
                  <i className="fab fa-stack-overflow" fa-lg style={{color: "blue", marginRight:"10px"}}></i>
                  <i className="fab fa-google" fa-lg style={{color: "gray", marginRight:"10px"}}></i>
                  <i className="fas fa-vr-cardboard" fa-lg style={{color: "orange", marginRight:"10px"}}></i>

                </div>
                <div style={{marginBottom:"10px"}}>
                        <a href="#" style={{textDecoration:'none'}}>Machine Learning Model</a>

                </div>
                <div className="text-cella">
                  <ul>
                      <li>
                      Self-taught: Tensorflow, Keras, Numpy, Pandas, Scikit-Learn, Matplotlib.
                      </li>
                      <li> IDE used: Google Colab.</li>
                      <li>
                      Data: 10.000 dog images on each training and testing data set on Kaggle.
                      </li>
                      <li>Model: build-in model ResNet V2 50 in TensorFlow Hub.</li>
                      <li>Built a model that can able to identify 120 different dog breeds. </li>
                  </ul>


</div>

            </div>

        </Tilt>


      );
    };

export default Cella;