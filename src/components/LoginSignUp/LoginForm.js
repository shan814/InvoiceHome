import React from "react";

export default function LoginForm() {
  return (
    <div ui-view autoscroll="false">
      <meta charSet="UTF-8" className="ng-scope" />
      <meta
        name="keywords"
        content="Smart Online Payment Solution"
        className="ng-scope"
      />
      <meta
        name="author"
        content="ABZER Technology Solutions"
        className="ng-scope"
      />
      <meta
        name="description"
        content="Smart Online Payment Solution"
        className="ng-scope"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        className="ng-scope"
      />
      <title className="ng-scope">SmartInvoice</title>
      {/*<div class="container-fluid">*/}
      {/*<div class="login-small-wrapper">*/}
      {/*<img th:src="@{/web/common/images/logo_green.jpg}" class="img-responsive"/>*/}
      <span className="img ng-scope" />
      <p className="ng-scope">Login with your username and password</p>
      <form
        method="post"
        ng-submit="postForm()"
        id="contact"
        ng-init="initLogin()"
        className="ng-pristine ng-scope ng-invalid ng-invalid-required"
      >
        <div className="form-login-inner">
          <div className="sm-group">
            <label htmlFor="username" className="field-icon">
              Username
            </label>
            <input
              ng-model="inputData.username"
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              required
              className="ng-pristine ng-invalid ng-invalid-required ng-touched"
            />
            <span className="highlight" />
            <span className="bar" />
          </div>
          <div className="sm-group">
            <label htmlFor="password" className="field-icon">
              Password
            </label>
            <input
              ng-model="inputData.password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
              className="ng-pristine ng-invalid ng-invalid-required ng-touched"
            />
            <span className="highlight" />
            <span className="bar" />
          </div>
          {/* ngIf: otpSent==true */}
        </div>
        <button type="submit" className="btn sign-in-btn">
          Sign In
        </button>
        <a
          href="javascript:void(0);"
          className="forget-btn"
          title="Forgot Password?"
          ng-click="goToState('forgotverifyemail')"
        >
          Forgot Password?
        </a>
      </form>
      {/*</div>*/}
      {/*</div>*/}
    </div>
  );
}
