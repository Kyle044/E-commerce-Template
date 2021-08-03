import React from "react";
import "../Css/Footer.css";
import moment from "moment";
function Footer() {
  return (
    <div className="footerContainer">
      <h3>© {moment(new Date()).format("YYYY")} All Rights Reserved</h3>
    </div>
  );
}

export default Footer;
