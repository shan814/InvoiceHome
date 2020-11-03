import React, { Component } from "react";
import "./SignUp.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (

      <div id="main" class="login-outer-wrapper">
    <div class="bg-outer-back">
        <div class="clearfix">
            <div class="col-md-6 login-bg-left">
                <div class="login-overlay">
                  
                </div>
            </div>
            <div class="col-md-6 login-bg-right">
            </div>

    <div class="container-fluid">
        <div class="login-small-wrapper">
            <div ui-view="" autoscroll="false">
            <p class="ng-scope">Register here</p>
            <form method="post" id="contact" class="ng-pristine ng-scope ng-invalid ng-invalid-required">
    <div class="form-login-inner">
        <div class="sm-group">
            <label for="firstname" class="field-icon">First Name</label>
            <input type="text" name="firstname" id="firstname" placeholder="First Name" required="" class="ng-pristine ng-invalid ng-invalid-required ng-touched"/>
            <span class="highlight"></span>
            <span class="bar"></span>
        </div>
        <div class="sm-group">
            <label for="lastname" class="field-icon">Last Name</label>
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" required="" class="ng-pristine ng-invalid ng-invalid-required ng-touched"/>
            <span class="highlight"></span>
            <span class="bar"></span>
        </div>
        <div class="sm-group">
            <label for="username" class="field-icon">Email</label>
            <input type="email" name="username" id="username" placeholder="Enter email" required="" class="ng-pristine ng-invalid ng-invalid-required ng-touched"/>
            <span class="highlight"></span>
            <span class="bar"></span>
        </div>
        <div class="sm-group">
            <label for="password" class="field-icon">Password</label>
            <input ng-model="inputData.password" type="password" name="password" id="password" placeholder="Enter password" required="" class="ng-pristine ng-untouched ng-invalid ng-invalid-required" />
            <span class="highlight"></span>
            <span class="bar"></span>
        </div>
        
        
    </div>

    <Link className="nav-link" to={"/invoice-details"}>
    <button type="submit" class="btn sign-in-btn" href="/invoice-details">Sign In</button>
    </Link>

    {/* <Link className="nav-link" to={"/invoice-details"}>
    <button type="submit" class="btn sign-in-btn" href="/invoice-details">Sign Up</button>
    </Link> */}
    
    
    <a href="javascript:void(0);" class="forget-btn" title="Forgot Password?">
    <span className="already">Already registered</span> <Link to={"/sign-in"}>Sign In?</Link>
    </a>
    
</form>
            </div>
        </div>
    </div>
        </div>
    </div>
    

</div>


      // <div className="auth-wrapper">
      //   <div className="auth-inner">
      //     <form>
      //       <h3>Sign Up</h3>

      //       <div className="form-group">
      //         <label>First name</label>
      //         <input
      //           type="text"
      //           className="form-control"
      //           placeholder="First name"
      //         />
      //       </div>

      //       <div className="form-group">
      //         <label>Last name</label>
      //         <input
      //           type="text"
      //           className="form-control"
      //           placeholder="Last name"
      //         />
      //       </div>

      //       <div className="form-group">
      //         <label>Email address</label>
      //         <input
      //           type="email"
      //           className="form-control"
      //           placeholder="Enter email"
      //         />
      //       </div>

      //       <div className="form-group">
      //         <label>Password</label>
      //         <input
      //           type="password"
      //           className="form-control"
      //           placeholder="Enter password"
      //         />
      //       </div>

      //       <Link className="nav-link" to={"/invoice-details"}>
      //         <button
      //           type="submit"
      //           className="btn btn-primary signUp-submit-btn"
      //         >
      //           Sign Up
      //         </button>
      //       </Link>
      //       <p className="forgot-password text-right">
      //         Already registered <Link to={"/sign-in"}>sign in?</Link>
      //       </p>
      //     </form>
      //   </div>
      // </div>
    );
  }
}
