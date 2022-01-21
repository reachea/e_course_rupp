import styled from "styled-components";

export const NavbarContainer = styled.div`
.header {
  background-color: #5a47ab;
  height: 90px;
  z-index: 1000px;
}
.logo img {
  width: 186px;
}
.header-1 {
}
.header-2 {
  background-color: #5a47ab;
}
.header-slide {
  margin-top: 90px;
  position: relative;
}
.menu {
  margin-top: 23px;
  padding-left: 200px;
  float: left;
  display: flex;
  align-items: center;
  /* background-color: aqua; */
  height: 50px;
  border-right: solid 1px white;
}
.menu ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.menu ul li {
  float: left;
  position: relative;
}
.menu ul li a {
  display: block;
  color: aliceblue;
  padding: 30px;
  font-family: content;
  font-size: 20px;
  text-decoration: none;
}
.menu ul li a:hover {
  color: rgb(0, 0, 5);
}
.botton-header {
  position: relative;
  top: 20px;
  justify-content: flex-end;
}
.btnsign_in_out {
  padding: 15px 45px;
  border: unset;
  border-radius: 15px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
}

.btnsign_in_out::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #212121;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
}

.btnsign_in_out:hover {
  color: #e8e8e8;
}

.btnsign_in_out:hover::before {
  width: 100%;
}
/* ================================================================================= */
.text-h-2 {
  position: relative;
  height: 291px;
  /* background-color: aqua; */
}
.left-side-h2 {
  position: absolute;
  top: 25%;
  left: 25%;
}
.text-h-2 p {
  font-size: 20px;
  color: white;
  padding-bottom: 20px;
}
.text-h-2 form {
}
.images-header img {
  /* background-color: #e8e8e8; */
  height: 400px;
  width: 350px;
  padding-bottom: 50px;
}
/* ================================================================================= */
.header-iphone {
  background-color: #5a47ab;
  height: 50px;
  z-index: 1000px;
  position: fixed;
}
.icon-menu-ph {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* background-color: chocolate; */
}
.icon-menu-ph span {
  font-size: 30px;
  color: white;
}
.icon-ph {
  display: flex;
  padding-left: 80px;
  align-items: center;
}
.image-ph img {
  width: 100px;
}
.signin {
  font-size: 25px;
  color: white;
}
/* ================================================================================= */
.header-ipad {
  background-color: #5a47ab;
  height: 80px;
  z-index: 1000px;
  position: fixed;
}

.icon-pd {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.image-pd img {
  width: 150px;
}
.signin {
  font-size: 30px;
  color: white;
  padding-right: 30px;
}
.menu-ipad {
  float: left;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
  /* background-color: aqua; */
  height: 50px;
  /* border-right: solid 1px white; */
}
.menu-ipad ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.menu-ipad ul li {
  float: left;
  position: relative;
}
.menu-ipad ul li a {
  display: block;
  color: aliceblue;
  padding: 20px;
  font-family: content;
  font-size: 20px;
  text-decoration: none;
}
/* ================================================================================= */
.quantity {
  /* background-color: blanchedalmond; */
  padding-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.body-buildskill {
  height: 650px;
  /* background-color: brown; */
}
.oc {
  /* background-color: aqua; */
  padding-left: 200px;
  border-right: solid 2px #5a47ab;
}
.EM {
  border-right: orange solid 2px;
}
.RR {
  padding-right: 200px;
}
.font-body {
  color: #5a47ab;
}
/* ================================================================================= */
.how-it-work {
  /* background-color: aqua; */
  margin-top: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.how-it-work p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 30px;
  color: #5a47ab;
}
/* ================================================================================= */
.pic_content {
  margin-top: 30px;
}
.course {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding-left: 200px;
}
h5 {
  color: #5a47ab;
  font-family: Arial, Helvetica, sans-serif;
}
.content {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.content p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 25px;
  color: #5a47ab;
}
.image img {
  width: 200px;
}
.seat {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.certi {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 200px;
  flex-flow: column;
}
/* ====================================================================================== */
.about-us {
  /* background-color: aquamarine; */
  height: 500px;
  display: flex;
}
.pic img {
  padding-left: 150px;
  width: 650px;
}
.content-about-us {
  padding-top: 100px;
  padding-left: 20px;
}
.content-about-us p {
  padding-bottom: 20px;
}

h3 {
  color: #5a47ab;
  font-family: Arial, Helvetica, sans-serif;
}
.content-about-us form {
  padding-top: 20px;
}
.content-about-us form button {
  background-color: #5a47ab;
  color: white;
  border-radius: 10px;
}
/* ================================================================================= */
.row {
  margin-bottom: 75px;
}
h3 {
  font-size: 40px;
  font-weight: bold;
  padding-left: 5px;
  padding-bottom: 50px;
}
.promotion {
  position: absolute;
  right: 0px;
  top: 150px;
  width: 53px;
  height: 55px;
  font-size: 13px;
  background-color: #fbd15b;
  border: solid 2px rgb(245, 237, 237);
  border-radius: 10px;
  text-align: center;
  padding-top: 15px;
}
.popular-courses {
  margin-left: 150px;
}
.card-title p {
  font-size: 15px;
}
.card-title {
  display: flex;
  justify-content: space-between;
}
.card-title .user {
  font-size: 15px;
  color: #5a47ab;
}
.card-title .rating {
  font-size: 15px;
  color: #5a47ab;
}
.cardfooter {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.cardfooter p {
  font-size: 20px;
  color: #5a47ab;
  font-family: Arial, Helvetica, sans-serif;
}
.cardfooter a {
  width: 110px;
  height: 35px;
  padding-bottom: 30px;
}
/*responsive code*/
/*mobile phone*/
@media (max-width: 575px) {
  .header {
    display: none;
  }
  .body-buildskill {
    margin-top: 0px;
    height: 1500px;
    /* background-color:aqua ; */
  }
  .header-ipad {
    display: none;
  }
  .body-buildskill {
    margin-top: 0px;
  }
  .header-slide {
    width: 376px;
    margin-top: 50px;
    margin-bottom: 0px;
    position: relative;
    height: 300px;
  }
  .header-iphone {
    margin-bottom: 0px;
  }
  .text-h-2 p {
    font-size: 15px;
  }
  .images-header img {
    width: 150px;
    height: 250px;
  }
  .btnsign_in_out {
    padding: 8px 10px;
  }
  #btn-register {
    display: none;
  }
  .oc {
    margin-left: 0px;
    flex: 0 0 auto;
    width: 100%;
  }
  .body-buildskill {
    margin-top: 0px;
  }
  .oc {
    flex: 0 0 auto;
    width: 100%;
    padding-left: 0px;
    border: none;
  }
  .EM {
    margin-left: 0px;
    flex: 0 0 auto;
    width: 100%;
    border: none;
  }
  .RR {
    margin-left: 0px;
    flex: 0 0 auto;
    width: 100%;
    padding-right: 0px;
  }
  .course {
    flex: 0 0 auto;
    width: 100%;
    padding-left: 0px;
  }
  .seat {
    flex: 0 0 auto;
    width: 100%;
  }
  .certi {
    flex: 0 0 auto;
    width: 100%;
    padding-right: 0px;
  }
  .pic img {
    width: 370px;
    padding-left: 0px;
  }
  .about-us {
    flex-direction: column;
    /* background-color: bisque; */
    height: 900px;
  }
  .content-about-us {
    padding-top: 0px;
  }
  .content-about-us h3 {
    padding-bottom: 0px;
  }
  .h3 {
    padding-bottom: 2px;
    padding-left: 70px;
  }
  .popular-courses h3 {
    padding-top: 20px;
    font-size: 35px;
  }
  .popular-courses {
    margin-left: 0px;
  }
  #row2 {
    display: none;
  }
  .col-3 {
    flex: 0 0 auto;
    width: 100%;
    padding-left: 60px;
    padding-bottom: 20px;
  }
}

/* /////////////////////////////////////////////////////////////////////////////////////////////// */
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #5a47ab;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  opacity: 0.8;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: black;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
/*ipad*/
@media (min-width: 768px) and (max-width: 991px) {
  .header {
    display: none;
  }
  .body-buildskill {
    margin-top: 0px;
  }
  .course {
    padding-left: 0px;
    padding-bottom: 50px;
  }
  .certi {
    padding-right: 0px;
  }
  .pic img {
    padding-left: 0px;
    width: 400px;
    margin-top: 100px;
  }
  h3 {
    padding-bottom: 0px;
  }
  .header-iphone {
    display: none;
  }
  .popular-courses {
    padding-top: 100px;
    margin-left: 60px;
  }
  .header-slide {
    margin-top: 55px;
    margin-bottom: 0px;
  }
  .images-header img {
    width: 300px;
  }
  .btnsign_in_out {
    padding: 15px 30px;
  }
  .oc {
    padding-left: 0px;
  }
  .RR {
    padding-right: 0px;
  }
  .col-3 {
    flex: 0 0 auto;
    width: 50%;
    margin-top: 20px;
  }
  .row {
    margin-bottom: 20px;
  }
}
/*ipad pro*/
@media (min-width: 992px) and (max-width: 1199px) {
  .header {
    display: none;
  }
  .body-buildskill {
    margin-top: 0px;
  }
  .course {
    padding-left: 0px;
  }
  .certi {
    padding-right: 0px;
  }
  .pic img {
    padding-left: 0px;
  }
  h3 {
    padding-bottom: 0px;
  }
  .header-iphone {
    display: none;
  }
  .popular-courses {
    padding-top: 100px;
    margin-left: 100px;
  }
  .header-slide {
    margin-top: 55px;
    margin-bottom: 0px;
  }
  .col-3 {
    flex: 0 0 auto;
    width: 50%;
    margin-top: 20px;
  }
  .row {
    margin-bottom: 20px;
  }
}

/*laptop*/
@media (min-width: 1200px) {
  .header-iphone {
    display: none;
  }
  .header-ipad {
    display: none;
  }
}

`;
