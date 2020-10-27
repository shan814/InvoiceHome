import React, { Component } from "react";
import HomeCategories from "../invoice/HomeCategories";
class HomePurchase extends Component {
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
                      &nbsp;Save Purchase Order
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
                      defaultValue="6X5LprdNp5hkFvhfx6dmrqpw5+1FbR9vUKSm6BL2IgOsUVqN8b2uk+FUULd6Hfwgt3VMOTJtKn4sTq1kDIauYA=="
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
                          &nbsp;&nbsp;Vendor
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Your vendor's billing address"
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
                          &nbsp;Purchase Order #
                        </label>
                        <input
                          className="form-control"
                          placeholder="Purchase Order Number"
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
                          Purchase Order Date
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603637106&Signature=nqPAevVc4G9CWWTW0~VsJaeHrI0U9x~J1Nv6qCc5DNlOnL~g~Eno0weCYvB2UL7R1zAuyedkdL267ioLY7Ovn4QFE3tNmfFDprhjun6uGFF~t8dRgiU4HcioEyq6lY76tutCIyNINQgpUSwCyBp2fL9PDFGl2Iyw08LlchndrTT~Ex0WJVoGTK4YE6DRcrmWiut3WZobIIYzp4cq1NZGGZGVh0D-~LemFglh-KuTdz2hAxpYR5bxP~THUaJPne~2Cp2o24mvtVJKUGckGyW8rhS5jAmwAnfDni3269xeUbyWCl6DXnQrPftFu7HQ6IUidXL7eatpLKQZvIXoZyrdVg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603637106&Signature=p4wuRPh9cDt9LlonT0goOqaLnAZDE33ghUtWfdJbyf4J9SjoDOBvQRZS9Rw9FnO3qlYDOXh7eSPePOu3UwckAprCU--dorjndk2Zidpg1zCwiY6Jy2lLEg-j7fytlMMm2GazzyEINK8IqIZjB5R1jn7-e7ucHhhrS1t5nZId~jnZXU8Qb7VxqlLs7LWtTm3W-97IbsuyIfbRxsFOVoxSgZiswqny3h0ENFd7zW4vvvJvV~ZQ-gEUcXAWXd5ue~Z~bovUiUwzgl7BnT1uVoAnrpE~kB2LMwA91SWdYOiR64EfHUVe2p~eXGOyQCqAfQRWTtmXBgAZnf8Zj7vyv621Lg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603637106&Signature=HbSLIWLV-Ovu50h6vn9dlhGTCaeUDgOGA5R4P5GGMrDMG5K69d~tN1QUCCEJ4YFbPS-H1gnD51-bXix2r4dRYnetLrhIm4ewrA4mAMttuNLcm1kSVwqlSDTv6sG252RgiVMhthPnQM3bXS~wHr-DFyvw7KbTJgVulMm19cLtO20QLnUBKdan6DyK--K94WOfAxpk5XP4Jq4ju~7GJn4cUcnGhpRLeNuG70VRlrGPnqnJI5RDJpcEXFxwVYLIEjJ5M-25frCCUEiz5r~iseHlfrnAKpHjyBhFkCVCod-OYSjSdp0Cfb6mPPpXnHQsDpX87RWJedUpAGLqsTMZ~XEI~A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603637106&Signature=Y9Ap6U-zty0-xr29IEuYOrdtf93vABiV1Lc6oV16QBlXZOAmel--DDUwl4gWsq9Dg7YZvI5K~o7n3kBiJQpd4P41p7BTwvmxUCvY50qn1Haz5vMrrpc-ZuWMa7k73ndAZsdyMcWKlfdF44MyCABm7Ix3WJTDAT5X9FgxSYeDwWHtYTwVcNl6BlqXYrnZMTNoPx6CXHhOvE435y3h1gfBT5DpZ-cR3CJhZJx30gCFjtr5YQO~na~EGd~Vco2GQ4AGLvdnzWYispPy1OJ8oiB6lQhnV98DfVFPKvFLRPrNM0om4lGnIqUD~ka4FetVCrJNAjscnZSnz0CEK4pNI2GeGA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603637106&Signature=j3qroV2FHTgBMAihP-89-eHEsOQdApDZCOGC5U4dmvta0sm17Z53cvx7l8xSi45PsRlQcjMJESvebkH9u0QOqZx34r2D5kCGsXYvpaXVlvTkIzMJlB6e8ozpE3BfbQqt3eh26pfHtuxU8RjeSPfH6dXroInYqvhjXXDAuGzSuX98bdEaa~EjJtr33D0-YY4BSvR2O2caaE-ixJbzCulE-kcE7pGSzm63xqKtcH89IfRHN3jj04eU-VcRkTqM~r2xN4YaFqGYg9nar6l2LBKShjjy0Sk~rx-S3V5npfA-5-g9uiPB5CYd0zJjWYMB7TJJLQPC0Jul9HtQaTA1BuBnFw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603637106&Signature=I21WX8~jnhdeC0h-5GTxvNCXbGt~t2lzKcXMeOuPZhER4HAzOcASDS0p30XZDyevC9djgsmsNLj-42Dg-8blH477ho2B4chA~kwRkbzbHXjfWoLbj3ulY564PMVaizJ5QoOz-J8yLACyLc0JmABlOuevQQ6ca3x2efmPVTNBsgtKkofZj3c3cWYWr-lVGNGCjcPXej0senhzzGteiKzTDhbbL~Kt-bgTVgvEPDdaxQGt2xr-Q6x1VwVwqqOM31mbuY8Hvt-r5ErYjZ9pJbDeWrSa9CzwjMq4xsG~k9EVbRFPNO3pjYDTfOxVnY-b4GaKXQu2xWCLk0-SCcs1aVulEg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603637106&Signature=iXQQMug6EmvMYJwp5OGr6ySpr6Y2Tnk08tlYmncCv3~~SJjvoNPhlbTmfYscW1W4MRJQ-p9g0HOd1tw5lM~-4Y9CUcuW-ZXgZALOX9gb1GGyFcuxY241JvqQTNfMoSkvT8Y6bwuSBSxaPm7JL671VhUYhtNik7RR91yAQSIQIGBUQLMR92yoGM~d2r8qUUgal4fb3HthZ6mcdRmeqMGiXnXw7InBbaT4OSCZF9i6jjEvXSpnF3ikE0VhC5kjwAEfsE5aBwNo-B8dzWRhPg1URWctPFVXVfUFEXtEuwqmQD009UEIr5U5MaRTkUvHLRLpmAxevWzlwtZvf81Gu2e6LQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603637106&Signature=EJNwqPXWGI8WOIxG3cZDUrrm5XkcBEO9NK5z-Dpc~XVqgybK-eYdwy4WL5~4Kty36vtczUzaZMdnOkRLvZat9eNc~8-D3mVHaq5MF~N3KSSOs3q4Y9Fee6GmKrLWIhn5umTnLTIGiemxe-hCJpO2vlYn-vFmVIC9vHRDwT9n8EUrvbO77vCBdPNvRuGIKODYKIYFgB27szf51bd1zYwTNSRXZg9vMD3Mx5Qp418HM98A4fDAvNfUt5N3Zue5F2Y6fpkm~6QGNW3YeElpHCNYueCPnST1567WfEwdydeIbJopk7BG~QEZBPZDQgD1qj8SPJqyCQTzB2bAORHQ3Uv3UA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603637106&Signature=NzlkP4sMO7OY6f3ObNGw7OJUMw02I3b9oe7-uEGY~ZDRCh2PPgJfVUtWc~GZYlx7WMHhsNjkZUb7mj7kyuv4xa0QEBR9RJdNtMZyQ3n7vODN~Nt2ivdS~544RXaHseP7dM5qhNNbM40sw7dP-6M23Nkxwa7~c0-6zl7tONh6g4uFBMJQ27~bib9aMgeRRU7-UKCttIqeVm-hqVdKRnrZZ-FxBb8hSaGV9qBEFpxA28eSeSyrc1rUIjqumWxhVBcBnJ9264TNySSK1-hgh2gtnq8GLKa7AAdzFNX9PQSKp5cnIyOpVarXqoypFCoGWATlzLSWcev2YWtOnAgGbQdqIQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603637106&Signature=exBkeK72Gwmh2w7JZiWd1-E5cbB42ECK~z8aWRYPxvM~K6G3ur-TDSzQN5lGELdNTDjujLkC7j6LTKsTa0erbk~0F7xQ-fHNkVy4zBHNJhgSnfu1~TeAcCS3tk3qjOUtOQDpEEwAiV~EM7Iraem27VrI-Dbl4KeeYHUhG23EA5I7Whim55uPINjb7cHfhHsCtHyvWCy3tOm2ijgHjDyaOwVkveY6D6Pf3EylBjxlE0AHIcU~e-wkZU~baHxhsQx74IDGY5cTsMRkhikUIOsq1ET~huhsKlTkPgyRbmwirn7v7Z8ltvsD2E4Uu9Ou0r7a8qz8snr19TSY1kiV9TtkBg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603637106&Signature=Ujax2gWZhXFnVMYkI9CPQcGRFFH-pLB7GnrVaBNPADQCi071tqcj59kexLwshMyyF0ogIJEvr~jJ1twXo~EO0~wt5GEor8ZXu8LUPZU3hv3gwHYjUKaFTYsMAS0qS0zK2uaxuWBEsdaWXXmWN55zWL-3MtlXK26nlIccm85WEhHkuKozgM1ihrKk0zp2k54J3ZWMdlGI26~6uzqTSFMqXFn~f0XGbol0jflvNq8-GX6ZoHcbi-6MTB502GpZGQmhvwBL6G2Lf7ijCS1cZB23sDSp9P5i54VSsAG0sufoi-rgsLJ87XretT3dnW3lR4972326qV-7ZFyuZzirSRQwcw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603637106&Signature=aq7EWWbHBOrXxTuhGdj6cSFbazAywAJv6BvljeWdHMJJuXC46pF3zOWSx3mNpU4DkNcdcMwsJg2HP6tqf0u-8ozVSBiW3hiaosPeIAQv83RDfqVv9tYwGeDl~xwVy4T~1k7X0hBcTn3VP4vgWWx~PhqTKGWOzrwibfeJcfP~6winUfRZ85oL5B8XerOyncJenP0NlImXJ5yXX5s2m8hbdGAwR3fbUVGcF6yd5So1N1JsUJT5UCDvZbHPnaOjgvxDaP-AaB91XdwINPqpm7zfQAEs5BtH9z8tHOduL4aJZRK-YMfsPW9VwurmuH5ucFg7Lg4EeSeEGzuNIZsx~bMU3Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603637106&Signature=YCMrdXpaWlbsPjnY-NknMAE0B4soGF31f0~~FgNExxY35P5Jji1GKvQa5g101qvbLYF0xe-Hi4qycZCkzKOq-iF5qvCwLrWuT0jhCa3joOmYUv56UIJdooKM42TWMxY4yV1G1Ffr2XuldMbA6EdyEtwhc4ICdsPoNQ9o9DslWsvokQkQ1N7rB42~3VHkayqxu7vzGtVPxJ2EpT8GhhsORcH-7tJ9yhww87TPIF75Y06YKtyPfdYa21wpLThDt1WIpkOah~N8xQz0Ec2j~Jqu3uUB77-Gr-bNikdG5vxMZYsQ8ayNaHYj6toOOES6khoKGlCKJ1fTVGFEsf8NNp8RJA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603637106&Signature=Me0bIWS4lGNskBJcytZXJGKGnGJPVFfoRwuOHZazNW6n442wjRY95U-Me6HhgNTdqZkSlEd~pClVzphkMdssRSZXF2GsNuKSwXWV~v~m2AdekUHpEDgfs54Uhx8IcuEROXUuDURs6mNqSVxhIm0B1yL1T8MrW7v4PszcXuo7lsnhW1tB9YAajEYzsm811zmFqG2ygKxWMBE9c8oX-diuxX7IC6gPjjBF4hMESr1v7OZzs08nhT17inSibnaCnv0si7WqdAwQbkd83aoP~LtEbTOLH7OEUqhzdG-pMTISWdrjnd~zhw7QxSOqkjyVN2QhbK93~~~BqyQDJHEpGYG8yg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603637106&Signature=NSvpPf-lBnSAoouDZHMnpWnUlSQqKY-TVEr~Hm4IM3746e0sBpD3GWcJ0RDe~ormVfTJw6P8iJe0ecNCVIW-QSrJ5aD6j8TFoKHGH3Yv3EVqpBsGhwHMa2~8P-Gq1nc7aokCiuh2ddqZWojBS3LoCq9TXkW0Uh081KGboXwAqboXbxpq72cX1P5cD6mRsDvCTEpwXPRtzLQBneJ0kKU2N6kPJBDz3TlxL1R0lwIJE~dWEIeXo2bJvr9HjaAqoA4J9z4jwoJVvDfelzvtR9XsnQFr4o1Hyx85ideDYhAQCWsGwuI1jdq8DRNLFjgy8d8ZOyb1McPlnM0xgdabLag4~w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603637106&Signature=eACuD14U8IUTf0hD9vbFauve4mXxKLW7ulk~nElqRHR2LOMxTrA7l1vmNdyK7gYp1ttqoXA~5yhv6js~qwgOT5JDOZyCUiIFnyDcF~vcQJHAKP2PZ5x4j1d7ftXuKELhA9-geCGGgc0eAexPdLEG61ibV9YTVcwUwChXaQVXy2ysTBJKhJcTycDlPJe11of-LIY6flLzTnw8rq~3Y5hXN5ItZdIucrJWSS82q3JK1GlH3ALpJmN2CduuChza9hP0TPqQEog7z-Ugd2ExPRZLK2~MYwZM6MLtBSe3WMoEPwjgDwR82FlpOit~CiDzTol0HMWt~0BaXqHbOdtaMMabtQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603637106&Signature=nWj9Pt~ssnJi9-vsBlZbXiSsSlmPxITQUKUCPP7pHqk4aJisUd~e4rtchPHGrJZjfPSkcAw9kyLo768leGaYtKlTZMWenvks3DjY-LI9nYtojWUiOiuy5fhXRgDaPzUKx7AVykgoXmws-xOYCY3TqvOjPjfrCzpmi7YZiDQEb7n9onuAZifaHwBYXXeKNs05eK6u6RTazRKXCAvS~B97xYuLwX1C0nQIY2PINw3gBf4plGeKrlGKJXsDLhtDigDKjphgfuAh3vr2aPdukTjI1sukjhQnkuAdWwpgmL-n74j8gBRNhjN7fwnNmt1nzteZtO~3XlcL33EyBjMxbgpOIw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603637106&Signature=FVEzkgMMS0FuGhTOzH3lVNKTl56MaNA9Tnk0HBdGq77bI85stAPDx4hcTLTyZbIe6djobwXzmX1MWLg4~PJqo4OOHl3XvpBRlsW6UwUepndIV7Uex0oWLVEseLxM1phnSIi4yQ5sdX-7hZxRGmlIYQfwzUKjdS4HTxlNTkziCT99muu2glDcgIJ5AuGMhQu9ioXFPUlC~f7mCnkxDELObMzcA4vsUEfLQIy8reE~x4FWNv9UMsB6QB17trDo4GyBySQwNilAExNFPLgZcz1MVzEcRlGV9jRnD9e5n0XN1PcGT8cWOnPewBrSCc-dH2mWqvjJvXeRsZ202593azAEew__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603637106&Signature=U5wftTxy939ASeEN1Y5yFG01xwwAco3C~rp1xSr~rfEtDPdB90FqMO8YKq2TEiPmddU0sWBvv58-3KzIXhN6Q5b9U1fY3fzW0LkLCMo5q1R6iyL6ORrNJ7aSmH9CZcDsyBhafr1cIUr8sQlhTImh8SvvBuahFayuBnJtzxhrRoe0TD8RZITZOtUUqr70qbuF4hVSwiImNJpZ4B6CSr1VOp4yKCFARSKGxA0rOVicvOWU5hFC2LDOWzdX51NY2wMLdxQ25dwH~mLT3r~O03wADIn38e37p-YOJzBzjeMbout8YcrytYaOGlfVP5xfOWBQEOo5x0SnEXMJeiDoQ~-uPw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603637106&Signature=kw-Ia4StSMzxYgiqpPiOkwZoLIv-dkC4nSnqqdsN~l75wB5LOHESJVrOkIzlCgNv4chNLCQtLdieYUA0OmYfdsgGXPg3bVClV6SP7e00kG2Z0h66mWJ2kcqZ8m6aG6VkmzSwv1zz7Te3ttL9JxjYXqSCoFRGmHSGmVA9mGhv54c~Kzu3GASI9JBKv4rku65dPB4bQhbmWWJPVOJoNJ3Z24XxfvNm0zCTpv1LsZMfeIHwE28uU8Qb3Sw7o8eEtUJtU0GH1vrKq9QzOhpi0bBdf5v3857FctPo3Z7P0-Zc9mdt34iHf2c2jdE4aBpWt64pwudqOmPXSH705A~nICSgWQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603637106&Signature=lSXeO6uujhFtxVtsHZSyHlvC91nIzElk~8DhQdPLebZuzoUdmA45tBBSuxnfzIQRcDItGE3w8rVvhXtLcdPmvCz4-6AKuPt0YDTywT2TrsSDcVSrtuwt54mIjHpw-KXmdIJcKWsxf00H2tBU1uPyiJD-v86myCpa4nQvxPgKxwzb0QDJONLiQJGUJhW4FPjXhWBtWPnj0r-Q4PO9GzjBM0kOWAc~xoOjWPPj-~1Tja0zH9LN5mfGS4nZhZ2JbvxdKpUWuPLBb3wvh3Mb~ZRxWgDBipjxEMe0iTCAyB3~RPyFPSYyQsczVv1xG0pWENNcVx25fyk5T2SpRO-Hqhj79A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603637106&Signature=G-sYixmrz915z8Bm3RNIptrHJslFiUtixlYfcPGwuh5Zes4eSDFfIJP60lz5eEveq977LmrRvHI03lmb4mfXibYB7w-ARv1EgaYddI2FRYXuRqa-1RXdHwvhPBn32b-KZsQtuhuxO27Xq-50ZkMpKMYv87S9ESsalRalHJqSmecfnq~UerVyV2GaKWulROwswiwwCKso72Phjs-84leWU9StjcdMNpJx663KTsiiRSX9z1ttgQ~kPzaqTb11Y-C4jvPGp3Y4IAMAX7XrdV0wLEu3HteO5JjctxuvSe6AEjlrVzBHfU4G3IrTm338j0uNupVdHDHv4iyqOMxqSMjxPQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603637106&Signature=EWK~E-B0-Jd30Yu50VE-o5YC9P~3q4EXAA63zzow0HB0iN2JqTgIn~sHIvSja7pxRLPQS-5ZMrO8H3a1RULEtwgYgI~aIwT-xmovThIn5l~d5nuLUm2YiH3dZxiZ20MOznfa8jkGrV4KRQ1IB9kzxw5dE9Fo8Cf0Ep0y-e373NXvtf0s31d1j~kB4lVnNRZAAHuIxiZXFL0ybiaz-ZAnRLSppOGYe5qGmRqDXkiOeZCWre4PoMIl6wY1vWxFJzbsmnLy7kvZbNufpjiME2PP8FeXjwRzbybbe91TIsaZ~M9ZJqJ4P1THALsE9q6EodrrSyHn-4fCYwbN~u7kbxGXPQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603637106&Signature=ey2t034mDoiFXPJxzbp3HCdETQRj9HaqhyiA4cBu37EcC8ZktEZ6FdY9-b9pQ~xz4YMKaOdN7LoDjwY1qu-YgXmTAM13ulCHuNLRUqyB7pOoVpCG88a-MQG2fAZbTftYOrBqNf8WJPh6eFK4HqHF9BbhBZyVaSVSwWkVAIMsuN0Har39YzSqFv35vnzUXVbzwn0IDPOoVdS8UESDf4FdbuszwZnRQuR-bANRFwCZ26zqUJ9E1oAaErGIldXgs7gzpdniRfDrry54DPM~F~rPFWI7wBgT8slaf-Ob2WwDP1W0fe7gJQAxOthWM98dFAX73iyKA-IgX~2rbvGQiHgsoA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603637106&Signature=mPx98FKgjUNO-DPvFtzBi2noDgao0M6CtUARTA-zz7h4EbOSlYyqOc9rOEdfk3IW~ixUys6Ua--xF-AYYfcLJ3qt3Ag6V5G7rzbdzItMQ9m2zVHTVzO-fruKsbdaxwWkDmRc3hHp00ppq56Ald5LQaA-tNbLhaZYTNl72UFvIaoxUZIjH0q9sQ8WCz-TPm7cYet-gMD7dlYEArY47CF68qJu4AOGyueHxAWfDruLG~zOYZ2XLiQGc2cxiRh3xlXtkk7VMR3BxAoE8ySPPQ2nxcoaIXxYNcSakIwQSoK5k6tvwVBCUBjIrwZDbS29x1QirqDW-rwMlyeKFLEJV58MSA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603637106&Signature=XdxDGiZD1TS9px6YoWCK4~Rcd45C51rOFw9dgvqSJWW7HyTum1aAMBRDkFY0lOLZT7A8EuClXukoPmL-hLB90ItsGKKi3ne6H3X8T0mzIi14FmhKrk2A~7Yx1SKPKKXpMYs~aECZOnZohhgKxI4sE022I0Jy9RjmlzOqd3UZydNEH7lnrves3IiXZGl8IFOgWE4pzOawqx1TKgl0qvjQ2JtgM-jvzRgqs7~WPIVu6c0NORiCAO1TGd~RelA3yPZWpm93~eeIg3M7GM2vWLzwY4YHdHBoVT4mCXSfRrbjc1uank-KVOMwHDPFRiFhGmSesTQvdjtvKJXVIGWjD3THAw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603637106&Signature=TYD4wfUYdDa3ZQNEI2NDyVwvAyuedFJyxZ28lp9hSu~F252Pl6bIgueBwaOxN0G2UaLWZ7eIhJVXDHYTOvxBape91tt57zzfJbNmfiJ~Q8LwQpsRsDhYTUgpS0AHnswB8RBMcqv0owJYNsMpGnlMDXm0m9NWC-4jXgKy6QP5eaY-H~9xQ9l7DzWoUAud8vvSjdx7x0dWJOKNT4kPg3~BtYnStWsn7Hnbmx5YDgUwoY970LGwjXhRr4axKVJfGxw4OysS6j8pr0esgXe5aCcReb3DkMCj1rW--fchQJInM-TzSqktB8JncSJPerx~D5frJyB5uhl3nFvpXl-e6D6BIg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                      Save Purchase Order
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

export default HomePurchase;
