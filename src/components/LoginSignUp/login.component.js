import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./LoginForm.css";

export default class Login extends Component {
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
            <p class="ng-scope">Login with your username and password</p>
            <form method="post" id="contact" class="ng-pristine ng-scope ng-invalid ng-invalid-required">
    <div class="form-login-inner">
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
    <Link to={"/sign-up"}>
    <a href="javascript:void(0);" class="forget-btn" title="Forgot Password?">
        Forgot Password?
    </a>
    </Link>
    <Link to={"/sign-up"}>
    <a href="javascript:void(0);" class="forget-btn" title="Sign up?">
        <span className="already">Don't have an account? </span>Sign up?
    </a>
    </Link>
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
      //       <h3>Sign In</h3>

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

      //       <div className="form-group">
      //         <div className="custom-control custom-checkbox">
      //           <input
      //             type="checkbox"
      //             className="custom-control-input"
      //             id="customCheck1"
      //           />
      //           <label className="custom-control-label" htmlFor="customCheck1">
      //             Remember me
      //           </label>
      //         </div>
      //       </div>
      //       <Link className="nav-link" to={"/invoice-details"}>
      //         <button
      //           type="submit"
      //           className="btn btn-primary login-submit-btn"
      //         >
      //           Submit
      //         </button>
      //       </Link>
      //       <p className="forgot-password forget-password">
      //         Forgot <a href="#">password?</a>
      //       </p>
      //       <Link className="nav-link" to={"/sign-up"}>
      //         {" "}
      //         <p className="forgot-password forget-password">Sign Up</p>
      //       </Link>
      //     </form>
      //   </div>
      // </div>
    );
  }
}
