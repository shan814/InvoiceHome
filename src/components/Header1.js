import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";

export default function Header1() {
  return (
    <div class="navbar">
      <div class="container flex">
        <h1 class="logo">Logo</h1>
        <nav>
          <ul>
            <li>
              {/* <a href="index.html">Home</a> */}
              <Link to={"/sign-in"}>
                <button
                  style={{ fontSize: 15 }}
                  type="button"
                  //   class="btn btn-primary"
                  className="btn mr-2 btn-warning invoiceButton"
                >
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className=" btn-primary"
                >
                  Language and Settings
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Arabic</Dropdown.Item>
                  <Dropdown.Item href="/">English</Dropdown.Item>
                  <Dropdown.Item href="/change-password">
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item href="/email-reports">
                    Email Reports
                  </Dropdown.Item>
                  <Dropdown.Item href="/language-region">
                    Language and Region
                  </Dropdown.Item>
                  <Dropdown.Item href="/name-email">
                    My Name And Email
                  </Dropdown.Item>
                  <Dropdown.Item href="/">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
