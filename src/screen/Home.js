import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { HomeContainer } from "./Home.styled";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query courseList {
    courseList {
      id
      name
      author
    }
  }
`;

const Home = () => {
  const {data, loading} = useQuery(QUERY)

  if (!data || loading) return <></>

  return (
    <HomeContainer>
      <div className="container-fluid header-slide">
        <div className=" row header-2">
          <div className="col-md-7 text-h-2">
            <div className="left-side-h2">
              <p>
                <b>
                  Find your favorite course and <br /> start with us
                </b>
              </p>
              <form>
                <button className="btnsign_in_out">Contact us</button>
                <button className="btnsign_in_out" id="btn-register">
                  Register here
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-5 images-header">
            <img src="images/library.png" />
          </div>
        </div>
      </div>

      <div className="container-fluid body-buildskill">
        <div className="row quantity">
          <div className="col-md-4 oc">
            <center>
              <p>
                <b className="font-body">500+ </b> <br />
                <br /> online course
              </p>
            </center>
          </div>
          <div className="col-md-4 EM">
            <center>
              <p>
                <b className="font-body">100+</b> <br />
                <br /> Experienced Mentor
              </p>
            </center>
          </div>
          <div className="col-md-4 RR">
            <center>
              <p>
                <b className="font-body">1 Million+ </b> <br />
                <br /> Rate & Review
              </p>
            </center>
          </div>
        </div>
        <div className="how-it-work">
          <p>
            {" "}
            <b>How it works</b>
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 course">
            <div className="image">
              <img src="images/course.png" alt="" />
            </div>
            <div className="content">
              <h5>
                <p>
                  <b> Find your Course</b>
                </p>
              </h5>
              <span>
                It’s so easy to find your suitable
                <br /> course here and getting the best
                <br /> Knowledge about that.
              </span>
            </div>
          </div>
          <div className="col-md-4 seat">
            <div className="image ">
              <img src="images/seat.png" alt="" />
            </div>
            <div className="content">
              <h5>
                <p>
                  <b>Book your seat</b>
                </p>
              </h5>
              <span>
                After finding your suitable and dream <br />
                course it’s just easier to book your seat <br />
                and keep going on.
              </span>
            </div>
          </div>
          <div className="col-md-4 certi">
            <div className="image">
              <img src="images/certificate.png" alt="" />
            </div>
            <div className="content">
              <h5>
                <p>
                  <b>Get certificate</b>{" "}
                </p>
              </h5>
              <span>
                We are providing the certificates after <br />
                Completing the course you can join <br />
                anywhere by showing this.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about-us" id="aboutus">
        <div className="pic">
          <img src="images/aboutus.png" alt="" />
        </div>
        <div className="content-about-us">
          <h3>
            <p>About us</p>
          </h3>
          <span>
            BuildSkill website is the online course study that all video is
            teaching in khmer <br /> langauge. There are many courses in this
            website such as: HTML, CSS, Java, C, <br /> C++, Autocad, photoshop
            and other course. User need to create account and <br /> login into
            the website to view course and buy the course on the website. This{" "}
            <br /> website will improve student's skill like coding or edit
            picture and video...etc, <br /> and help student to improve their
            basic knowledge.​
          </span>
          <form>
            <button className="btnsign_in_out">Learn More</button>
          </form>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <h3 style={{ marginLeft: "80px" }}>Popular courses</h3>
        <div className="">
          <div className="row align-items-center" style={{ rowGap: 20 }}>
            {Array.from(Array(10).keys())
              .map((x) => {
                return (
                  <div
                    className="col-md-3 d-flex justify-content-center align-items-center"
                    key={x}
                  >
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src="images/course1.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="promotion">
                        <p>-40%</p>
                      </div>
                      <div className="card-body">
                        <div className="card-title">
                          <p>Bilgisayar Billimleri</p>
                          <span className="user">
                            <i className="far fa-user"> 1225</i>
                          </span>
                          <span className="rating">
                            <i className="fas fa-star"> 3.9</i>
                          </span>
                        </div>

                        <p className="card-text">
                          Front-End web advance <br /> RESTful API
                        </p>
                        <div className="cardfooter">
                          <p>
                            15${" "}
                            <sup>
                              {" "}
                              <strike>55$</strike>{" "}
                            </sup>{" "}
                          </p>
                          <Link to="/courses/enroll" className="btn btn-primary">
                            enroll
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {
                data?.courseList?.map((x) => {
                  return (
                    <div
                    className="col-md-3 d-flex justify-content-center align-items-center"
                    key={x.id}
                  >
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src="images/course1.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="promotion">
                        <p>-40%</p>
                      </div>
                      <div className="card-body">
                        <div className="card-title">
                          <p>{x.author}</p>
                          <span className="user">
                            <i className="far fa-user"> 1225</i>
                          </span>
                          <span className="rating">
                            <i className="fas fa-star"> 3.9</i>
                          </span>
                        </div>

                        <p className="card-text">
                          {x.title}
                        </p>
                        <div className="cardfooter">
                          <p>
                            15${" "}
                            <sup>
                              {" "}
                              <strike>55$</strike>{" "}
                            </sup>{" "}
                          </p>
                          <Link to="/courses/enroll" className="btn btn-primary">
                            enroll
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
