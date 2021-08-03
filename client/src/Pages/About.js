import React, { useState } from "react";
import Nav from "../Components/Nav";
import "../Css/About.css";
import Footer from "../Components/Footer";
function About() {
  const options = [
    "This is Merchandise Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio",
    "This is Donate us Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio",
    "This is Keep in Touch Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio"
  ];
  const [state, setState] = useState(options[1]);
  return (
    <div className="about">
      <Nav />

      <div className="container_first">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          illum nostrum quaerat debitis dolores, suscipit obcaecati accusantium
          ad eligendi explicabo!
        </div>
        <div>
          <img src="https://dummyimage.com/600x400/c712c7/fff" alt="" />
        </div>
      </div>
      <div className="container_second">
        <div className="grp">
          <div
            onClick={() => {
              setState(options[1]);
            }}
          >
            Donate
          </div>
          <div
            onClick={() => {
              setState(options[0]);
            }}
          >
            Merchandise
          </div>
          <div
            onClick={() => {
              setState(options[2]);
            }}
          >
            Keep in Touch
          </div>
        </div>

        <div className="show">{state}</div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
