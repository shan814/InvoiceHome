import React from "react";

export default function LoginForm() {
  return (
    <div>
      {/* Meta, title, CSS, favicons, etc. */}
      <meta charSet="utf-8" />
      <title>SMARTINVOICE - Login</title>
      <meta name="keywords" content="Smart Online Payment Solution" />
      <meta name="author" content="ABZER Technology Solutions" />
      <meta name="description" content="Smart Online Payment Solution" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Font CSS (Via CDN) */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700"
      />
      <link rel="stylesheet" type="text/css" href="/app/wro/auth.css" />
      {/* Favicon */}
      <link rel="shortcut icon" href="/app/assets/img/favicon.ico" />
      {/* CSS overrides */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/app/web/theme/css/themify-icons.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/app/web/theme/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/app/web/theme/css/datepicker.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/app/web/theme/css/custom.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/app/web/auth/css/style_auth.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/app/web/theme/css/subscription-detail.css"
      />
      {/*// CSS overrides */}
      {/*<style>
          .loginPageHeader {
              color: #214B7F;
          }
          .admin-form .switch-primary>input:checked+label {
              background: #214B7F;
              border-color: #214B7F;
          }
          .admin-form .btn-primary {
              background-color: #214B7F;
          }
      </style>*/}
      {/* i18n support */}
      {/*<th:block th:if="${i18nData.language != null &amp;&amp; i18nData.language == 'ar'}">
              <link href="/web/libs/bootstrap-rtl/v3.3.4/css/bootstrap-rtl.css" rel="stylesheet"/>
          </th:block>*/}
      {/* Start: Main */}
      <div id="main" className="login-outer-wrapper">
        <div className="bg-outer-back">
          <div className="clearfix">
            <div className="col-md-6 login-bg-left">
              <div className="login-overlay">
                <img
                  className="img-responsive auth-log-img"
                  src="/app/web/common/images/logo.svg"
                />
                <div className="welcome-note">
                  <h3>Welcome to SmartInvoice</h3>
                  <p>
                    A comprehensive Revenue Management
                    <br />
                    Solution integrated with <br />
                    online payment
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 login-bg-right">
              <img
                className="img-responsive"
                src="/app/web/common/images/login_bg2-1.png"
              />
            </div>
            <div className="login-footer">
              <ul>
                <li>
                  <a href="https://www.abzer.com/" target="_blank">
                    © 2019 SmartInvoice - A Product of "Abzer DMCC"
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.smartinvoice.ae/terms-and-conditions.html"
                    target="_blank"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="login-small-wrapper">
            <div ui-view autoscroll="false" />
          </div>
        </div>
      </div>
      {/* End: Main */}
      {/* Page Javascript */}
      {/* END: PAGE SCRIPTS */}
    </div>
  );
}
