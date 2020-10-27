import React, { Component } from "react";
import HomeCategories from "../invoice/HomeCategories";

class HomeEstimate extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: 100 }}>
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
                <li className>
                  <a href="/customers/41154575">
                    <i className="fa fa-fw fa-folder-open-o red" />
                    New Customer
                  </a>
                </li>
                <li className="active">
                  <a href="/customers/41154575">
                    <i className="fa fa-fw fa-close fa-lg" />
                    New Invoice
                  </a>{" "}
                </li>
              </ul>
              <div className="card" style={{ borderTop: 0 }}>
                <HomeCategories />
                <ul className="nav nav-tabs nav-tabs-wiki " style={{}}>
                  <li className="active-invoice-tab-for-user">
                    <a
                      id="change-invoice-type-to-basic"
                      className="acts-as-link"
                    >
                      Basic Form
                    </a>
                  </li>
                  <li className style={{ whiteSpace: "nowrap" }}>
                    <a
                      id="change-invoice-type-to-advanced"
                      className="acts-as-link"
                    >
                      Advanced Form - <b>Due Date</b>, <b>Ship To</b>,{" "}
                      <b>Qty</b>
                    </a>
                  </li>
                  <li>
                    <a id="save-invoice" className="acts-as-link">
                      <i className="fa fa-fw fa-save fa-lg" />
                      &nbsp;Save Estimate
                    </a>
                  </li>
                </ul>
                <div
                  className="page"
                  style={{
                    padding: "0 15px",
                    borderTop: 0,
                    backgroundColor: "#FFF5CD",
                  }}
                >
                  <form
                    className="edit_invoice"
                    id="invoice-form"
                    action="/invoices/41154575"
                    acceptCharset="UTF-8"
                    data-remote="true"
                    method="post"
                  >
                    <input name="utf8" type="hidden" defaultValue="✓" />
                    <input type="hidden" name="_method" defaultValue="patch" />
                    <input
                      type="hidden"
                      name="authenticity_token"
                      defaultValue="OzDAH98o0RmerL53f4DbO2mSJbJAmxv/AmtM6FWrHmN+H9E0mdjYEhvuFp/COkG1dJeOZjebLu5+gUdkS9uSAA=="
                    />
                    <input
                      type="hidden"
                      name="invoice[invoice_type]"
                      id="invoice_type"
                      defaultValue="BASIC"
                    />
                    <input
                      type="hidden"
                      name="redirect_page"
                      id="redirect_page"
                      defaultValue
                    />
                    <input
                      type="hidden"
                      name="save_clicked"
                      id="save_clicked"
                      defaultValue
                    />
                    <input type="hidden" name="ref" id="ref" defaultValue />
                    <br />
                    <div className="row">
                      <div className="col-xs-8 col-md-8 form-group">
                        <label htmlFor="invoice_from">
                          <i className="fa fa-user icon" />
                          &nbsp;&nbsp;From
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Your Company or Name
      Address"
                          rows={5}
                          style={{ height: "8em" }}
                          tabIndex={1}
                          maxLength={5000}
                          name="invoice[from]"
                          id="invoice_from"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-xs-4 col-md-3 col-md-offset-1">
                        <div id="logo" style={{ padding: "25px 0" }}>
                          <input
                            type="hidden"
                            name="invoice[logo_id]"
                            id="invoice_logo_id"
                          />
                          <a className="show-modal-logo nolink" href="#">
                            <button
                              type="button"
                              className="btn btn-default btn-gold btn-lg"
                              style={{
                                width: "100%",
                                padding: "20px 0",
                                fontSize: "16px",
                              }}
                            >
                              Your Logo
                              <br />
                              <img
                                className
                                style={{ position: "relative", top: "-2px" }}
                                src="https://images.invoicehome.com/all-logos.png"
                                width={16}
                                height={16}
                              />
                              <br />
                              Logo Gallery
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-8 col-md-8 form-group">
                        <label htmlFor="invoice_billing">
                          <i className="fa fa-female icon" />
                          <i className="fa fa-male icon" />
                          &nbsp;&nbsp;Bill To
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Your customer's billing address"
                          rows={5}
                          style={{ height: "8em" }}
                          tabIndex={2}
                          maxLength={5000}
                          name="invoice[billing]"
                          id="invoice_billing"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-xs-4 col-md-3 col-md-offset-1 form-group">
                        <label htmlFor="invoice_number">
                          <i className="fa fa-search icon" />
                          &nbsp;Estimate #
                        </label>
                        <input
                          className="form-control"
                          placeholder="Estimate Number"
                          tabIndex={3}
                          maxLength={100}
                          size={100}
                          type="text"
                          defaultValue={100}
                          name="invoice[number]"
                          id="invoice_number"
                        />
                        <br />
                        <label htmlFor="invoice_date_issued">
                          Estimate Date
                        </label>
                        <input
                          className="form-control datepicker"
                          placeholder="dd/mm/yy"
                          tabIndex={4}
                          maxLength={100}
                          autoComplete="off"
                          size={100}
                          type="text"
                          defaultValue="25/10/2020"
                          name="invoice[date_issued_string]"
                          id="invoice_date_issued_string"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-xs-6 form-group">
                        <i className="fa fa-pencil icon" />
                        &nbsp;&nbsp;<b>Description</b>
                      </div>
                      <div className="col-xs-2 form-group text-left">
                        <b>Amount</b>
                      </div>
                      <div className="col-xs-3 form-group">
                        <b>Tax</b>
                      </div>
                      <div className="col-xs-1 form-group" />
                    </div>
                    <div id="items">
                      <input
                        type="hidden"
                        name="invoice[items_attributes][0][id]"
                        id="invoice_items_attributes_0_id"
                        defaultValue={74238328}
                      />
                      <div className="row">
                        <div className="col-xs-6 col-md-6 form-group">
                          <textarea
                            name="invoice[items_attributes][0][description]"
                            id="invoice_items_attributes_0_description"
                            placeholder="Description"
                            className="form-control description"
                            rows={2}
                            tabIndex={74238328}
                            maxLength={5000}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-xs-2 col-md-2 form-group">
                          <input
                            type="text"
                            name="invoice[items_attributes][0][amount]"
                            id="invoice_items_attributes_0_amount"
                            defaultValue={0.0}
                            placeholder="Amount"
                            className="form-control amount"
                            tabIndex={74238328}
                            maxLength={100}
                          />
                        </div>
                        <div
                          className="col-xs-3 col-md-3 form-group"
                          style={{ position: "relative" }}
                        >
                          <input
                            type="hidden"
                            name="invoice[items_attributes][0][tax_rate_id]"
                            id="invoice_items_attributes_0_tax_rate_id"
                          />
                          <input
                            type="hidden"
                            name="invoice[items_attributes][0][tax_rate_id_2]"
                            id="invoice_items_attributes_0_tax_rate_id_2"
                          />
                          <button
                            type="button"
                            id="invoice_items_attributes_0_tax_rate_name"
                            className="btn btn-default btn-gold show-modal tax-rate-name"
                            data-index={0}
                            style={{ width: "100%" }}
                            data-item-id={74238328}
                            data-locale="en"
                          >
                            Add a Tax
                          </button>
                        </div>
                        <div
                          className="col-xs-1 col-md-1 form-group"
                          style={{
                            padding: "7px 0",
                            float: "left",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <input
                            type="hidden"
                            name="invoice[items_attributes][0][_destroy]"
                            id="invoice_items_attributes_0__destroy"
                          />
                          <i
                            className="fa fa-times delete-item acts-as-link red"
                            title="Delete Item"
                            style={{ fontSize: "1.666em" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6 col-md-6 form-group">
                        <button
                          name="button"
                          type="button"
                          className="btn btn-default btn-gold"
                          id="add-saved-item"
                          style={{ width: "100%" }}
                        >
                          <i className="fa fa-list-ul" />
                          &nbsp;&nbsp;Add Saved Items
                        </button>
                      </div>
                      <div className="col-xs-6 col-md-6 form-group">
                        <button
                          name="button"
                          type="button"
                          className="btn btn-default btn-gold"
                          id="add-item"
                          style={{ width: "100%" }}
                        >
                          <i className="fa fa-plus" />
                          &nbsp;&nbsp;Add New Item
                        </button>
                      </div>
                    </div>
                    <div id="total">
                      <div className="row">
                        <div className="col-xs-5" />
                        <div className="col-xs-4">
                          <h4 className="bold">Subtotal</h4>
                        </div>
                        <div className="col-xs-3 text-right">
                          <h4 className="bold">0.00</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-5">&nbsp;</div>
                        <div className="col-xs-3">
                          <h2 className="bold" style={{ paddingTop: "10px" }}>
                            TOTAL{" "}
                            <span className="dotted">
                              <a
                                className="currency-formats nolink show-modal-currency-format"
                                title="Change Currency & Formatting"
                                data-toggle="tooltip"
                                data-placement="top"
                              >
                                PKR&nbsp;
                                <sup
                                  className="dodge"
                                  style={{ fontSize: "50%", top: "-.7em" }}
                                >
                                  Edit
                                </sup>
                              </a>
                            </span>
                          </h2>
                        </div>
                        <input
                          type="hidden"
                          name="invoice[currency]"
                          id="invoice_currency"
                          defaultValue="PKR"
                        />
                        <input
                          type="hidden"
                          name="invoice[currency_format]"
                          id="invoice_currency_format"
                          defaultValue="%s %n"
                        />
                        <div className="col-xs-4 text-right">
                          <h2 className="bold" style={{ paddingTop: "10px" }}>
                            <a
                              className="currency-formats nolink show-modal-currency-format dotted"
                              title="Change Currency & Formatting"
                              data-toggle="tooltip"
                              data-placement="left"
                            >
                              ₨ 0.00
                            </a>
                          </h2>
                        </div>
                      </div>
                      <br />
                    </div>
                    <div className="row">
                      <div className="col-xs-8 col-md-8 form-group">
                        <label htmlFor="invoice_footer_1">
                          <i className="fa fa-building-o icon" />
                          &nbsp;&nbsp;<b>Terms &amp; Conditions</b>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Optional"
                          rows={5}
                          style={{ height: "8em" }}
                          tabIndex={20}
                          maxLength={5000}
                          name="invoice[footer_1]"
                          id="invoice_footer_1"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-xs-4 col-md-3 col-md-offset-1">
                        <div id="signature" style={{ padding: "25px 0" }}>
                          <input
                            type="hidden"
                            name="invoice[signature_id]"
                            id="invoice_signature_id"
                          />
                          <a className="show-modal-signature nolink" href="#">
                            <button
                              type="button"
                              className="btn btn-default btn-gold btn-lg"
                              style={{
                                width: "100%",
                                padding: "20px 0",
                                fontSize: "16px",
                              }}
                            >
                              Your Signature
                              <br />
                              <i
                                className="fa fa-pencil-square-o fa-lg blue"
                                style={{ paddingTop: "20px" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div
                    className="modal fade light-blue-modal"
                    id="myModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close close-big choose-last-tax"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <h4 className="modal-title text-center black">
                            Add a Tax
                          </h4>
                        </div>
                        <div className="modal-body">
                          <div id="tax-rates"></div>
                          <div id="new-tax-rate"></div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-link close-window-link"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <input
                    type="hidden"
                    name="target-item"
                    id="target-item"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    name="choose-last-tax"
                    id="choose-last-tax"
                    defaultValue
                  />
                  <div
                    className="modal fade light-blue-modal"
                    id="logoModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header text-center">
                          <button
                            type="button"
                            className="close choose-last-logo close close-big"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <h4 className="modal-title black">Select Logo</h4>
                        </div>
                        <div className="modal-body">
                          <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                              <a
                                href="#cliparts"
                                aria-controls="cliparts"
                                role="tab"
                                data-toggle="tab"
                              >
                                <i className="fa fa-fw fa-image forestgreen" />{" "}
                                Clipart
                              </a>
                            </li>
                            <li role="presentation" className>
                              <a
                                href="#people"
                                aria-controls="jobs"
                                role="tab"
                                data-toggle="tab"
                              >
                                <i className="fa fa-fw fa-user-md blue" />{" "}
                                People
                              </a>
                            </li>
                            <li role="presentation" className>
                              <a
                                href="#jobs"
                                aria-controls="cartoons"
                                role="tab"
                                data-toggle="tab"
                              >
                                <i className="fa fa-fw fa-paint-brush red" />{" "}
                                Jobs
                              </a>
                            </li>
                            <li role="presentation" className>
                              <a
                                href="#your_logo"
                                aria-controls="your_logo"
                                role="tab"
                                data-toggle="tab"
                              >
                                <i className="fa fa-fw fa-save" /> Your Logo
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane active"
                              id="cliparts"
                            >
                              <div id="cliparts_list">
                                <br />
                                <div className="row medium text-right">
                                  <div className="col-md-12 black">
                                    Filter by Color&nbsp;&nbsp;
                                    <a
                                      className="nolink"
                                      title="All"
                                      data-remote="true"
                                      href="/logos"
                                    >
                                      <img
                                        className
                                        style={{
                                          position: "relative",
                                          top: "-2px",
                                        }}
                                        src="https://images.invoicehome.com/all-colors-selected.png"
                                        width={18}
                                        height={18}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Black & White"
                                      data-remote="true"
                                      href="/logos?color_id=7"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "black" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Red"
                                      data-remote="true"
                                      href="/logos?color_id=1"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(204,61,59)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Beige"
                                      data-remote="true"
                                      href="/logos?color_id=8"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(226,144,0)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Yellow"
                                      data-remote="true"
                                      href="/logos?color_id=5"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(253, 205,0)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Orange"
                                      data-remote="true"
                                      href="/logos?color_id=6"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(255,128,53)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Blue"
                                      data-remote="true"
                                      href="/logos?color_id=2"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(54,116,197)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Light Blue"
                                      data-remote="true"
                                      href="/logos?color_id=3"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(79,178,218)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Green"
                                      data-remote="true"
                                      href="/logos?color_id=4"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(80,175,58)" }}
                                      />
                                    </a>
                                    &nbsp;
                                  </div>
                                </div>
                                <div className="ajax-pagination text-center">
                                  <div
                                    role="navigation"
                                    aria-label="Pagination"
                                    className="pagination"
                                  >
                                    <span className="previous_page disabled">
                                      ← Previous
                                    </span>{" "}
                                    <a
                                      className="next_page"
                                      rel="next"
                                      href="/logos?id=41154575&page=2&ref="
                                    >
                                      Next →
                                    </a>
                                  </div>
                                </div>
                                <div className="row">
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={960}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603636288&Signature=B93wWUu~y1-KfqEeHkuq9BrKZXgP-~AFofpV7M74Q-TD4Sgqwv~a2hOVsDVaR~KK9scBRtUOZq~DtuMHKit6f2a1RMKgQmwEJTaf7cvEXdEnvOI4aQv1zZl~FKqgb3Q~aAe6ONZ2TcRUXM-LAOdj0mfIcGa5IfCRWllVRqwySbW0PXOXrdXjYeyCGaen81O9qHdgc38cDkgqHyATwnYJgLzuqd2f8z46ZpppsJvNb9fgkHTVO2HjOaDsnSJbuMq~ZQnZuwQnv2FutNkzjV0LF6fvr-e9N01RDYBpFZpb7yCQXhsViv7PsUwWeFBneNvVDTq8YKLQfaCbjN8en032lw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={960}
                                    >
                                      Coffee Yellow Hand-Drawn
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={844}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603636288&Signature=ip3BFZcN9-TVy2nX3~pRL5I-fpgmw5c9lA6NnG~5Cgg50a8b1O9wd6NwejF2P~E28fH14eXuxztTC99wmZ1O2BMDDFSD6N2CKNpgb2sAV2w6NNNCrXwDu0tEDQ0k~ulP2npjiKn8A3S~NB9oLhSG3nGwfOTN4hqaYPWtAcJQmhiWliJp9lqEzStcZrS-V0vC6deZdpIP3lSno4gQW0zsFA5ejbsQBvG0YmAlGutoD2Wpsyj5hxjBnrOuWqTo-95wdJ9Qd0K4YxNPISUZy7lN3cntn6esGomYb~JW-r5V9etduBkuAGHe3jwoI4ViK1w3rXoBzmrGTXwe9K~KlE0kyw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={844}
                                    >
                                      Gardener Green Hand-Drawn
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={918}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603636288&Signature=oYjLc3T4wBprlvBlKIeK4JtgdsuHC5tmjozsZxSkgxtITAxCa~q018e1Z84owJoTJPe1Y6bhonqHc9t6Y27KCxml4Of~Z~ijlDK5X-xFgXZNewbTSt7B9ujnDyL-MmJtYVL2b-AUUwHaZvveoIZ3jR-f0TbW4k87jsXjwjZLfQGHftKDL5ui~00FyUYYk-MrZccGT92UFZah~TLNAuHB6sALuM~hH2GjkneMv5gLvar06r-~rflqNkboqm-J4H6HSow~B4aPVN~Io6xNLfoyUonXeeDG28X98KxVU6lTSkJbsET8N36uq6PCFmYqEqRQTWI053aYVRMFHMQdMH8LQQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={918}
                                    >
                                      Health Red Hand-Drawn
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={176}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603636288&Signature=jYqaYiQJ1TASN5amaGgyOe8CFnin9IJ40zxqa41xXbuQIdQ485zOPuUKsAYWB8e8Xz7CShXpgIr3oNbBjm9q9YPuwnldVWaxq3OXuegX~loNI9~pRGwFNQl5iC8h5JPepqKUvqHNS-jHA3l6n5aXvjOVUwKz~8keT8WORJkNsukBKd1j3TdjiA5zBRSGeGXBmyIif23ffGBCDII41COqMduxWjqmp1UgeQ3~w3VCj8Ml6psi~iGhNFWzB0eV~BuBQUPRSTlS7cFKx2xMmwXBahwO3CkB1BcFRtmup-iIZY3sDwQLV834RZosgH1UcOcnNAcP~EpPqENaobbzs8HDuQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={176}
                                    >
                                      Hair Beauty Red
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={876}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603636288&Signature=jf5AqXe860JzA13JF~35eE3wylreULOF0KeCBwXK3Q4qgvkAJzz8nQNSJq1vqWlgpXOR0QdmKql2AhBz2~gp4F0XJ93mQ-3XjPRA3nvT1T~0LGWTlsbZ~3PY1fuahUHGm30kLECk5t~Ndlea3BvzMGS-NtRSFsydDeYWdxeDAq45Vcf43bq5bx5~KWjtRpurM9y88L5Q8zxHHqN23qkaDLzqV7oPDLb1QbdqDaysr0DqxHboPcvuVqtWiSK~p4SMkzfeyiU4c6K-t2HI2UUS~z9o4PPjy7WPj7XiIblpzNaXB4l9iq-c5u4224R52oleuZ5-j93Ye-VOwaqgRBCuUg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={876}
                                    >
                                      Repair Man Light Blue Hand-Drawn
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={1155}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603636288&Signature=c36jhsZvfRfU-rnspKZIZbDHvCOrv4GtWI3m9Aqvyvyp5lMXKSwb8znIsp9D5tV~JxBs7uN4Rzi2P17UEFrUPe-Sy4cRdq3xiPiZTkVrAn2HoW8MH-v70S2MSmtTffKflDNBbnGRQro0OPls0D1SuElwGG3liiM7HwOdUC9aTw~t4NPJ5udKBCbMdQFmVYHdjMYqa6ZuurTGWFupbcvQsDdKUphlCRBKtP6eMbh5ommKOucSMlDr-B71fEwHnf8~BRGd2QynkEy0d4ZhxQM27t8hbYDJWy~AtwQ6X1ecupQlAE6wmIrANjPhna7RFwAr4Xmz2c-K4AC24wkd9Z47gQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={1155}
                                    >
                                      Analyst Green 3D
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={873}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603636288&Signature=UceUQ4T7qJTG3DKIgarhxetlpoNcZK0VRKwn6bnyDMbc4POp4yJ~aSGQHaSK48aTehr3KtW8goTXpPoAt56Y9k0OqqxPnvguyNwC8xdW3qx5n2IeiyLeuiIhwLa6mXhiJGv2msg-lz2f0DbZg2WTt11TpdAnQWGfEMJM9HGX-UerG3YmFwfdchmqWLzjNCcON2Om1aBt3wNKABJeB9awupZ2vG3euV1zbvqWyE0xDuwhYoBJeeIsQy24QySuxicQmd1gBw4RjazutKLKI7TaPpSsVGiE6fVRfUPtBwPyqzvza2vkPrpwCWodLcKx8rTQfsK4CAUGL3ztT8kiOCf5Rw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={873}
                                    >
                                      Legal Light Blue Hand-Drawn
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={907}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603636288&Signature=AS6KjVEkSpoeeFg4a~SRKIMViXZPS4VEf7SC6bTqi6larw3AVNHo89TYKgpvC5JvOpVOd~K6cEA~bH761LO-gDvYXmDZSs6~vQZ8LXp-YSjH9D5L1Vm3r0JCEaMeO4TqGDVgR8KEeQCyMr3jovUvwJK2EXFKwD0bbn~CMtaVyEa-tPqVHXXc3D0cMHdetM9vl1wmvNKcV3K2dd6rIgBwDwYDVyxtvSNJgUXdGgdHQFGkQEfPFb6GfBwCuNps~Txj2trhKMTpCRi31rXj5NzK-oFgIRTMEmMsNdn1bX9SVgVbHYc0FjfejXgZ-usz2vMw8wOTiUUgjJMbsuZtVYhAig__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={907}
                                    >
                                      Butcher Red Hand-Drawn
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={144}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603636288&Signature=BqFW46574Aeda4okhYno0rbzlyuhsgemitKS~O6bbOvkoMI1uZmECJCj978nzw1D2Yqr1wLOPBPzkes4RgCn~NeIh5RfJBLyuRAQdd~FgRc5w9Z-4jeQc9FwSSZb5LVN-hM4HiJYL~tDXdLfztzH614D3iLcos6Unu-1iYKiYrS3QiPsyQfokeR7X1mwaz21iz9dz63vTXjsgrqjko4PhIvgZYFUVCb-GqSAD83kO0ShaUl25eLa6bgiscuC5vgVseoIK8fFz6f-PKCA-3VFzo6Gndwj5adoSpOZCMy13e-jvW6odRawn2Ipcoy4gHh1MDOjBKadNPMepHy0jwI10A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={144}
                                    >
                                      Handyman Yellow
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="jobs">
                              <div id="jobs_list">
                                <br />
                                <div className="row medium text-right">
                                  <div className="col-md-12 black">
                                    Filter by Color&nbsp;&nbsp;
                                    <a
                                      className="nolink"
                                      title="All"
                                      data-remote="true"
                                      href="/logos?category=JOBS"
                                    >
                                      <img
                                        className
                                        style={{
                                          position: "relative",
                                          top: "-2px",
                                        }}
                                        src="https://images.invoicehome.com/all-colors-selected.png"
                                        width={18}
                                        height={18}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Black & White"
                                      data-remote="true"
                                      href="/logos?category=JOBS&color_id=7"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "black" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Red"
                                      data-remote="true"
                                      href="/logos?category=JOBS&color_id=1"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(204,61,59)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Beige"
                                      data-remote="true"
                                      href="/logos?category=JOBS&color_id=8"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(226,144,0)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Yellow"
                                      data-remote="true"
                                      href="/logos?category=JOBS&color_id=5"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(253, 205,0)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Orange"
                                      data-remote="true"
                                      href="/logos?category=JOBS&color_id=6"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(255,128,53)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Blue"
                                      data-remote="true"
                                      href="/logos?category=JOBS&color_id=2"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(54,116,197)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Light Blue"
                                      data-remote="true"
                                      href="/logos?category=JOBS&color_id=3"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(79,178,218)" }}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Green"
                                      data-remote="true"
                                      href="/logos?category=JOBS&color_id=4"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "rgb(80,175,58)" }}
                                      />
                                    </a>
                                    &nbsp;
                                  </div>
                                </div>
                                <div className="ajax-pagination text-center">
                                  <div
                                    role="navigation"
                                    aria-label="Pagination"
                                    className="pagination"
                                  >
                                    <span className="previous_page disabled">
                                      ← Previous
                                    </span>{" "}
                                    <a
                                      className="next_page"
                                      rel="next"
                                      href="/logos?category=JOBS&id=41154575&page=2&ref="
                                    >
                                      Next →
                                    </a>
                                  </div>
                                </div>
                                <div className="row">
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25275}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603636288&Signature=VOgryrlcPBHkmhsR-Nd0vyWkOrJena2CXIfRqEd6Zbga5QH6Doz51t8qHSWHFSxNiVmaWkqde1fqhJ46TMegeLlC6Fg3LN5uBImi~MqB4PWhzYSBlUk1Wgv-kdBHeh2Wb-urt1cQBjedAB0-B7n3f5QCFU-6nv2MrEZkC6GpfcbAvsTtiFTaPBA64x7NBEN-lwesbpNveoY8NtQuMHc2FRulWTJUIPRN0IRf4EoJ5u2Bt0ESKsdcf~7FvaB735uCtkt5bnbZ16vsHfQSrMAiYd0AaX1hr-eRv261c0QpstYPgoEWuwWwCDrjTevLrsFMqUL8Lsn8e3nygC-BH9cwsw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25275}
                                    >
                                      Accountant
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25274}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603636288&Signature=NAFDvFmY-WRWiNFdEKY9T9gUPL9dNKN3Ibk3mUpcXFppyyVaREbPjOzeBLM27Kks5ddYkS-0u1t4W7i0vz1wD~D9CMvr1yipNfTyrWys61zP4Ux6ZjsOAHi7JVNEh6JIdgaCV4FnLFQj66Rp3BBnQ~rdlT4uRAqBjcvSkpI7Noh9J80JKJclvj~XYI8Z6WFnzMtkvV9S3PxkpUm5I5XwGy8apSjkXHGPXk0DD9DlyAszZrXY0P~zsaAZ7tZE4f5sEcKw8NpfO9sRBNWg4tAYZcmS~4iqAqefKl6eeooC1Th1OMeC6Try-FdByBHuPIHjLcmQ6IjldrhhZXjjUsQusg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25274}
                                    >
                                      Actor
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25273}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603636288&Signature=AEh2JJVvCVCX~TwB2oK8VWK0FibAbSCks0JVXv-SRZqBzsjG6ST1zfZuKZTm0UTsT2gBji7wKMenUX1ZZtUHes23EV8m6e6JNxjkGXWeh5fTiISmHLxrVyD75sB0tXxqur0IdBDpDwTDLa42tXgmVXIxG0J856j-mFYJcicAca42g5Kugk~3BfttUUY3D4nmaI1uPYE9gMOT8S82QqS~nszT3vvN04pZoAZYEzvNmwhoW32575FOL6OQvxwohMGClm7~6X5tq4-Ac-Obxkik5ACtQjiYimuI72fHryDg25XZ5r2Ypml9URmfQpeT3DPboJJI9v8IxYPIwYA3X2ECZg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25273}
                                    >
                                      Agent
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25272}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603636288&Signature=Fj650RNTmbnaukGpmPhKuWOB1HFsGBTazwVeAsRtEEnwzlC31ndmu~MvBGNSE-2XTFSdVU1CZ4C2wVyoet21QOYbodY1g8ymp4KivLzKcQP3~x9PIKVg2z8gCqTFXWYSpQXhAqp-2Sjypeky5-TjZU1w8P-MJDAb9D1Dh6rBIwj9CLfzbZuYwQVKfPTaZeuQYVLuuEtioMQwsEr28jxc8AzfsWEfMT-pkg~cDGtiaCoRWealVlN81MWjt-7ngirlCP7G7sMx5~EHu1ZjVb1mAMmHvdx4pkRoYftg4u3xlH4T-xNuOe2orkt6~R3A3ggysxuvx7p6kbfvmEzeI0XVAA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25272}
                                    >
                                      Analyst
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25271}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603636288&Signature=FQs6ndd9qOwo3rMprKHr2xOFffWkRlWxgzcPfER7jBEJzbyh7anVvYtNavj1j4WudKVvxSi9cVaF4xc53QwOLidljOjd6eXxKjWXpr7kH8n1DT64S12uNBPVePmxOEyPiHDVd7RxTB~VpqsKtA32deE1CHj5dAhPyk2O0tVo9MJOzrazyn4SpXz9b8tfX6w2azC4CU3FiASTMFq8BUpVlM5ECECVy-r4ry330JFasKdP3m1Hud4-G5nxQPTzFiL8ipm3h232q15nV8F06eR6FOG5z92RvTg97JWh6hF0L6aBdFcSXfe1z5D9eLen3GBDWKxME84OdBjOMdLhv9XuJA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25271}
                                    >
                                      Architect
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25270}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603636288&Signature=D9bfTTXjjC6b0t-iREqHP6GTFWoLYxfWPn9XBN79NfZ939SWCeJsZI44vKJ83UGyyi6Ksb5x-WhpRWdbse5I-5dTJkU1NKkPwarW4hPTdvN~nxhhh~VkoDBswX19nqSm3kYYh2GcqYJ~5SIYbOSM3E3aD1GpHkvTEXNPztJErRbS1HjzrlGng1KuvZ1a9w2QdD8gjRuRpTXkMZbHaoR7CzOPXefoWZUNzHuLtDJR7yTunjDGYLUyMNTU38wvQBP5JK0J~o8s0~RKyN6izvaWIARuc4Y3Dv9QLD4lppWA5KKz8ph6fkAPW~HlAcdeXku~f595O7g29osP8YN5ZxxDcg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25270}
                                    >
                                      Babysitting
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25269}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603636289&Signature=kuJfVodP4dxHBXbvjdn0RGEexJ8mFpj~LhK5MTFHvRfPceIrzM70lLaExUNqSYi6nxFwxp0l84Y0kivHcpQfBkc5B4N2SMOOzKvoQzWyDqB3ZlBc0pth6Cla~BDiwezfQ87fP7WToKfgfz7kjiUNhfc2eooFfYuS5roAzrSWn4DFdsJRZ6PqpueAIfpUoNCzgy0V4ReQwZtPwB3oadQDChYGH-zu72KOKqlhDjFuTsRJDBL~rOAN4QHpA-20Bt~QvTBRZcI~CVw63KCPnoc1R4~KHpXO4w8kpttmQPillS-xMjuvBGahp36DK8eG3uMinb2XfO-rfvCmjUFVtt~odA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25269}
                                    >
                                      Babysitting
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25268}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603636289&Signature=SlRcpWw29alt2pkNsYdCNcbcubNiY2GPQm-2D-3YtGqtnOg8AQF91MSUcYJHqyhfY8p0vVk0R8rew3RJgBzHyGsLWQ-CNOdu4MYE8Qcl9~8jcTbPu7iw8nrGSBiCS9XyVdwiDIRydT-VbCpyy5Nwdo1R~6KQkCAMdeNMXw7hFoZZ24Wr3apgCkHyo0XpCGa-uh6T~L9EDGcdkd~EfVvxDI4gVwh6nK8hkVPs4Y-0LKFijKfNzStUyzjoJSHGfvwaSYQOVNeg0mFgka2OD9Gq8mxXKqCPnlVs5PM7K2ICEob8UV2WIT50iMiafOyL4DRTNEE68R4FjCdLgm60RlIszA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25268}
                                    >
                                      Baker
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={25209}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603636289&Signature=fDoMmv8ROAznG6ycJMskjYVeXchdJUvFXtNw6PkvhQYhP3Ox-cla28UFSJjJgCXpLwfyVp14WX1WOUhUUhLBrJ9jzdlFXcqdNdyiK7Hoi1~0Q9XnNfAOR9B7OvZI3WeRDYuBwuPNSj1CfUPCg-13QrzLWasjFlD-fzXhG13IQAku0VriOZ9OtrQN1ej-FSxJlkGodojfoMNC2uJadwgy07MYeRwdsRVsRHs1rh6NQGqGSycGWxeLVNhQb52T~Yg25NNHDSgPNi965y8Y~cHQuZrwQ3RyX2zW4Kv78S0q99EFvSRxV3xMDYvjB7FCIikR7Ebm~0V3jbxNNnX3M~egvA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                      width={200}
                                      height={100}
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={25209}
                                    >
                                      Baker
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane"
                              id="people"
                            >
                              <div id="people_list">
                                <br />
                                <div className="row medium text-right">
                                  <div className="col-md-12 black">
                                    Filter by Color&nbsp;&nbsp;
                                    <a
                                      className="nolink"
                                      title="All"
                                      data-remote="true"
                                      href="/logos?category=PEOPLE"
                                    >
                                      <img
                                        className
                                        style={{
                                          position: "relative",
                                          top: "-2px",
                                        }}
                                        src="https://images.invoicehome.com/all-colors-selected.png"
                                        width={18}
                                        height={18}
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="nolink"
                                      title="Black & White"
                                      data-remote="true"
                                      href="/logos?category=PEOPLE&color_id=7"
                                    >
                                      <i
                                        className="fa fa-circle fa-lg"
                                        style={{ color: "black" }}
                                      />
                                    </a>
                                    &nbsp;
                                  </div>
                                </div>
                                <div className="ajax-pagination text-center">
                                  <div
                                    role="navigation"
                                    aria-label="Pagination"
                                    className="pagination"
                                  >
                                    <span className="previous_page disabled">
                                      ← Previous
                                    </span>{" "}
                                    <a
                                      className="next_page"
                                      rel="next"
                                      href="/logos?category=PEOPLE&id=41154575&page=2&ref="
                                    >
                                      Next →
                                    </a>
                                  </div>
                                </div>
                                <div className="row">
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={8004}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603636289&Signature=qcLrKkA8oVhT4uIwIs23MjKI9P2y8Ul-yMrvTx9f9ffHWs8l2Mk1gmmDz5xPVJUpxeu-6CkuXaOuFeapuhAS8ZJmRinnQzXXPefwp-Gq~rI3VCKvfuhBVSmyGwNj5~TI2324IPwIH4MMXAtha584PEaV41zqkUDGo7BmegvpiiV4PlTu8Uvx5Muy0Rnn1Uw2Tt7wAeR-GHx5zdWZvau1qotGoV6Jlt69-Yw4VwuKUahBI~MEog57BJeqxU-CZJ0SOA4VjKMNg5E2e03h9MIIYJbPuACjCBhJyPT52yOmQ-mkRduTYtp9FoYDaobDK57~er0xlct3HXHWCCCuuGA7Ww__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={8004}
                                    >
                                      Accountant
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={8059}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603636289&Signature=HcpJgGV07D9VHmg0GtICEt3YKvru-4kNa8kmpc4JvEb74uQrp1xEmxHn4QYjLlQ7XCsQ4sF26n0MSXwBeSh3EegxNSSXyfnMKXQArDyxvl14JlPA6uJREZk5nR3WwreMz2AoQLfxZRK-xXVXqIcHI8sGbgT-RWZvvqhhBOjsFtGcEbgMMXdFnUSOHKuJd3LTfMASixeeLquZ5mMImYE3mfuMm~tjgkrF0CVEgolpJn8RCo1i8DAid0zgAJ-KaoyvfJWRLJp4ibGfSbRDqRGzET27qNMLCiiIP2qSpLDyUso9464rFZNALDcRA8tpmpr2-av0sq2aS-C7vintmV6jgg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={8059}
                                    >
                                      Accountant B&amp;W
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={113413}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603636289&Signature=Fv51Fo0Ekz7QBhoeC3Hs81mEQKKMXKDgnZ7M9dmNG7HCj6TwvvQRJxIzwPIzaITxFtdXqzMWxIR8gHN~vyDbDTjKzbsQTmnTjBSW4TGEAW5Q8v5r9TFglKU87ePl2OGZs9-n0j9686-NAqJn32Mlg0R4PHgGmGa9s7NVuuCLtkhOh8f6pMlqEKp~~5g0YEr42R38f0zR8NeUDVQbPPmM-0Rr7TPtMk7W9RfDttzhu~Lgc1uAbeSyW6Hb9pbKmpIpJDnqN3rQqEeJp9yDsJPSXuMWN~Ev1RC8QK6V4ObRC49upjSPXrxHnEEH~-aVoLZMeQlyMMofGtshv6vH58zRHg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={113413}
                                    >
                                      <span
                                        className="translation_missing"
                                        title="translation missing: en.jobs.accountant_woman"
                                      >
                                        Accountant Woman
                                      </span>
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={8005}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603636289&Signature=Gu0tpvTCfkVEyNI0f~jxcdZ9L9p8hk9KalsD--fQ44b6MNadDIUausgzcSQ7kBE2af3vUJxygzh5sK82F~XWZNNqRCi6AIX-F5uPqS0PRYZ2Y~8f2u2YaqsIH~gwrKpCtZwcx~0-DlQDjDVyvs5PQT3j7yAq9bRCOXJ~lX-SGxYAPjpbZ7F5vLslmkXnvX6kFuM3YlLAygvPl4-9TymvQcwSEQNqHFVoxI9iCcXCL2wxcyx1186WhC5CgFSEogmsd1H~cPtczh1xtEglgaTZF5pqdnqXVyuGlFMBZlJWWyBHdD7IYbOZ8n0GSqChNcu-U3gxwAJkEYpISw6fwtgJOA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={8005}
                                    >
                                      Actor
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={8060}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603636289&Signature=MECeDFIksqmmJSVe8HdgPhIQuGgNRmDVsHUvqHMx7OlmJwJZpgQ~obTLw0PWftOE0eWtO5nTW1y3iXnFQ5nFBgpTe0HGSH7r1gqYYLwGpn1pjPACkd9o8qziofzBCfPVQsyfD4J2wQRri-VH8xIFcKw70MJTuZvc2tZWvy2fxgDjJnZY1eXzB2vNa8cs89TARI1EjOwoi8g3Ra-Xw7Tcfur9GlL1JztH2wtNQFo0nQx65PJSNL2QFqBf1QVrUtYMtiHNFoyfirsC9X1MXqJ8Mb~5HGEKCVy1xp8qzHz6nTlg7u7jYYOgtTbMF~-UgF4pNm1qvvzPLFsKsmn429Me3Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={8060}
                                    >
                                      Actor B&amp;W
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={113414}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603636289&Signature=FYXdeexCcxkPZYC0oxVrsIN953uygt368MKb-uCb9HHtZ0I3PH4Yr9mm8ZYnLJjxO-AuPbhqXR2jrKvCGUtuGiT5I75TeDOtAIOMuwAQVSzY8FLOEjPTHnVEp7zf1Ahv494xAqxkZ8LDUUzsv6-haS~ly3Xx950x58G00RbvxMK7eXcVtrSjmiq00WNCed6TTm~~UCjP5IOaEwLVzVlJeAN9giOhdwwJ03AHLalZgIzrS8jpXflXmg~AHbpaIQ6cGNR06-ezs2cR0o6OAhLwC48mdRBfE68iFSUPQNzNMrqSqcCRgvRKg3zypuET3KOLeWO~D2Gp52AM7nC~LrsTgQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={113414}
                                    >
                                      <span
                                        className="translation_missing"
                                        title="translation missing: en.jobs.actress"
                                      >
                                        Actress
                                      </span>
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={8006}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603636289&Signature=qW4qbLA8~3-RoGv5qKq6K5cZG6dqIEzKc4LCI~rMUx5oRPjFhuWl8s9FjFAHcyetf8lUYqjAXl3tkRNNpI80SamnggMP4ikhGbpyWdm46Y4f4csXMbE50P~h9hlOdRY7waYfQYMQUdaKSQQlrKwnQ63euZp3meiI9lMB9WKahTt6hBD32ApoyQY54Fzf7T4xoqLXxUnb0~hJ8Lxv3KrLOy5bQRkJuarfikPevBxb9EOKs7xS3GA3pVZAuX5l6KOybd5tlPnuF7RKLgAxrBSBJmdQZSNZPsNgaXl9xWfw1jgslZWbxi75M02KMzop0xvQrytKC79SjRRAtu5jI7ULkg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={8006}
                                    >
                                      Agent
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={8061}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603636289&Signature=B5U-T3dLaSm2lJlvl2B7srayo-jI6tPaTbh2Wf9ouX~Hvued~jNkydarruxi6-m6O3v7EsiAl6h3F4~x6PC0QWMtQ3udtfAziFu5BWYFetLCUtnrHj41X3iTUpAF60jCcy5yMDDpd5N8VSOnhE9NDcYHSdSwCqMxqpU1quGEiSe1656ucKs15UBKwXoXpBYAVfXQzg6uHm8cSSDTKusv19bR2gBtCN0D5t1tO3vKm~0YSvpqAxIYVTg-ySZX8uh4E8APeDb~XGGRp1aM1R8tQzlDR4VOxGmQSwEe9BZym80THmkmTzlModbCRVRhds0ptUw~f-QRgcFyexxnZtg2qA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={8061}
                                    >
                                      Agent B&amp;W
                                    </a>
                                  </div>
                                  <div
                                    className="col-md-4 col-xs-6 text-center"
                                    style={{ padding: "10px 0" }}
                                  >
                                    <img
                                      title="Select Logo"
                                      className="choose-logo acts-as-link"
                                      data-index={8007}
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603636289&Signature=HKencO6315szIt2FUBtdAYuX1M-kqBIN24OdJklP0v~sIp4~VPauPAyQsdeUoLpRVlVqyWQ9k3iIxdt2F4jyUvdjbpWDFRUbhmPVEafMKJGnhNPz2QjaNfLo7ZqhNrB7oJAlOjoWVNd2YuFrsD8HeruQ5Zwe~x7NIbNBCoN-aAkl1RYn2VXMnY53Eu3IKqYKrPwUav-P3aPNGzvzs~9ns7N5ai6UbK9xDWLSOf3-nsyj1F~L6tp4W3Eb4b5YJmXHoU~DVoS2DYZHbeLqfZVfYg0mp8~hKnXHfaqRX2Ueft54OHR3yj~FFsvxD-KjuaeS~QggSerhk8~OGcyrtZp4Ig__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
                                    />
                                    <br />
                                    <a
                                      href="#"
                                      className="choose-logo underline bold darkblue"
                                      data-index={8007}
                                    >
                                      Analyst
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane "
                              id="your_logo"
                            >
                              <div id="your_logo_list">
                                <br />
                                <div className="row" id="new_logo_form">
                                  <div
                                    className="text-center"
                                    id="spinner"
                                    style={{ display: "none" }}
                                  >
                                    <i className="fa fa-spinner fa-spin fa-2x" />
                                  </div>
                                  <div id="logo-div">
                                    <form
                                      className="new_logo"
                                      id="new_logo"
                                      encType="multipart/form-data"
                                      action="/logos"
                                      acceptCharset="UTF-8"
                                      data-remote="true"
                                      method="post"
                                    >
                                      <input
                                        name="utf8"
                                        type="hidden"
                                        defaultValue="✓"
                                      />
                                      <input
                                        type="hidden"
                                        name="invoice_id"
                                        id="invoice_id"
                                        defaultValue={41154575}
                                      />
                                      <div
                                        className="row text-center semibold"
                                        style={{ margin: "20px 20px 0 20px" }}
                                      >
                                        Your logo must be a GIF, JPG or PNG
                                        image, with maximum 5 MB in size.
                                      </div>
                                      <br />
                                      <div className="row">
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: "50%",
                                          }}
                                        >
                                          <div
                                            style={{
                                              position: "relative",
                                              left: "-50%",
                                            }}
                                          >
                                            <input
                                              className="filestyle"
                                              data-icon="false"
                                              data-input="false"
                                              data-size="lg"
                                              data-buttontext="Select Your Logo File"
                                              data-buttonname="darkblue semibold medium underline"
                                              required="required"
                                              type="file"
                                              name="logo[file]"
                                              id="logo_file"
                                            />
                                          </div>
                                        </div>
                                        <br />
                                      </div>
                                    </form>
                                    <br />
                                    <br />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-link close-window-link"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <input
                    type="hidden"
                    name="choose-last-logo"
                    id="choose-last-logo"
                    defaultValue
                  />
                  <div
                    className="modal fade light-blue-modal"
                    id="signatureModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header text-center">
                          <button
                            type="button"
                            className="close close choose-last-signature close-big"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <h4 className="modal-title black">
                            Select Signature
                          </h4>
                        </div>
                        <div className="modal-body">
                          <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                              <a
                                href="#your_signatures"
                                aria-controls="your_signatures"
                                role="tab"
                                data-toggle="tab"
                              >
                                <i className="fa fa-fw fa-pencil" /> Your
                                Signature
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane active"
                              id="your_signatures"
                            >
                              <div id="your_signatures_list">
                                <br />
                                <div className="row" id="new_signature_form">
                                  <div
                                    className="text-center"
                                    id="signatureSpinner"
                                    style={{ display: "none" }}
                                  >
                                    <i className="fa fa-spinner fa-spin fa-2x" />
                                  </div>
                                  <div id="signature-div">
                                    <form
                                      className="new_signature"
                                      id="new_signature"
                                      encType="multipart/form-data"
                                      action="/signatures"
                                      acceptCharset="UTF-8"
                                      data-remote="true"
                                      method="post"
                                    >
                                      <input
                                        name="utf8"
                                        type="hidden"
                                        defaultValue="✓"
                                      />
                                      <input
                                        type="hidden"
                                        name="invoice_id"
                                        defaultValue={41154575}
                                      />
                                      <div
                                        className="row text-center semibold"
                                        style={{ margin: "20px 40px 0 40px" }}
                                      >
                                        For best results, upload a bold
                                        signature on a solid white background.
                                      </div>
                                      <div
                                        className="row text-center semibold"
                                        style={{ margin: "40px 20px 0 20px" }}
                                      >
                                        Your signature must be a GIF, JPG or PNG
                                        image, with maximum 5 MB in size.
                                      </div>
                                      <br />
                                      <div className="row">
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: "50%",
                                          }}
                                        >
                                          <div
                                            style={{
                                              position: "relative",
                                              left: "-50%",
                                            }}
                                          >
                                            <input
                                              className="filestyle"
                                              data-icon="false"
                                              data-input="false"
                                              data-size="lg"
                                              data-buttontext="Select Your Signature File"
                                              data-buttonname="darkblue semibold medium underline"
                                              required="required"
                                              type="file"
                                              name="signature[file]"
                                              id="signature_file"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                    <br />
                                    <br />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-link close-window-link"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <input
                    type="hidden"
                    name="choose-last-signature"
                    id="choose-last-signature"
                    defaultValue
                  />
                  <div
                    className="modal fade light-blue-modal"
                    id="currencies-modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close close-big"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <h4 className="modal-title text-center black">
                            Change Currency &amp; Formatting
                          </h4>
                        </div>
                        <div className="modal-body">
                          <div id="currencies-index">
                            <div className="row">
                              <div className="col-xs-6 col-md-6 form-group">
                                <label htmlFor="currency">Currency</label>
                                <select
                                  name="currency"
                                  id="currency"
                                  className="form-control"
                                >
                                  <option value="AED">AED</option>
                                  <option value="AFN">AFN</option>
                                  <option value="ALL">ALL</option>
                                  <option value="AMD">AMD</option>
                                  <option value="ANG">ANG</option>
                                  <option value="AOA">AOA</option>
                                  <option value="ARS">ARS</option>
                                  <option value="AUD">AUD</option>
                                  <option value="AWG">AWG</option>
                                  <option value="AZN">AZN</option>
                                  <option value="BAM">BAM</option>
                                  <option value="BBD">BBD</option>
                                  <option value="BDT">BDT</option>
                                  <option value="BGN">BGN</option>
                                  <option value="BHD">BHD</option>
                                  <option value="BIF">BIF</option>
                                  <option value="BMD">BMD</option>
                                  <option value="BND">BND</option>
                                  <option value="BOB">BOB</option>
                                  <option value="BRL">BRL</option>
                                  <option value="BSD">BSD</option>
                                  <option value="BTN">BTN</option>
                                  <option value="BWP">BWP</option>
                                  <option value="BYR">BYR</option>
                                  <option value="BZD">BZD</option>
                                  <option value="CAD">CAD</option>
                                  <option value="CDF">CDF</option>
                                  <option value="CHF">CHF</option>
                                  <option value="CLP">CLP</option>
                                  <option value="CNH">CNH</option>
                                  <option value="CNY">CNY</option>
                                  <option value="COP">COP</option>
                                  <option value="CRC">CRC</option>
                                  <option value="CUP">CUP</option>
                                  <option value="CVE">CVE</option>
                                  <option value="CZK">CZK</option>
                                  <option value="DJF">DJF</option>
                                  <option value="DKK">DKK</option>
                                  <option value="DOP">DOP</option>
                                  <option value="DZD">DZD</option>
                                  <option value="EGP">EGP</option>
                                  <option value="ERN">ERN</option>
                                  <option value="ETB">ETB</option>
                                  <option value="EUR">EUR</option>
                                  <option value="FJD">FJD</option>
                                  <option value="FKP">FKP</option>
                                  <option value="GBP">GBP</option>
                                  <option value="GEL">GEL</option>
                                  <option value="GGP">GGP</option>
                                  <option value="GHS">GHS</option>
                                  <option value="GIP">GIP</option>
                                  <option value="GMD">GMD</option>
                                  <option value="GNF">GNF</option>
                                  <option value="GTQ">GTQ</option>
                                  <option value="GYD">GYD</option>
                                  <option value="HKD">HKD</option>
                                  <option value="HNL">HNL</option>
                                  <option value="HRK">HRK</option>
                                  <option value="HTG">HTG</option>
                                  <option value="HUF">HUF</option>
                                  <option value="IDR">IDR</option>
                                  <option value="ILS">ILS</option>
                                  <option value="IMP">IMP</option>
                                  <option value="INR">INR</option>
                                  <option value="IQD">IQD</option>
                                  <option value="IRR">IRR</option>
                                  <option value="ISK">ISK</option>
                                  <option value="JEP">JEP</option>
                                  <option value="JMD">JMD</option>
                                  <option value="JOD">JOD</option>
                                  <option value="JPY">JPY</option>
                                  <option value="KES">KES</option>
                                  <option value="KGS">KGS</option>
                                  <option value="KHR">KHR</option>
                                  <option value="KMF">KMF</option>
                                  <option value="KPW">KPW</option>
                                  <option value="KRW">KRW</option>
                                  <option value="KWD">KWD</option>
                                  <option value="KYD">KYD</option>
                                  <option value="KZT">KZT</option>
                                  <option value="LAK">LAK</option>
                                  <option value="LBP">LBP</option>
                                  <option value="LKR">LKR</option>
                                  <option value="LRD">LRD</option>
                                  <option value="LSL">LSL</option>
                                  <option value="LTL">LTL</option>
                                  <option value="LVL">LVL</option>
                                  <option value="LYD">LYD</option>
                                  <option value="MAD">MAD</option>
                                  <option value="MDL">MDL</option>
                                  <option value="MGA">MGA</option>
                                  <option value="MKD">MKD</option>
                                  <option value="MMK">MMK</option>
                                  <option value="MNK">MNK</option>
                                  <option value="MNT">MNT</option>
                                  <option value="MOP">MOP</option>
                                  <option value="MRO">MRO</option>
                                  <option value="MUR">MUR</option>
                                  <option value="MVR">MVR</option>
                                  <option value="MWK">MWK</option>
                                  <option value="MXN">MXN</option>
                                  <option value="MYR">MYR</option>
                                  <option value="MZN">MZN</option>
                                  <option value="NAD">NAD</option>
                                  <option value="NGN">NGN</option>
                                  <option value="NIO">NIO</option>
                                  <option value="NOK">NOK</option>
                                  <option value="NPR">NPR</option>
                                  <option value="NZD">NZD</option>
                                  <option value="OMR">OMR</option>
                                  <option value="PAB">PAB</option>
                                  <option value="PEN">PEN</option>
                                  <option value="PGK">PGK</option>
                                  <option value="PHP">PHP</option>
                                  <option selected="selected" value="PKR">
                                    PKR
                                  </option>
                                  <option value="PLN">PLN</option>
                                  <option value="PRB">PRB</option>
                                  <option value="PYG">PYG</option>
                                  <option value="QAR">QAR</option>
                                  <option value="RMB">RMB</option>
                                  <option value="RON">RON</option>
                                  <option value="RSD">RSD</option>
                                  <option value="RUB">RUB</option>
                                  <option value="RWF">RWF</option>
                                  <option value="SAR">SAR</option>
                                  <option value="SBD">SBD</option>
                                  <option value="SCR">SCR</option>
                                  <option value="SDG">SDG</option>
                                  <option value="SEK">SEK</option>
                                  <option value="SGD">SGD</option>
                                  <option value="SHP">SHP</option>
                                  <option value="SLL">SLL</option>
                                  <option value="SOS">SOS</option>
                                  <option value="SRD">SRD</option>
                                  <option value="SSP">SSP</option>
                                  <option value="STD">STD</option>
                                  <option value="STN">STN</option>
                                  <option value="SVC">SVC</option>
                                  <option value="SYP">SYP</option>
                                  <option value="SZL">SZL</option>
                                  <option value="THB">THB</option>
                                  <option value="TJS">TJS</option>
                                  <option value="TMT">TMT</option>
                                  <option value="TND">TND</option>
                                  <option value="TOP">TOP</option>
                                  <option value="TRY">TRY</option>
                                  <option value="TTD">TTD</option>
                                  <option value="TVD">TVD</option>
                                  <option value="TWD">TWD</option>
                                  <option value="TZS">TZS</option>
                                  <option value="UAH">UAH</option>
                                  <option value="UGX">UGX</option>
                                  <option value="USD">USD</option>
                                  <option value="UYU">UYU</option>
                                  <option value="UZS">UZS</option>
                                  <option value="VEF">VEF</option>
                                  <option value="VES">VES</option>
                                  <option value="VND">VND</option>
                                  <option value="VUV">VUV</option>
                                  <option value="WST">WST</option>
                                  <option value="XAF">XAF</option>
                                  <option value="XCD">XCD</option>
                                  <option value="XOF">XOF</option>
                                  <option value="XPF">XPF</option>
                                  <option value="YER">YER</option>
                                  <option value="ZAR">ZAR</option>
                                  <option value="ZMK">ZMK</option>
                                  <option value="ZMW">ZMW</option>
                                  <option value="ZWD">ZWD</option>
                                  <option value="ZWL">ZWL</option>
                                </select>
                              </div>
                              <div className="col-xs-6 col-md-6 form-group text-right">
                                <label htmlFor="currency">
                                  Currency Formatting
                                </label>
                                <h2
                                  className="acts-as-link choose-currency-format underline dodge"
                                  data-id="%s %n"
                                  style={{ margin: "5px 0 15px" }}
                                >
                                  <strong>₨ 0.00</strong>
                                </h2>
                                <h2
                                  className="acts-as-link choose-currency-format underline dodge"
                                  data-id="%n %s"
                                  style={{ margin: "5px 0 15px" }}
                                >
                                  <strong>0.00 ₨</strong>
                                </h2>
                                <h2
                                  className="acts-as-link choose-currency-format underline dodge"
                                  data-id="%s%n"
                                  style={{ margin: "5px 0 15px" }}
                                >
                                  <strong>₨0.00</strong>
                                </h2>
                                <h2
                                  className="acts-as-link choose-currency-format underline dodge"
                                  data-id="%s%n %c"
                                  style={{ margin: "5px 0 15px" }}
                                >
                                  <strong>₨0.00 PKR</strong>
                                </h2>
                                <h2
                                  className="acts-as-link choose-currency-format underline dodge"
                                  data-id="%n %c"
                                  style={{ margin: "5px 0 15px" }}
                                >
                                  <strong>0.00 PKR</strong>
                                </h2>
                                <h2
                                  className="acts-as-link choose-currency-format underline dodge"
                                  data-id="%c %n"
                                  style={{ margin: "5px 0 15px" }}
                                >
                                  <strong>PKR 0.00</strong>
                                </h2>
                                <h2
                                  className="acts-as-link choose-currency-format underline dodge"
                                  data-id="%s %n %c"
                                  style={{ margin: "5px 0 15px" }}
                                >
                                  <strong>₨ 0.00 PKR</strong>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-link close-window-link"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <div
                    className="modal fade light-blue-modal"
                    id="add-saved-items-modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header text-center">
                          <button
                            type="button"
                            className="close close-big"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <h4 className="modal-title black">Add Saved Items</h4>
                        </div>
                        <div className="modal-body">
                          <div id="saved-items-list">
                            <div
                              className="row text-center medium"
                              style={{ padding: "20px" }}
                            >
                              No items yet.
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-link close-window-link"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                </div>
                <br />
                <div className="row">
                  <div className="col-xs-12 col-md-12 form-group">
                    <a
                      id="done"
                      className="btn btn-primary btn-lg done"
                      style={{ width: "100%" }}
                    >
                      <i className="fa fa-fw fa-save" />
                      Save Estimate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeEstimate;
