import styled from "styled-components";

export const LoginContainer = styled.div`
  margin-top: 80px;

  .form-header {
    background-color: #5a47ab;
  }

  .form-container {
    margin: 180px 0px;
    padding: 0px 200px;
    border: none;
  }

  .form-body {
    height: auto;
    background-color: #5a47ab;
    padding: 0px 120px 40px 120px;
  }

  .form-content {
    min-height: 400px;
    width: 100%;
    border: 1px solid #FFFFFF;
  }

  .form-content-header {
    color: #FFFFFF;
    text-align: center;
  }

  .form-content-sub-header {
    color: #FFFFFF;
    text-align: center;
  }

  .com-login-button {
    padding: 5px 10px;
    border-radius: 3px;
    background: #FFFFFF;
  }

  .form-input {
    background: initial;
    color: #CED4DA;

    &::placeholder {
      color: #CED4DA;
    }
  }

  .form-submit-btn {
    background-color: #19006F;
    color: #FFFFFF;
    width: 100%;
  }

  .form-group-input {
    padding: 40px;
  }
`;