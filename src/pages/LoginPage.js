import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../components/LoginSignUp/login.component";

function LoginPage() {
  return (
    // <Router>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
