import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";
class HeaderNew extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
          {/* <a className="navbar-brand p-0" href="/" rel="nofollow">
            <span>
              <img
                alt="Invoice Home"
                className
                src="https://images.invoicehome.com/invoicehome-logo-330.png"
                width={165}
                height={30}
              />
            </span>
          </a> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-3">
                <a className="nolink" href="/?locale=it">
                  <img
                    style={{ width: "35px", height: "20px", paddingRight: 5 }}
                    alt="Italian"
                    src="https://cdn.webshopapp.com/shops/94414/files/54952980/the-united-arab-emirates-flag-icon-free-download.jpg"
                  />
                </a>
                <a className="nolink" href="/?locale=pt">
                  <img
                    style={{ width: "30px", height: "20px" }}
                    alt="Portuguese"
                    src="https://www.pngarts.com/files/7/America-Flag-Transparent-Background-PNG.png"
                  />
                </a>
              </li>
              <li className="nav-item mx-3">
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
            </ul>
          </div>
          {/* <DropdownButton
            id="dropdown-item-button"
            title="Language And Settings"
          >
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Arabic</Dropdown.Item>
            <Dropdown.Item as="button">English</Dropdown.Item>
            <Dropdown.Item as="button">Sign Out</Dropdown.Item>
          </DropdownButton> */}

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Language and Settings
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Arabic</Dropdown.Item>
              <Dropdown.Item href="/">English</Dropdown.Item>
              <Dropdown.Item href="/change-password">
                Change Password
              </Dropdown.Item>
              <Dropdown.Item href="/email-reports">Email Reports</Dropdown.Item>
              <Dropdown.Item href="/language-region">
                Language and Region
              </Dropdown.Item>
              <Dropdown.Item href="/name-email">
                My Name And Email
              </Dropdown.Item>
              <Dropdown.Item href="/">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </div>
    );
  }
}

export default HeaderNew;
