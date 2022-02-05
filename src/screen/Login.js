import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.css";
import { Card, Form } from "react-bootstrap";
import { LoginContainer } from "./Login.styled.js";
import { useAuthContext } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const SIGNIN = gql`
  mutation signin($input: SignInInput!) {
    signIn(input: $input)
  }
`

const Login = () => {
  const { setToken, token } = useAuthContext();
  const navigate = useNavigate();

  let email;
  let password;

  const [signIn, { loading }] = useMutation(SIGNIN, {
    onCompleted: (data) => {
      if (data) {
        window.localStorage.setItem("token", data.signIn)
        setToken(data.signIn)
      }
    },
    onError: (e) => {
      toastr.error("username or password is incorrect!")
    }
  })

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token])

  const onHandleSubmit = (e) => {
    e.preventDefault();

    signIn({
      variables: {
        input: {
          username: email.value,
          password: password.value
        }
      }
    })
  };

  return (
    <LoginContainer>
      <div className="container">
        <Card className="form-container">
          <Card.Body style={{ padding: "0px" }}>
            <Form onSubmit={(e) => onHandleSubmit(e)}>
              <div className="form-header d-flex justify-content-center">
                <img src="images/buildskill_logo.png" />
              </div>
              <div className="form-body">
                <div className="form-content">
                  <h3 className="form-content-header">Sign in here</h3>
                  <p className="form-content-sub-header">
                    Sign in here if you already have account!
                  </p>
                  <div className="row">
                    <div
                      className="col-md-6 d-flex align-items-center"
                      style={{ justifyContent: "flex-end" }}
                    >
                      <button
                        className="btn com-login-button d-flex align-items-center"
                        style={{ columnGap: "10px" }}
                      >
                        <FontAwesomeIcon
                          icon={faGoogle}
                          style={{ fontSize: "18px" }}
                        ></FontAwesomeIcon>{" "}
                        Sign in with Google
                      </button>
                    </div>
                    <div
                      className="col-md-6 d-flex align-items-center"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <button
                        className="btn com-login-button d-flex align-items-center"
                        style={{ columnGap: "10px" }}
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ fontSize: "18px" }}
                        ></FontAwesomeIcon>{" "}
                        Sign in with Facebook
                      </button>
                    </div>
                  </div>
                  <div className="form-group-input">
                    <div className="d-flex align-items-center justify-contents-center flex-column mt-3">
                      <input
                        ref={(node) => email = node}
                        className="form-control form-input"
                        type="text"
                        required
                        name="email"
                        placeholder="Email Address or Username"
                      />
                      <input
                        ref={(node) => password = node}
                        className="form-control mt-3 form-input"
                        type="password"
                        required
                        name="password"
                        placeholder="Password"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6"><input type="checkbox"/><span style={{ fontSize: "12px", color: "#FBD15B" }}>Agree with term and condition</span></div>
                      <div className="col-md-6">
                        <p>
                        <span style={{ fontSize: "12px", color: "#FFFFFF" }}>Don't have an account?</span>
                        <a style={{ fontSize: "12px", color: "#FBD15B", textDecoration: "underline" }}>Sign Up</a>
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-contents-center flex-column mt-3">
                      <button className="btn form-submit-btn" type="submit" disabled={loading? true : ""}>
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </LoginContainer>
  );
};

export default Login;
