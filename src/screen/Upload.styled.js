import styled from "styled-components";

export const UploadContainer = styled.div`
position: fixed;
top: 150px;
left: 0px;
width: 100vw;
height: 100vh;
z-index: 999;
background: #ffffff;

.top{
    margin: 0px auto;
    background-color: #5a47ab;
    width: 800px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
.bottom{
    margin: 0px auto;
    background-color: aliceblue;
    width: 800px;
    height: 400px;
    border-radius: 5px;
}
ul{
    margin: 0px;
    padding: 0px;
    display: flex;
    list-style: none;
    overflow: hidden;
}
.inputform{
    width: 80%;
    margin: 5px;
    margin-left: 200px;
    /* background-color: aqua; */
}
.form-control::placeholder{
    color: white;
    opacity: 0.9;
}
.form-label{
    justify-content: flex-start;

}
.form-control{
    width: 400px;
    height: 40px;
    background-color: #5a47ab;
    color: white;

}
.dropdown button{
    height: 40px;
    background-color: #5a47ab;
}
.upload-video{
    width: 70%;
    height: 200px;
    margin: 5px;
    margin-left: 100px;
    border-radius: 5px;
    border-style: dashed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.upload-video p{
    color: black;
}

.upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  
.btn1 {
    border: 2px solid black;
    background-color: white;
    padding: 2px 30px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    color: #5a47ab;
  }
  
.upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
.submit{
    position: relative;
    overflow: hidden;
    display: inline-block;
}
.btn2 {
    border: 2px solid black;
    background-color: #5a47ab;
    padding: 2px 60px;
    border-radius: 8px;
    font-size: 20px;
    color: white;
    margin-left: 280px;
  }
  .submit input[button]{

  }

  .btn2:hover {
    background-color: #ffffff;
    transition: all .2s;
    color: #000000;
}
`;