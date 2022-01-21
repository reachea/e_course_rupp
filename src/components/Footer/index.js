import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./Footer.styled";

import FooterLogo from "../../assets/footer_logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <img src={FooterLogo} />

        <div className="row">
          <div className="col-md-6">
            <p>
              BuildSkill website is the online course study that all video is
              teaching in khmer language. There are many courses in this website
              such as: HTML, CSS, Java, C, C++, Autocad, Photoshop and many
              others more.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <p>Quicklinks</p>

                <ul className="footer-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <p>Contact Us</p>

                <ul className="footer-nav">
                  <li>
                    <p>(+855)123456789</p>
                  </li>
                  <li>
                    <p>Info@buildskill.com</p>
                  </li>
                  <li>
                    <p>RUPP-STEM (ROOM: 302)</p>
                  </li>
                  <li>
                    <p>Phnom Penh, Cambodia</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
