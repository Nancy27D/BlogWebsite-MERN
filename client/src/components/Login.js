import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const formdata = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginBtn = () => {
    // console.log
    const Url = "http://localhost:5000/api/login";
    axios
      .post(Url, loginData)
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          setErrMsg(res.data.msg + " " + res.data.data);
        } else {
          setErrMsg(res.data.msg + " " + "redirecation to home page..");
          setTimeout(() => {
            navigate("/home");
          }, 2000);
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <div class="container-fluid login">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12 offset-md-3">
            <h1> Login Please</h1>
            <label class="form-label">Username</label>
            <input
              onChange={formdata}
              name="username"
              type="text"
              class="form-control"
            />
          </div>

          <div class="mb-3 col-lg-6 col-md-6 col-12 offset-md-3">
            <label class="form-label">Password</label>
            <input
              onChange={formdata}
              name="password"
              type="password"
              class="form-control"
            />
          </div>
          <div class="form-text text-danger ">{errMsg}</div>
          <button
            onClick={loginBtn}
            type="click"
            class="btn btn-primary registerButton col-lg-6 col-md-6 offset-md-3 "
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
