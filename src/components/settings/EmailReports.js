import React, { Component } from "react";
class EmailReports extends Component {
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
                    E-mail Reports
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
                <div style={{ padding: "0 50px" }}>
                  <h2 className="bold">
                    How often would you like to receive e-mail reports?
                  </h2>
                  <br />
                  <form
                    className="form-horizontal"
                    role="form"
                    action="/email_reports/update"
                    acceptCharset="UTF-8"
                    method="post"
                  >
                    <input name="utf8" type="hidden" defaultValue="✓" />
                    <input type="hidden" name="_method" defaultValue="patch" />
                    <input
                      type="hidden"
                      name="authenticity_token"
                      defaultValue="df3ICohY8yLDtII1/B7r+Uf/ATZS7m8eOstf+Quoxp5P3ZGcNHS43A12IUIVqZFdNe8oO5A+5i4TSY2sUKoHug=="
                    />
                    <div className="radio">
                      <label className>
                        <input
                          type="radio"
                          name="report_frequency"
                          id="report_frequency_WEEKLY"
                          defaultValue="WEEKLY"
                        />
                        Weekly
                      </label>
                    </div>
                    <br />
                    <div className="radio">
                      <label className="bold">
                        <input
                          type="radio"
                          name="report_frequency"
                          id="report_frequency_MONTHLY"
                          defaultValue="MONTHLY"
                          defaultChecked="checked"
                        />
                        Monthly
                      </label>
                    </div>
                    <br />
                    <div className="radio">
                      <label className>
                        <input
                          type="radio"
                          name="report_frequency"
                          id="report_frequency_"
                          defaultValue
                        />
                        Never
                      </label>
                    </div>
                    <br />
                    <br />
                    <input
                      type="submit"
                      name="commit"
                      defaultValue="Update"
                      className="btn btn-primary btn-lg submit"
                      data-disable-with="Update"
                    />
                    &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;
                    <a className="underline" href="/">
                      Cancel
                    </a>
                  </form>
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

export default EmailReports;
