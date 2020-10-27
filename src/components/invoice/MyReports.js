import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class MyReports extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: 100 }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1">
              <ul className="nav nav-tabs card-tabs medium">
                <li className>
                  <Link to={"/invoice-details"}>
                    <a>
                      <i className="fa fa-fw fa-list-ul green" />
                      &nbsp;My Invoices
                    </a>
                  </Link>
                </li>
                <li className>
                  <Link to={"/my-customer"}>
                    <a>
                      <i className="fa fa-fw fa-user grabber" />
                      &nbsp;My Customers
                    </a>
                  </Link>
                </li>
                <li className="active">
                  <a href="/reports">
                    <i className="fa fa-calendar orange fa-fw" />
                    &nbsp;My Reports
                  </a>
                </li>
              </ul>
              <div className="card" style={{ borderTop: 0 }}>
                <br />
                <form
                  action="/reports"
                  className="form-reports"
                  style={{ padding: "10px 30px" }}
                >
                  <input type="hidden" name="order" id="order" />
                  <input type="hidden" name="direction" id="direction" />
                  <input
                    type="hidden"
                    name="search"
                    id="search"
                    defaultValue={1}
                  />
                  <div className="row text-center">
                    <div className="col-md-2 col-md-offset-1">
                      <label htmlFor="from">Date From</label>
                      <input
                        type="text"
                        name="from"
                        id="from"
                        className="form-control datepicker"
                        onchange="this.form.submit()"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="to">Date To</label>
                      <input
                        type="text"
                        name="to"
                        id="to"
                        className="form-control datepicker"
                        onchange="this.form.submit()"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="status">Status</label>
                      <select
                        name="status"
                        id="status"
                        className="form-control"
                        onchange="this.form.submit()"
                      >
                        <option value>--All--</option>
                        <option value="paid">Paid</option>
                        <option value="partially_paid">
                          &nbsp;↳&nbsp;Partially Paid
                        </option>
                        <option value="unpaid">Unpaid</option>
                        <option value="overdue">&nbsp;↳&nbsp;Overdue</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="document_type">Document</label>
                      <select
                        name="document_type"
                        id="document_type"
                        className="form-control"
                        onchange="this.form.submit()"
                      >
                        <option value>--All--</option>
                      </select>
                    </div>
                    <div className="col-md-2 col-xs-2 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary bold"
                        style={{ marginTop: "24px" }}
                      >
                        <i className="fa fa-search" />
                        &nbsp; Search
                      </button>
                    </div>
                  </div>
                </form>
                <br />
                <ul className="nav nav-tabs nav-tabs-wiki">
                  <li className="active">
                    <a href="/reports">
                      <i className="fa fa-fw fa-calendar orange" />
                      All Invoices
                      <span className="badge badge-all">0</span>
                    </a>{" "}
                  </li>
                  <li className>
                    <a href="/reports/last_month">
                      <i
                        className="fa fa-fw fa-calendar"
                        style={{ color: "#888" }}
                      />
                      Last Month
                    </a>{" "}
                  </li>
                  <li className>
                    <a href="/reports/last_quarter">
                      <i
                        className="fa fa-fw fa-calendar"
                        style={{ color: "#888" }}
                      />
                      Last Quarter
                    </a>{" "}
                  </li>
                </ul>
                <div
                  className="page white shadow"
                  style={{ borderTop: 0, padding: "20px 10px" }}
                >
                  <div
                    style={{ marginLeft: 5 }}
                    className="row text-center medium semibold"
                  >
                    <br />
                    No documents found.
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyReports;
