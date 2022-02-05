import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { EnrollContainer } from "./Enroll.styled";

const Enroll = () => {
  const [ isActive, setIsActive ] = useState("");
  const [ selectedVideo, setSelectedVideo ] = useState("../video/video-1.mp4");
  const [ selectedTab, setSelectedTab ] = useState('1');
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) {
      window.location.replace('/login') 
    }

    return () => {}
  }, [token])

  const onHandleSelect = (val) => {
    if (val === isActive) {
      setIsActive("")
      return
    }

    setIsActive(val)
  }

  const onHandleSelectVideo = (val) => {
    setSelectedVideo(`../video/video-${val}.mp4`)
  }

  console.log(selectedVideo)

  return (
    <EnrollContainer>
      <div className="d-flex justify-content-center">
        <div className="m-5 p-5 col-6" align="center">
          <p>
            You can either enroll for this course to gain access and also to the
            materials been attached to it online only or you can add to cart for
            checkout to view offine
          </p>
          <button className="btn-add-to-cart">Add to cart</button>
        </div>
      </div>
      <div className="container" id="display-video">
        <div>
          {
              <video
              width="100%"
              height="100%"
              poster="../images/poster1.jpg"
              controls
              key={selectedVideo}
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          }
        </div>
      </div>

      <div id="bg-nav-center" className="d-flex justify-content-center">
        <div
          className="p-3  bd-highlight tablinks"
          // onclick="openTab(event, 'Overview') "
          onClick={() => setSelectedTab("1")}
          style={{ cursor: "pointer" }}
        >
          Overview
        </div>
        <div
          className="p-3 bd-highlight tablinks"
          // onclick="openTab(event, 'Offine-Package')"
          onClick={() => setSelectedTab("2")}
          style={{ cursor: "pointer" }}
        >
          Offine Package
        </div>
        <div
          className="p-3 bd-highlight tablinks"
          // onclick="openTab(event, 'Exercise-Files') "
          onClick={() => setSelectedTab("3")}
          style={{ cursor: "pointer" }}
        >
          Exercise Files
        </div>
      </div>

      <div id="Overview" className={`${selectedTab === '1'? '' : 'tab-none'} tabcontent container`}>
        <div className="row">
          <div className="col " align="center">
            <h3>Instructor</h3>
            <img src="../images/logo.png" alt="logo" />
            <h3> Te Eangly </h3>
            <p>
              “Essay” is a loose term for writing that asserts the author’s
              opinion on a topic, whether academic, editorial, or even humorous.
              There are a thousand different approaches to essay writing and a
              million different topics to choose from, but what we’ve found is
              that good essay writing tends to follow the same framework.{" "}
            </p>
            <div className="d-flex justify-content-center">
              <div className="p-2 bd-highlight">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              <div className="p-2 bd-highlight">
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <div className="p-2 bd-highlight">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 " align="justify">
            <div>
              <h3>Description</h3>
              <p>
                The preparation phase consists of both outlining your essay and
                collecting resources for evidence. Take a look at the results of
                your brainstorming session. First, isolate the ideas that are
                essential to support your thesis and then organize them in a
                logical and progressive order. In this stage you’ll incorporate
                your essay structure, which we explain below. If you want
                empirical evidence or complementary citations, track them down
                now.{" "}
              </p>
              <p>
                The preparation phase consists of both outlining your essay and
                collecting resources for evidence. Take a look at the results of
                your brainstorming session. First, isolate the ideas that are
                essential to support your thesis and then organize them in a
                logical and progressive order. In this stage you’ll incorporate
                your essay structure, which we explain below. If you want
                empirical evidence or complementary citations, track them down
                now.{" "}
              </p>
            </div>
            <div className="mt-5 row">
              <div className="col">
                <h5>Released Date:</h5>
                <h5>Duration:</h5>
                <h5>Tags:</h5>
              </div>
              <div className=" col">
                <p>1/03/2019</p>
                <p>1h 05 min 00 secs</p>
                <p>Modelling, Rendering, Animation</p>
              </div>
            </div>
          </div>
          <div className="col rowModule">
            <div className="mb-2 sidenav">
              <button className="dropdown-btn" onClick={() => onHandleSelect("1")}>
                Module 1<i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container" style={{ display: `${ (isActive === "1") ? "block" : "" }` }}>
                <a href="#" onClick={() => onHandleSelectVideo("1")}>lesson 1</a>
                <a href="#" onClick={() => onHandleSelectVideo("2")}>lesson 2</a>
                <a href="#" onClick={() => onHandleSelectVideo("3")}>lesson 3</a>
              </div>
            </div>
            <div className="mb-2 sidenav">
              <button className="dropdown-btn" onClick={() => onHandleSelect("2")}>
                Module 2<i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container" style={{ display: `${ (isActive === "2") ? "block" : "" }` }}>
                <a href="#" onClick={() => onHandleSelectVideo("4")}>lesson 1</a>
                <a href="#" onClick={() => onHandleSelectVideo("5")}>lesson 2</a>
                <a href="#" onClick={() => onHandleSelectVideo("6")}>lesson 3</a>
              </div>
            </div>
            <div className="mb-2 sidenav">
              <button className="dropdown-btn" onClick={() => onHandleSelect("3")}>
                Module 3<i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container" style={{ display: `${ (isActive === "3") ? "block" : "" }` }}>
                <a href="#" onClick={() => onHandleSelectVideo("7")}>lesson 1</a>
                <a href="#" onClick={() => onHandleSelectVideo("8")}>lesson 2</a>
                <a href="#" onClick={() => onHandleSelectVideo("9")}>lesson 3</a>
              </div>
            </div>
            <div className="mb-2 sidenav">
              <button className="dropdown-btn" onClick={() => onHandleSelect("4")}>
                Module 4<i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container" style={{ display: `${ (isActive === "4") ? "block" : "" }` }}>
                <a href="#" onClick={() => onHandleSelectVideo("10")}>lesson 1</a>
                <a href="#">lesson 2</a>
                <a href="#">lesson 3</a>
              </div>
            </div>
            <div className="mb-2 sidenav">
              <button className="dropdown-btn" onClick={() => onHandleSelect("5")}>
                Module 5<i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container" style={{ display: `${ (isActive === "5") ? "block" : "" }` }}>
                <a href="#">lesson 1</a>
                <a href="#">lesson 2</a>
                <a href="#">lesson 3</a>
              </div>
            </div>
            <div className="mb-2 sidenav">
              <button className="dropdown-btn" onClick={() => onHandleSelect("6")}>
                Module 6<i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container" style={{ display: `${ (isActive === "6") ? "block" : "" }` }}>
                <a href="#">lesson 1</a>
                <a href="#">lesson 2</a>
                <a href="#">lesson 3</a>
              </div>
            </div>
            <div className="mb-2 sidenav">
              <button className="dropdown-btn" onClick={() => onHandleSelect("7")}>
                Module 7<i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container" style={{ display: `${ (isActive === "7") ? "block" : "" }` }}>
                <a href="#">lesson 1</a>
                <a href="#">lesson 2</a>
                <a href="#">lesson 3</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Offine-Package" className={`${selectedTab === '2'? '' : 'tab-none'} tabcontent container`}>
        <div className="d-flex justify-content-center">
          <div className="m-5 p-5  col-6" align="center">
            <a href="#" style={{ color: "coral" }}>
              Download Course For Offine View
            </a>
            <p>
              You can either enroll for this course to gain access and also to
              the materials been attached to it online only or you can add to
              cart for checkout to view offine
            </p>
            <button className="btn-add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>

      <div id="Exercise-Files" className={`${selectedTab === '3'? '' : 'tab-none'} tabcontent container`}>
        <div className="d-flex justify-content-center">
          <div className="m-5 p-5  col-6" align="center">
            <a href="#" style={{ color: "coral" }}>
              Download Exercise Files
            </a>
            <p>
              You can either enroll for this course to gain access and also to
              the materials been attached to it online only or you can add to
              cart for checkout to view offine
            </p>
          </div>
        </div>
      </div>
    </EnrollContainer>
  );
};

export default Enroll;
