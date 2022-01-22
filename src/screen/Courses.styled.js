import styled from "styled-components";

export const CoursesContainer = styled.div`
a.nav-link {
  color: white;
  font-size: 15px;
  margin-top: -30px;
}

li.nav-item i.nav-link {
  color: yellow;
}

#border {
  border-left: 2px solid white;
}

.icon {
  margin-top: -40px;
  font-size: 30px;
  margin-left: -20px;
}

.navbar .navbar-nav .nav-item .nav-link {
  padding: 0 40px;
}

ol {
  list-style: none;
}

.image {
  margin-left: 30px;
}

div.row div.col-3 {
  margin-top: 30px;
}

div.col-3 ol li {
  text-align: start;
  padding-top: 15px;
  color: white;
  font-size: 18px;
}

div.col-3 h2 {
  margin-left: 40px;
  color: yellow;
}

div.col-3 p {
  color: white;
  font-size: 70px;
}

#rate {
  margin-left: 60px;
}

section.about-me {
  text-align: center;
  align-content: center;
  background-color: white;
  margin-top: 150px;
  padding-top: 60px;
  padding-left: 200px;
  padding-right: 200px;
}

section.about-me p {
  margin-top: 10px;
  padding-top: 40px;
  text-align: justify;
  font-size: 20px;
}

#last-paragraph {
  padding-top: 0;
}

section.my-course {
  text-align: center;
  align-content: center;
  background-color: white;
  margin-top: -20px;
  padding-top: 60px;
  padding-left: 100px;
  padding-right: 100px;
}

select.form-select {
  background-color: yellow;
  color: #5a47ab;
  margin-top: -30px;
  margin-left: 30px;
}

div.list ul {
  list-style: none;
  padding: 0;
  margin-left: -40px;
}

div.list ul li {
  display: inline;
  font-size: 13px;
  padding-left: 20px;
}

.fas {
  color: #5a47ab;
}

h5.card-title {
  text-align: start;
  color: #5a47ab;
}

h5.card-text {
  color: #5a47ab;
  text-align: start;
}

a.btn {
  color: white;
  background-color: #5a47ab;
}

sup del {
  color: black;
}

.pagination {
  display: inline-block;
  margin-top: 50px;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #5a47ab;
  color: white;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
body {
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}
.footer {
  background-color: white;
  padding: 70px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: gray;
  text-transform: capitalize;
  font-weight: 500;
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;

  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
  margin-left: 20px;
}

.footer-col ul {
  margin-top: 10px;
}

.footer-col ul li a:hover {
  color: gray;
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: gray !important;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}

div.footer-col h4 {
  margin-top: 150px;
  margin-left: 50px;
}

#textFooter {
  font-size: 16px;
  color: gray;
}

/*responsive*/
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}

`;
