import axios from "axios";
import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setEmployerIsLoggedIn, setToken,setUserId ,setShowNav,setGoToPageSeekerOrEmployer} = useContext(TokenContext);
    const navigate = useNavigate();

    const Login = () => {
      const userData = {
        email,
        password,
      };
  
      axios
        .post("http://localhost:5000/employer/login", userData)
        .then((result) => {
          console.log(result.data)
          setToken(result.data.token);
          setUserId(result.data.userId);
          setEmployerIsLoggedIn(true);
           localStorage.setItem("employerIsLoggedIn",true)
          localStorage.setItem("userId",result.data.userId)
          localStorage.setItem("token",result.data.token) 
          setShowNav(true);
          navigate("/EmployerMyAccount")
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    return (
      <div className="Login">

            <h6>Job Employer Account Login</h6>
            <Form>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
  
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
  
              <Button
                variant="primary"
                type="button"
                className="mb-3"
                onClick={Login}
              >
                Login
              </Button>
  
              <Button
                variant="link"
                onClick={() => {
                  setGoToPageSeekerOrEmployer("registerEmployer");
                }}
              >
                Don't have an account? Register Now
              </Button>
            </Form>
        
      </div>
    );
  };
  
  export default Login;