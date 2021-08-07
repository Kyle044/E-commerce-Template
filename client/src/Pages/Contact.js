import React from "react";
import Nav from "../Components/Nav";
import "../Css/Contact.css";
import ContactSupportTwoToneIcon from "@material-ui/icons/ContactSupportTwoTone";
import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import EmojiPeopleTwoToneIcon from "@material-ui/icons/EmojiPeopleTwoTone";
import Footer from "../Components/Footer";
function Contact() {
  return (
    <div>
      <Nav />
      <header className="header">
        <h3 className="text-xl mb-5">Contact us</h3>
        <p>Get in touch and let us know how we can help.</p>
      </header>
      <div className="containerContact">
        <div className="card">
          <MonetizationOnTwoToneIcon style={{ fontSize: 40 }} />
          <h4>Sales</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            eos.
          </p>
        </div>
        <div className="card">
          <ContactSupportTwoToneIcon style={{ fontSize: 40 }} />
          <h4>Help & Support</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            eos.
          </p>
        </div>
        <div className="card">
          <EmojiPeopleTwoToneIcon style={{ fontSize: 40 }} />
          <h4>Press</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            eos.
          </p>
        </div>
      </div>

      <div className="office">
        <h1>Offices</h1>

        <div className="col-container">
          <div className="shet">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="439"
                  height="359"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Carmona&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>

                <br />
              </div>
            </div>
          </div>
          <div className="shet2">
            <h2>Philippines</h2>
            <p>Address : Phase 11 Blk 10 lot 6 Carmona Estates</p>
            <p>Phone Number : 09562516297</p>
            <p>Email : Kylegwapo04@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
