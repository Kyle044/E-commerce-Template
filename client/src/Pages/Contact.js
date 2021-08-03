import React from "react";
import Nav from "../Components/Nav";
import "../Css/Contact.css";
function Contact() {
  return (
    <div>
      <Nav />
      <header className="header">
        <h3>Contact us</h3>
        <p>Get in touch and let us know how we can help.</p>
      </header>
      <div className="containerContact">
        <div className="card">
          <div className="circle"></div>
          <h4>Sales</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            eos.
          </p>
        </div>
        <div className="card">
          <div className="circle"></div>
          <h4>Help & Support</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            eos.
          </p>
        </div>
        <div className="card">
          <div className="circle"></div>
          <h4>Press</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            eos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
