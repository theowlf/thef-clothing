import React from "react";
import SignIn from "../../components/sign-in/sign-in.componenet";
import SignUp from "../../components/sign-up/sign-up.component";
import "./signin-signup-pages.scss";

const SignInandSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <div className="line-trough"></div>
    <SignUp />
  </div>
);

export default SignInandSignUpPage;
