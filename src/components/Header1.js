import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";

export default function Header1() {
  return (
    <header>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container" style={{position: "relative"}}>
            <div className="navbar-header" style={{position: "absolute"}}>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="index.html"><img src="#" alt="Logo" />LOGO</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="drop">Language and Settings<span className="caret" />
                  <ul>
                    <li><a href="/">Arabic</a></li>
                    <li><a href="/">English</a></li>
                    <li><a href="/">Change Password</a></li>
                    <li><a href="/">Email Reports</a></li>
                    <li><a href="/">My Name and Email</a></li>
                    <li><a href="/">Signout</a></li>
                  </ul>
                </li>
                <li className><a href="/sign-in" className="login">Sign in</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    //       <div className="col-md-3 class-right">
    //         <nav>
    //           <ul>
    //             <li>
    //               {/* <a href="index.html">Home</a> */}
    //               <Link to={"/sign-in"}>
    //                 <button
    //                   style={{ fontSize: 15 }}
    //                   type="button"
    //                   //   class="btn btn-primary"
    //                   className="btn mr-2 btn-warning invoiceButton"
    //                 >
    //                   Sign In
    //                 </button>
    //               </Link>
    //             </li>
    //             <li>
    //               <Dropdown>
    //                 <Dropdown.Toggle
    //                   variant="success"
    //                   id="dropdown-basic"
    //                   className=" btn-primary class-dropdown"
    //                 >
    //                   Language and Settings
    //                 </Dropdown.Toggle>
    //                 <Dropdown.Menu>
    //                   <Dropdown.Item href="/">Arabic</Dropdown.Item>
    //                   <Dropdown.Item href="/">English</Dropdown.Item>
    //                   <Dropdown.Item href="/change-password">
    //                     Change Password
    //                   </Dropdown.Item>
    //                   <Dropdown.Item href="/email-reports">
    //                     Email Reports
    //                   </Dropdown.Item>
    //                   <Dropdown.Item href="/language-region">
    //                     Language and Region
    //                   </Dropdown.Item>
    //                   <Dropdown.Item href="/name-email">
    //                     My Name And Email
    //                   </Dropdown.Item>
    //                   <Dropdown.Item href="/">Sign Out</Dropdown.Item>
    //                 </Dropdown.Menu>
    //               </Dropdown>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
