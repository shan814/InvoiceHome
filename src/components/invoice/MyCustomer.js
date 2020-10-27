import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "./Categories";
import HomeCategories from "./HomeCategories";
class MyCustomer extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: 100 }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1">
              <ul className="nav nav-tabs card-tabs medium">
                <li className>
                  <a>
                    <i className="fa fa-fw fa-list-ul green" />
                    <Link to={"/invoice-details"}>&nbsp;My Invoices</Link>
                  </a>
                </li>
                <li className="active">
                  <a>
                    <i className="fa fa-fw fa-user grabber" />
                    &nbsp;My Customers
                  </a>
                </li>
                <li className>
                  <Link to={"/my-reports"}>
                    <a>
                      <i className="fa fa-calendar orange fa-fw" />
                      &nbsp;My Reports
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="card" style={{ borderTop: 0 }}>
                <HomeCategories />
                {/* <div
                  className="medium text-center switch-to"
                  style={{ margin: "25px 0 25px 0" }}
                >
                  <a className="nolink" href="/invoice/new">
                    <span
                      className="fa-stack fa-lg"
                      style={{
                        color: "#00CC33",
                        cursor: "pointer",
                        position: "relative",
                        top: "-3px",
                      }}
                    >
                      <i
                        className="fa fa-circle fa-stack-2x"
                        style={{ color: "white" }}
                      />
                      <i className="fa fa-plus-circle fa-stack-2x" />
                    </span>
                    <span
                      id="switch"
                      style={{ color: "#339933", cursor: "pointer" }}
                    >
                      New:
                    </span>
                  </a>
                  &nbsp;&nbsp;
                  <a href="/invoice/new">Invoice</a> |
                  <a href="/tax-invoice/new">Tax Invoice</a> |
                  <a href="/proforma-invoice/new">Proforma Invoice</a> |
                  <a href="/receipt/new">Receipt</a> |
                  <a href="/sales-receipt/new">Sales Receipt</a> |
                  <a href="/cash-receipt/new">Cash Receipt</a>
                  <br />
                  <a href="/quote/new">Quote</a> |
                  <a href="/estimate/new">Estimate</a> |
                  <a href="/credit-memo/new">Credit Memo</a> |
                  <a href="/credit-note/new">Credit Note</a> |
                  <a href="/purchase-order/new">Purchase Order</a>
                </div> */}
                <form
                  className="form-inline"
                  style={{ marginBottom: "30px" }}
                  action="/customers"
                  id="search_form"
                >
                  <div className="row text-center">
                    {/* <div className="col-md-12 col-xs-12"> */}
                    <div className="form-group">
                      <input
                        name="q"
                        type="input"
                        className="form-control search"
                        id="q"
                        placeholder="Search by Customer, Address, or Item"
                        style={{ borderColor: "#ccc" }}
                        // defaultValue
                        maxLength={100}
                        style={{ marginLeft: 10 }}
                      />
                    </div>
                    &nbsp;
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginLeft: 10 }}
                    >
                      <i className="fa fa-search" />
                      &nbsp;&nbsp;Search
                    </button>
                  </div>
                  {/* </div> */}
                </form>
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="/customers">
                      All Customers<span className="badge badge-all">0</span>
                    </a>
                  </li>
                  <li className>
                    <a href="/customers/overdue">
                      Overdue<span className="badge badge-overdue">0</span>
                    </a>
                  </li>
                  <li className>
                    <a href="/customers/unpaid">
                      Unpaid<span className="badge badge-unpaid">0</span>
                    </a>
                  </li>
                  <li className>
                    <a href="/customers/paid">
                      Paid<span className="badge badge-paid">0</span>
                    </a>
                  </li>
                </ul>
                <div
                  className="page white shadow"
                  style={{ borderTop: 0, padding: "20px" }}
                >
                  <div style={{ paddingBottom: "15px" }} />
                  <div
                    className="row text-center medium semibold"
                    style={{ paddingBottom: "20px" }}
                  >
                    No customers here.
                  </div>
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

export default MyCustomer;
