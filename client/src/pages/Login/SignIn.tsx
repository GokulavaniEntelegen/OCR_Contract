import React from "react";
import LoginLeft from "./LoginLeft/LoginLeft";
import LoginRight from "./LoginRight/LoginRight";
import "./LoginLeft/LoginLeft.scss";
import "./LoginRight/LoginRight.scss";
import {Outlet} from "react-router-dom"


const SignIn = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
      {/* <LoginLeft /> */}
        <Outlet/>
      <LoginRight />
      </div>
    </div>
  );
};

export default SignIn;