import React, { Component } from "react";
class NameAndEmail extends Component {
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
                    My Name &amp; E-mail
                    <i
                      className="fa fa-times"
                      style={{ margin: "3px 0 0px 7px" }}
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
                  action="/about_me/update"
                  acceptCharset="UTF-8"
                  method="post"
                >
                  <input name="utf8" type="hidden" defaultValue="✓" />
                  <input type="hidden" name="_method" defaultValue="put" />
                  <input
                    type="hidden"
                    name="authenticity_token"
                    defaultValue="grCGP+uI9VdSGPMie7yEBklJj4VP15SOEj2GcPz32EMXuM+WazyVxW3W8e7v6dTOH20a5mB9ygDwKAmUlNRZWQ=="
                  />
                  <div className="form-group">
                    <label className="control-label col-lg-4">My Name</label>
                    <div className="col-lg-4">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue="ShanAslam khan"
                        placeholder="My Name"
                        className="form-control"
                        maxLength={100}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-lg-4" htmlFor="E-mail">
                      E-mail
                    </label>
                    <div className="col-lg-4">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        defaultValue="shanaslamkhan@gmail.com"
                        placeholder="my@email.com"
                        className="form-control"
                        maxLength={100}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-lg-4">
                      Business Name &amp; Billing Address
                    </label>
                    <div className="col-lg-4">
                      <textarea
                        name="billing"
                        id="billing"
                        placeholder="Business Name & Billing Address"
                        className="form-control"
                        rows={5}
                        maxLength={5000}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group text-left">
                    <div className="col-md-8 col-md-offset-4">
                      <input
                        type="submit"
                        name="commit"
                        defaultValue="Save"
                        className="btn btn-primary btn-lg submit"
                        data-disable-with="Save"
                      />
                      &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;
                      <a className="underline" href="/">
                        Cancel
                      </a>
                    </div>
                  </div>
                </form>
                <hr style={{ width: "75%" }} />
                <div className="text-center">
                  <a className="underline" href="/users">
                    Account Removal
                  </a>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NameAndEmail;
