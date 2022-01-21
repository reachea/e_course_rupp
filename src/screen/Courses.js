import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { CoursesContainer } from "./Courses.styled.js";

const Courses = () => {
  return (
    <CoursesContainer>
      <section style={{ marginTop: "80px", backgroundColor: "#5947AB" }}>
        <div className="row">
          <div className="col-3">
            <div className="image">
              <img alt="Our Promotion" src="images/profile.jpg" />
            </div>
          </div>
          <div className="col-3">
            <ol>
              <li>
                <i className="fab fa-youtube"></i> Eangly The Designer
              </li>
              <li>
                <i className="fab fa-internet-explorer"></i> Eangly.com
              </li>
              <li>
                <i className="fab fa-linkedin-in"></i> EanglyBuildskills
              </li>
              <li>
                <i className="fab fa-twitter"></i> EanglyBuildskills
              </li>
              <li>
                <i className="fab fa-instagram"></i> EanglyBuildskills
              </li>
            </ol>
          </div>
          <div className="col-3">
            <h2>Follower</h2>
            <p>30.676</p>
          </div>
          <div className="col-3">
            <h2 id="rate">rating</h2>
            <p>22.304</p>
          </div>
        </div>
      </section>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hi! I'm Colt. I'm a developer with a serious love for teaching. I've
          spent the last few years teaching people to program at 2 different
          immersive bootcamps where I've helped hundreds of people become web
          developers and change their lives. My graduates work at companies like
          Google, Salesforce, and Square.
        </p>
        <p>
          Most recently, I led Galvanize's SF's 6 month immersive program as
          Lead Instructor Director. After graduating from my className, 94% of
          my students went on to receive fulltime developer roles. I also worked
          at Udacity as a Senior Course Developer on the web development team
          where I got to reach thousands of students daily
        </p>
        <p>
          I've since focused my time on bringing my classNameroom teaching
          experience to an online environment. In 2016 I launched my Web
          Developer Bootcamo course, which has since gone on to become one of
          the best selling and top rated courses on Udemy. I was also voted
          Udemy's Best New Instructor of 2016.
        </p>
        <p>
          I've spent years figuring out the "formula" to teaching technical
          skills in classNameroom environment, and I'm really excited to finally
          share my expertise with you. I can confidently say that my online
          courses are without a doubt the most comprehensive ones on the market.
        </p>
        <p id="last-paragraph">Join me on this crazy adventure!</p>
      </section>

      <section className="my-course">
        <h2 className="mb-5">My Course</h2>
        <div className="row align-items-center" style={{ rowGap: 20 }}>
          {Array.from(Array(6).keys()).map((x) => {
            return (
              <div className="col-md-3" key={x}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src="images/code.jfif" className="card-img-top" alt="..." />
                  <div className="card-body" style={{ padding: "20px" }}>
                    <div className="list">
                      <ul>
                        <li>Bilgisayar Bilimleri</li>
                        <li>
                          <FontAwesomeIcon icon={faEye} style={{ color: "#5a47ab" }} ></FontAwesomeIcon> 1225
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faStar} style={{ color: "#5a47ab" }} ></FontAwesomeIcon> 3.9
                        </li>
                      </ul>
                    </div>
                    <h5 className="card-title">
                      Front-End Web advance RESTful API
                    </h5>
                    <h5 className="card-text">
                      15${" "}
                      <sup>
                        <del>55$</del>
                      </sup>
                    </h5>
                    <Link to="/courses/enroll" className="btn btn-primary" style={{ padding: "5px 10px" }}>
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination mb-5">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" className="active">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </section>
    </CoursesContainer>
  );
};

export default Courses;
