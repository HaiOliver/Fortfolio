import React from "react";

import Tilt from "react-parallax-tilt";
import "./oneocean.scss";

const OneOcean = (props) => {
  return (
    <Tilt className="parallax-effect-oneocean" perspective={500}>
      <div className="inner-element">
        <div className="div-shackfolio">
          <i
            class="fab fa-angular"
            fa-lg
            style={{ color: "red", marginRight: "10px" }}
          ></i>
          <i
            className="fab fa-github fa-lg"
            style={{ color: "black", marginRight: "10px" }}
          ></i>
          <i
            className="fab fa-js-square fa-lg"
            style={{ color: "orange", marginRight: "10px" }}
          ></i>
          <i
            class="fas fa-database"
            fa-lg
            style={{ color: "gray", marginRight: "10px" }}
          ></i>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <a
            href="https://r4s.oneocean.com/login"
            style={{ textDecoration: "none" }}
          >
            https://r4s.oneocean.com
          </a>
        </div>
        <div className="text-shackfolio">
          <ul>
            <li>
              Contributed actively over two years within a 6-people team to
              develop Regs4ships, an advanced maritime regulation database. This
              project aimed to facilitate maritime law adherence for vessels,
              assisting their compliance during sea journeys
            </li>
            <li>
              Integrated Flag State compliance records with IMO, ILO, and EU,
              WHO, EU Legislation regulations, resulting in a comprehensive
              regulatory solution.
            </li>
          </ul>
        </div>
      </div>
    </Tilt>
  );
};

export default OneOcean;
