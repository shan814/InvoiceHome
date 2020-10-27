import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>
            <button type="button" class="btn btn-info">
              Company Name
            </button>
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  <button type="button" class="btn btn-info">
                    Login
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  <button type="button" class="btn btn-info">
                    Sign Up
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Header;
