import React, { Component } from "react";
class ChangePassword extends Component {
  state = {};
  render() {
    return (
      <div className="padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1">
              <ul className="nav nav-tabs card-tabs medium">
                <li className>
                  <a href="/">
                    <i className="fa fa-fw fa-list-ul green" />
                    &nbsp;My Invoices
                  </a>
                </li>
                <li className>
                  <a href="/customers">
                    <i className="fa fa-fw fa-user grabber" />
                    &nbsp;My Customers
                  </a>
                </li>
                <li className>
                  <a href="/reports">
                    <i className="fa fa-calendar orange fa-fw" />
                    &nbsp;My Reports
                  </a>
                </li>
                <li className="active">
                  <a href="/">
                    Change Password
                    <i
                      className="fa fa-times"
                      style={{ margin: "3px 0 0 7px" }}
                    />
                  </a>
                </li>
              </ul>
              <div className="card" style={{ borderTop: 0 }}>
                <br />
                <br />
                <form
                  className="form-horizontal"
                  role="form"
                  autoComplete="off"
                  action="/password/update"
                  acceptCharset="UTF-8"
                  method="post"
                >
                  <input name="utf8" type="hidden" defaultValue="✓" />
                  <input type="hidden" name="_method" defaultValue="put" />
                  <input
                    type="hidden"
                    name="authenticity_token"
                    defaultValue="tTlaqd0C4yjUrHEVxPlV0UYqA4Leio9DWjFFLVe9QDlAL/k1dMFcV22JV2h6o+Oh4FnQJkJKT830+7sVuO52cg=="
                  />
                  <div className="form-group">
                    <label className="control-label col-lg-4">
                      Current Password
                    </label>
                    <div className="col-lg-4">
                      <input
                        type="password"
                        name="current_password"
                        id="current_password"
                        placeholder="Current Password"
                        className="form-control"
                        maxLength={100}
                        autoComplete="current-password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-lg-4">
                      New Password
                    </label>
                    <div className="col-lg-4">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="New Password"
                        className="form-control"
                        maxLength={100}
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-lg-4">
                      Confirm New Password
                    </label>
                    <div className="col-lg-4">
                      <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Confirm New Password"
                        className="form-control"
                        maxLength={100}
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                    <div className="col-md-8 col-md-offset-4">
                      <input
                        type="submit"
                        name="commit"
                        defaultValue="Update"
                        className="btn btn-primary btn-lg"
                        data-disable-with="Update"
                      />
                      &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;
                      <a className="underline" href="/">
                        Cancel
                      </a>
                    </div>
                  </div>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
