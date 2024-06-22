import axios from "axios";
import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setEmployerIsLoggedIn, setToken,setUserId } = useContext(TokenContext);
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
          navigate("/EmployerMyAccount")
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    return (
      <div>
        Login <br />
        <input
          type="email"
        
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button onClick={()=>{
          Login();

        }}>Login</button>
        <br />
      <button onClick={()=>{
navigate("/registerEmployer")
      }}>Don't Have Account ! Register Now</button>
      </div>
    );
}

export default Login