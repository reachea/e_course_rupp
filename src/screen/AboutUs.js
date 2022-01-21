import { faBookReader, faBriefcase, faMoneyCheck, faPhotoVideo, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AboutUsContainer } from "./AboutUs.styled";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <div className="banner-section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <h3 style={{ color: "#FBD15B" }}>
                BuildSkill is an e-learning platform from RUPP
              </h3>
              <p style={{ color: "#FFFFFF" }}>
                We are at your call, we serve you always
              </p>
              <button className="btn button">Contact Us</button>
            </div>
            <div className="col-md-6">
              <img src="images/about-us-banner.png" className="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="container">
          <h3 className="title" style={{ color: "#5a47ab" }}>
            Our problem statement and project vision
          </h3>
          <p className="title">
            BuildSkill website is the online course provider
          </p>

          <div className="row justify-content-center align-items-center mt-5" style={{ rowGap: "30px" }}>
            <div className="col-md-4 flex-column d-flex justify-content-center align-items-center">
              <div className="icon-box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPhotoVideo} size="1x"></FontAwesomeIcon>
              </div>
              <h4 className="title" style={{ color: "#5a47ab" }}>
                source video and course
              </h4>
              <p className="title">
                student easy to find the source video for study. They know were
                the good place for them to improve their skill.
              </p>
            </div>
            <div className="col-md-4 flex-column d-flex justify-content-center align-items-center">
              <div className="icon-box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBookReader} size="1x"></FontAwesomeIcon>
              </div>
              <h4 className="title" style={{ color: "#5a47ab" }}>
                knowledge
              </h4>
              <p className="title">
                student can improve their knowledge via the website.
              </p>
            </div>
            <div className="col-md-4 flex-column d-flex justify-content-center align-items-center">
              <div className="icon-box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faUsers} size="1x"></FontAwesomeIcon>
              </div>
              <h4 className="title" style={{ color: "#5a47ab" }}>
                khmer language
              </h4>
              <p className="title">
                provide student the video tutorial in khmer language.
              </p>
            </div>
            <div className="col-md-4 flex-column d-flex justify-content-center align-items-center">
              <div className="icon-box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faMoneyCheck} size="1x"></FontAwesomeIcon>
              </div>
              <h4 className="title" style={{ color: "#5a47ab" }}>
                payment
              </h4>
              <p className="title">
                easy to pay on course that the student want to study via credit
                and various bank in cambodia.
              </p>
            </div>
            <div className="col-md-4 flex-column d-flex justify-content-center align-items-center">
              <div className="icon-box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBriefcase} size="1x"></FontAwesomeIcon>
              </div>
              <h4 className="title" style={{ color: "#5a47ab" }}>
                Do business with us
              </h4>
              <p className="title">
                Register as a teacher to create video or course and get offer
                from us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutUsContainer>
  );
};

export default AboutUs;
