import { faBars, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./Navbar.styled";

import NavbarLogo from "../../assets/buildskill_logo.png";


const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="header navbar-inverse fixed-top">
        <div className="row header-1">
          <div className="col-3 logo-main">
            <div className="logo">
              <img src="images/buildskill_logo.png" />
            </div>
          </div>
          <div className="col-6 menu">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/courses"> Courses </Link>
              </li>
              <li>
                <Link to="/about-us"> About us</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 botton-header">
            <form>
              <button className="btnsign_in_out"><Link to="/login" style={{ color: "#212121" }}>Sign in</Link></button>
              <button className="btnsign_in_out">Sign out</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid header-ipad navbar-inverse fixed-top">
        <div className="row">
          <div className="col-2 image-pd">
            <img src={NavbarLogo} />
          </div>
          <div className="col-8 menu-ipad">
            <ul>
              <li>
                <a href="#"> Home </a>
              </li>
              <li>
                <a href="#"> Courses </a>
              </li>
              <li>
                <a href="#"> Contact </a>
              </li>
              <li>
                <a href="#aboutus"> About us</a>
              </li>
            </ul>
          </div>
          <div className="col-2 icon-pd">
            <FontAwesomeIcon icon={faSignInAlt} className="signin " style={{ padding: "0px" }}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="container-fluid header-iphone navbar-inverse fixed-top">
        <div className="row">
          <div className="col-4 icon-menu-ph">
            <div id="mySidenav" className="sidenav">
              <a
                className="closebtn"
                onClick={() => {}}
              >
                &times;
              </a>
              <a href="#">Home</a>
              <a href="#">Courses</a>
              <a href="#">Contact</a>
              <a href="#aboutus">About us</a>
            </div>
            <span style={{ fontSize:"30px", cursor: "pointer" }} onClick={() => {}}>
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </span>
            <span></span>
          </div>
          <div className="col-4 image-ph">
            <img src={NavbarLogo} />
          </div>
          <div className="col-4 icon-ph">
            <FontAwesomeIcon icon={faSignInAlt} className="signin" style={{ padding: "0px" }}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;