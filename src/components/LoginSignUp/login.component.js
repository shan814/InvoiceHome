import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./LoginForm.css";

export default class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <Link className="nav-link" to={"/invoice-details"}>
              <button
                type="submit"
                className="btn btn-primary login-submit-btn"
              >
                Submit
              </button>
            </Link>
            <p className="forgot-password forget-password">
              Forgot <a href="#">password?</a>
            </p>
            <Link className="nav-link" to={"/sign-up"}>
              {" "}
              <p className="forgot-password forget-password">Sign Up</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
