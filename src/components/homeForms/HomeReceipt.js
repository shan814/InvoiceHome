import React, { Component } from "react";
import HomeCategories from "../invoice/HomeCategories";
class HomeReceipt extends Component {
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
                      &nbsp;Save Receipt
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
                      defaultValue="s3Wdz6+ueCNQn7NNH+STu40LWAMBhbNr9wMtnaI2q/b2Wozk6V5xKNXdG6WiXgk1kA7z13aFhnqL6SYRvEYnlQ=="
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
                          &nbsp;Receipt #
                        </label>
                        <input
                          className="form-control"
                          placeholder="Receipt Number"
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
                          Receipt Date
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
                          defaultValue={"Payment is due within 15 days"}
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603635237&Signature=HZO9Qmqv6j2l6LMlrZ4RKOiIvuoAhlPBfrV4az4ITutc65tXgHC69wv-LdorY8RZeImSJyY10bEDU2ND86KPcKhkUrFjUVdoITT3MOjNXP1hl0SWP3dO6u437CmVDSCZWZG47aSxOWCM03Iim2gp-w0ELQmLX4G872rH1Vf9biBZdCkcegr~3LfTCUyZvEfd8D2p1w9lLX7hdhTwunReSk4jQmJKf6pRI9Lgxb2yZ2698AJxnwAcT1U6X-MR0iiz5hkEL~JspNlelQ6G~ZpBtWallZK55vIRhFcxYU69C50AwRRmJpVgMydBmET1XkB9F8gZ75qFE4J3-wi2ZFgSig__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603635237&Signature=dvyEGYxUCgSNnvC-eirClJ0vejLxbmRp5JBPjuzNElBCoPfyWpA0mIzy3pLIxV0OE8Fz7OINIJi0uZ8MuCfqNFO6-HWDIar28USW9CL5Xx39-lhUU4fx9lmJz-cJfekTNgH0kbHhtqthTvzAoSd7MZabXmic14MwWY9BIpYNmtmV8kp-7ICSWr7n6qbdfPYrdDD4~D8qPYcuJXlQ53PAVLhJOcu9-OSUGAQeD9Mubih0NZ-TX3JwZC5omBCMScMxh3e-zmqoVuDc6xOscMPaja-351GUJR~teufmE2QIqHX5-~d1zTYl02KktMo3PE57hq2wtJCvIN0AaHH3YhPWdQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603635237&Signature=YQ474aurmo3LPY2sq5tVARpwbsSNv2ww3Mymc6yeXKR603xn2jbxDA0bTtvc4Xtyb9kiptbAInDGAOhH~gc55wEMVcB4p203sd7cEEWWR0Ix1YL1U2o8Eur5e50HSqd5M-BaMJBwnhBaHr3ITVykxL24~nTo2DANgzfwBuZgFsKEGCK~hgnNUV4zU88l2gspU~yFDd56yn3ZkGZDcy7IzmUsu8lAjNlUG20LP8SCAnRx3tKQz4c-K5su8pQ20fn5N8~vv4N9LT9evpCS8N8Hm22OR1J5jFrV0PanQ0KJ9vGk8XyJ61Z3A~q~rloGWukm39Y-DmATDbuk-IS6g8Y4Tw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603635237&Signature=gxBT7PLsU8AYwN7I10-QN~FdIJJF67WhK1ukBTMx-Ub6Q386-40MMD335JRQ45stmmH9NRyATHMV74BETIuIN8c3BZKOJtPIV58z5qlUmm9JbmOBJbfjdlQZObiAzaiUlNYtFVfuW-uIUNbIkmYWjwmxEsg70hXlC0FXyARwWh0NODH6G2O4xIwaXGOC3jSzsrzX187fne0OjJYf8i4JQCQOdzu4YiVf4W0s9FEJpkWMabOc~RofRp0wylaYDL0n5ZYfLT1258aUXDylZtSvGwY~7UeT3G4DAd3eNvDKFkzPeq7e7h5CnJopwKXce6w2rRHLigWPe23bH8A8higALA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603635237&Signature=f743Wi~VrZILFmPetR-jcd7oVy0G6NifGa6ju1OOKwdqrhObt7wRnNL6mnqyIAeazhj47w42lrxCbZZzdj2UFQ0D0AMmM-hiyzB2tbsVr8uw1WF2TVfMiZ~M9sq721S-hauTj3qJqzOAPICdQXp4x1MPpXGlSfOqRwQQZQS~yriTjnAuiAHIWaJTaLQtRNFdHeju~1~-vkQIZOcK55cJt7yCy-5IX5arp9qmMbymAKnrI67YkKE4i-zq5wxvtxvgjp~C-DnuAOVZ5cM~DgvxlpoDAJw1dgBOYF9qrefDU3WoasJy9RXmFYb4W7rY3Wr5JB-0ENSfmhOHm5~Vmti7ZQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603635237&Signature=Udbnd7EAGMGuhrn1eJpku2Vz1tMolux6ssu8DrmnI9eXPp4-UJh3oLujEv31pui2SfacNJpnF3j9tmwJETJG8g26QPORbMRq9KbM3VMaHOUCmVjOzsKzn7Dn1xqU4Dv0htcakHFlzFBVxs3koCUPWMIops9jYDSEkzy9QliXjrXCSMvMrJFcfY1KOGW6s8PY2Ag9ITbg4Cdx6Bixzyg4u87F3rLSEUXuco9-gjMK9iZjwIpLvMWGQeewNDayNY7ArSxdMTPnSirG77eKNFX9MLpl9Ih5xuLf3W1D62qd-9KlOdFcPd4Nzwz06jmOO4JM6uU3rM7N6vMj-acm7Mpwcg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603635237&Signature=mZY5Z~GL~Mzk32dlvfpwoD4CCZwxuc421-j~Eq3sEbAiwhT7omyt79ETRloRswpAKDarn2XWpio~Ejs7TE6VINDDVhjH~DMBcCr112LLkk22iIl37tkEqnTYmsj~Buvzk16NBjbGuneWlLXFgRVE-ZyQYDkwRzAr0c4vxFlLZ527M12varuFO4VUx6KjOnT0fd9me3JeySWqVF61-TP7diNPygYhVQPIe97nDAqEw~Lzd~5~6-uWw5Uny2rVQ5soWoyeCmdlBngx0XN65Ri~ocuQeTKlquvKaRTRh7blFTrr~KUHwnYwkbu~Kk65g4Rb6Q8V6dJgQDWCv9whN~jasA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603635237&Signature=D8qRgvUfRkzxn~h81rgoao0gg6K6sbKhMSyE7Pai49Fwh9hPNNECat0D7XUEvHfhquknI~pe39qNFne~wnzpTKtm~SMEi6pRR7eb-IMuOIOa8hH2Rtlz9kUAEhcSBA6d1MEOv-df4tQqOK12de1N74RlkCxon7CP0qjrGnMumfooMPlGAfPE8-SqBEV6-AyFu1d-kn7~JQx26~XoheTkQ9oPSVJqrzbDANZgyPscn5~UdwW87VfH~Ca5IiYtR1J0fZyVc59Os0dpPcHWfS2Pg3ytoRviKzBRF2yNBq3UNzHDIqDsmRNVcxehfw-tnBSPdHU5L5PuFh~mobptlnlKyg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603635237&Signature=SAavt1dsRQii5XVBnuK9nIkvw9psesyDSypWYq92MMVdfwBwTSdWOwhbz0MS9lmXkscrYX4mcIivHpTyYKpH48hxQRacdHKyLaM6fhGMY3pJ5iIbOQXjYVq0Kzq2p7aFmGnUIol0azLwejR7nw2h0EMN4KrF2QxG7fqazKADSiZlrduXK~JDdWJ3PHd-CE9nn88nXNE4AukHhnzNsZJbVrgTNQoKAjGwzlK0B17b3awI7lECtnw7MxnD8u5to~0lfMoYbS~ugbjXmnfRhrlMdZal2bQOYL0cnjamlAibK7ADlLaut0WjzyDl3wYvtRChNKY-e~FGKp76ikyXMGWqKw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603635237&Signature=pQh28rY1WIMGk-LQDnCm--UN35MvoGGY2M-Nzi9u9EAWng68NPfY65XKlYylOpj8GnMA48MiPMChJ8mD906wfH7aoG0vbtj8hZdj2Ea7w4ZuIGGnK9jFgeICFwQlRi-4CgkvceFZEGJ31O-fTkzp3dxT~1F2FPWBSwbPmwX8FP609gx80IR1MjRgqMkCw7bk5wP4LOGxTaP4v-ptNLghBQUWDvSBqIsiQxES9fMmMDEHGdyTf3~A2SExmg6vdSzp-o6uO0S0O-89dkosq7vPkxLQAEk4pk1gDxvWx7lCUO5X3Y1FfU~mhW2e4T2bRu--MylaJLUdcKTI0Oc2MGO6Ug__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603635237&Signature=ozgvROVn3hYGnHSiIaQ-eN1NAy34RBWd66LOZvLynV-9zxFAmA8nblflXtacE6J2y43fC2Cp4NqLR-TMrlVdiTdI1kAqc4LA7osnrTv3TRlZa-5PPoRqWDSXPPNoOzi9dNlaK5z~6e3adha~D8PAXwu7Nw4MMRKx4KerOq5-4TRrnrg22EQbyv674ZlWR2-PDMb7BCphKVYMdtPo4TBEhpFm1RmvhsCG2VTtTsSFWdmoJ0G8Ak4z8jRjR03knv~ESVI4YfLnrSWRmSK6NRfBQ7bpRDgm6mGsNEL1s-hZksECAql2xos~hq-BvGm3mWIv9XKu3HF0nyX7fCJ5HxlI8g__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603635237&Signature=Jjgz8j5aY7dmFNSBYbV~6xU6ClrST5IxQoFTyplad82UPEK1fQayvLABSL8o~uxodcs2SWg1bWrWKakDr0sHYzrLUJ8xRboWRYLdSCASibT6pApjnAzYz80j2RPSeTPGA80hoOCw4lh2~0NOKI2ygH6k7TwMug7-mg-j1390ms~LaSTATCbXMAtR9QhjMPGs~kEqLPycGMR36sD-k9yUfC7QGpw--zK6FlkAv9fpce8B4-S26Kmwck7wUm2AZ3ukWH50AfCfFL52-kWqOkfGuqHSbkTfrwIFilEiQa67U35FXgK7irTwqNgXcNT1OQpnwqdVeUbMP0vfm5gzH9r42A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603635237&Signature=plDy~i7aYg9ElHF-0odbk0J27TTz1RIp7VL1cCib8PJVNrfp8kNgyXMORvinUiPLmtvNrNpgIFmayRxbekPDcsGWe~ef5Rn7zoRwSrt8wNC3UvsAPah1NrCWiZxO22XzXZk-Q6CX5HfZ0SLIeFtAxUOryZgeboIzxGbikeJOoz9dvE3arKA9FRvFOt8p5ZGqzaPf-BAzkohnCaT6eHWhfb7AJYfqH3bB2XrHLYGSMUVAk~Kuy~9ZyZYiq0-SqvTIzzmx8ge5tb67RpnFr9vKi0hAKj~S4cSkFwiNNoEgyXwA5AtSCbzKPx7v1tr2awVvbulr9xxYe7nwJI8OB~Ud7w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603635237&Signature=hfHR2E1W0CiAZ22hbisxK1vXzHRoS07pLi~A1Ne2JcRHuVW9bvsD2WMnTUkKO0IiwRO9j5p3-xcNvdxv~600s7wwxFfSV4hNPR4cOheX-iz-BfvKJ4vIBNI1d1zGF4toCsW8C15wdRueSivA5JQ6NaPNfAuifEACwKO6Dm6wEeivXEGEVu9ewqMyImthulA7Lp7JKYhV1wn8ijJyE-ittWWrSZPH7Emkrz1fyp~fXqi301f-fUo7bv~bwcA4eWOe86rqqR-FG1UJ-8wtyJ1GHm3nBG4Fx7mqRNtZtksUnNLkLFSffe4Eg8M0UoPjSxS9XLmHXc2sGgG8AqgaEI3NgQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603635237&Signature=laPEXVPCG~-0GA6zM5CQcrcPSqPFwGK32rD7iL8OvqwGWSK48lITYgTvfJRN8n4L5lfOmikEEhIUD2fNIJ3vm7WyyGhrH9064tQzKJsKjl7FDdB7c7JApTum-tUoY9y-ACMjLf02pyEq~OnIACL-d0VzAmhAxaet4VY1hIVnrqH1RUEL5br9Q~G3Z0qoJu~VvOTk1wOBUkcA6ArzLJ~VYA1xSV3YUEbYr-NAaWcIO1e9OwO4ay3rivoxTY74z~Ms4PYimF9QxRXlIn0QT8zmOQOoRi4Kn13Z7RK8XzqUJMNbXomv5zKfNIiDTjRg06JNrD99Ph5yE~~hRHiXf1ruTQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603635237&Signature=VgMgXXBa3FhC0AmeIEbIHRS2w9X40p6ftcWosGgMf6hu95D5IogYxNDH3e4KZiJtDS60eFRfI-FwstXhxgzV0JNxB3cBGdvvawKVZdwkWV1ExqSpRWLgeFZzLI9IFm9j~D2GQi3gOhGgXBrzJM~toleh~j99ow6u6GvM7zC8ykWI2Qh7sriuUc0z8RiKJGwt0kQBnQz~KV3pkaA2jkBU5ZsOtEIzxlIX1D~8ldIsUKWbPVlT299~CwG05gx94oEEfE9ZUznk5fKH8cAVKKv0LZZfPXtzFkOPc~im2aVlRmGfNvFgIEqYa8dQJJYfdq4Jf~sY-zWDQMvVIq1HvEogEA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603635237&Signature=eDAzq2ZEpJ7vBgrlZikAzpOFtgRManavgyEi5t8Kx5l-F-vDXCExc-fmqnf8R9cg6VobgGvP8XHqGEqQ41GlYf0uTrkmdKhkXIdn5KEhRZJOfr4DM-6--~12oM89dxeeLMWhBnBvWaHNn03Ys-qwGU1aiOFqQBXETtdbWqM6yOu5cPEYIMsc2EKNlGwp0VFoET377U20HJVHF~ClRglX5VxoM3HiNFP04ul0swLA~-CnG7oo5VyMN6RH-Dv4FCooyDm~Xc~m4AJ1rmWk9qkN1PsoNP8IQ-0hc7pY~mhCF8jzfW4bWnXzhovtF7EjrRv2z~5wlGmXK8QIsfVln01jiw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603635237&Signature=DTirHsilX2qtCSiULzoGA~5drQYjA44Vs0dbj2GSZThPMGB4-t5a20B5gAEEOXFCKyCxKTDPyarFBJu38S0b3jng4PBjY7l-AxZ4vcAOilmvyLKi~McTdzaKw3piHv8Qh6yuqEOpgxIQdpKVpfPWGS6Wsi5KdtURy4m9-TnzUtce-cYlbKocHCz9rZmTXpQ2gUHBvdNLXCxPlSBk5mRWlV2ykG8kh47GwrZpWGkAG0rTvElGor3dF-uZP1lsxmpy4ah-oKq1hPqGFByR~Mu0W4-LeAQzujjg1i65PvECEjLTFzwXgsOZ7qUvX6A~Wmdc5eHGbd0s4UbByJh~keffQg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603635237&Signature=MT7oyG1zie70WA9PNvkrwuFiBYIDatjNikwY9IkNI9T6XUts-SDqc9SCWt1TQso8ILHX6BNNkNT90SN1hvdkFmloZSo~stt4ByBd11j1fhbBsJXyNnhiShWLdtKP9Ss8X~I4r0MMdbpkA2L6SJ-cljWuRrkBEtv4-ZFlpfixub4XTTMPM1qcPVI9hVW5oznMBZtSMJlmeWE5lfFg7dJnItyvQ35ssc1SdM1cbRwP2oSn89lUtU0r~GlIoD3qQmKQlzq85TYHh-PgmnQvP~~di8iLAgc9EnU1Yjn~tU3QIYpPGNfQwYiuck6wD7002bSXDeRzqAkGVumAz7irFWHooQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603635237&Signature=g9453m3W5tNzc0dLrT3-rLlIpZoJZMsl5gAyAsBeZmaz5EjwvAc-Xhg4QGdhVPK2dfEzb1m2~5O~QaeNZqZlR~~q4D-j6EIWppBP047tl4E~rbzGeTSCjVIDi8jDWfEfj4JWI3SwXPivKHMsgw2Wl7Kl34BP8j-Zc2tV58trjPvzI9TnZWXxEWKH2imoNLDXqCsWMTB1Z3Y8idCUODLkhVrj83LsdzMkVcn~~Oy6ZS4Kj9lNbPjQUxhtko2ZgS4rO1byoz168VwoFtrcc-G1dXWMTLNaxvQ1k6fDM-Gaq73GwDq77fPHb-50xT8Nq2BNgWCO2EtrKp2sI0PsOMhwdQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603635237&Signature=ZraUNLD68owaGQ75gwTCEYwHCJoFii-SV5Ju0WPGkxAjbzqroxNCGAuDJP5ncyX73vyPFGw6kkeGm3nxdZcqU38e2EC7i6M1ajPJUT8F6eZiBCx5-u0PSz0TBhobc8lB8iaFI7gfMlOqajZlPPq1Ith6ESqmy6Irq2ApjQAcb5BCdUdmcMj4ZgJnVE3q8cDEBrLxpBgptnczdm-LbEZ3g1eRHiKoAgl7PPSGXL~~Enq0-ck~-h4NrE121AnY7MLY-X5BOblQ60xoYNXnp12VzOcHMTsUcebnduR3SIx36pb7f3oDnS9uzmm1GtjFGm0UDcVR9bzHcF4HbL0-GpB2eA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603635237&Signature=UkkIGUbn0AKUzN0qHuM3rKIPImy-ihw1liuwIUtDp1dgcphpN7A8Ng1ftkB0Za-HISTGdiXaZb8CH1kyoENWD05A0dyacfNmFmyAMaJ-ybpzGPn4PEIVpPL4lBwJF2nvB-SbRrb~xNTRIVb1g9Mgow-dIXS-7ieo8hCMkOQQv-Bf5W1~ORi47QUbViUJMSX1KAWsgjmHw4EMK0LVcdn6VLxOWG0jZflf2l6r-VlQRKUhwvgfQFt84OhYUnuB3OxPKqEvWYQa8EsGXtpgPd7fieO40jf9gxeUdR8Sw2yNQ6np3koASMNyxUxExThc8goDhgspdvtf8jE~8Es2P2WMqw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603635237&Signature=IOuhNkmGVwk0BSo8EOa9iMJ8IxMPuF0~4FEZrwOU9Xhc2-V4eW0AEXzlYny4IsnR1Ln-CHtlnxAz5YrzfhDnf6TJyx5csu-KnWeJ9HBmIeET4hNm3oropc--9Ml2SwTGzWslsNUaDjW9EpENOBV6bI0~QBlF2Nke61I5Lr5I~9AwILj3BlDdyLI7DXq52hosbRm4q3tgu4lRJKDIS5-QV4QztI9-jUX8i3g~7fciAfmDvhZ8KWEqnYWXxMTdn1KG4MfURddbfuvVz4zaarjW1z-tfBvn0aHyaDIzlcbNikK5KLuaLi5bw-CJ2cU68MGxWOnxU9KRRdOFSW4e~8UBJw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603635237&Signature=Eol3WFtjnSWoNjpeTh5aOE8HpScLuXIQ0lYWo0p1sWdJ8g~lxb44O1jKpGbx65F49GnwIkuDvh-QKR9ZaBWHvj48NXJe5yH6EZaaD7AXtm0Wxu5a7UII2XjnLiKPvAFRQ55w3aXDuO1DyvnKZR8QrrcgEZLkRp8NxBm5upHe7yn58wixNt~ZJosLM5TNih2wxbhUj5NZX0lUk4103DisisnnWnzPdo9uYamU9byVKxrHkub0XnRgQ6nL~7uFrO64lHbOwl56pP03ncaPnB2wTBsjM22CUSMV912iuEsQAjpv4rrn0f4LUS~g65dkAtCWe005uIEEQK7gLxrPl0yYVw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603635237&Signature=UHTFJt~lqo877mbiXCIxv9h0AySbn8cjHAcZf6GjdhX2lKVOwlvxgpdUQaVbdf9iYso-PSsuekynnGpZvymZzZR~RTXq-wmchFyKdrrPxAYOY-7IpLKm2ZT0R7MxwVxexslUVct-I2uPzVxVMDlgYphhAx45tTLqIE9gg9pfne4hrw0JbwYc-Lz0d6m7QfJu4y0O9Uyd~QBJxCy3fr-XOzHgE3i~aa1eOps2JGb0TuCjfZ6hcThZ4p6PvkBgVySD6lYlFUVHkcjWKE26X8MpJciDb1ZxCopQxN6S1TJygLOUWUFlph5kcyPCuePJB6wPKCMMtKy0kejxnVzMk30stw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603635237&Signature=m787OyfdBcIPoe628D8Fbx4ihMOixkfYUSHIfMOTFuvlS9BUYf8PRc3zkZXUcpJJmZX2czr4DOQ71UIJVINpMuBYnzOo9J68tTn4D-iB9TL9WVtb0icRiS~kaakv74mRpHsTOaldqapxRhgQylmcq9QNHvQ-6Lsx8kSYoxnIqM4ihwHWn~qRpxoO9WQzTq9KRbf4He7plTPDYiHpHJBBdmShzVGXRis09V40afm0Ngpk6ik0SsOycHHuxhcx76APcrpjeSEDhSCO4x3CdDNDK9a2U-PDlO6UjVfUSgkck22MAC1RA1Am5V~c60VbZ5Rkui8PMb4IrX3PHcyvdEjiVw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603635237&Signature=IN6joalcqqJcp0KT4o4p4bRfttPAB822ItMtdI6DFKWUJ4-eD8GCqyhdCHlb3N3jfALg7PRVAE8BdMYH7XF2-wphGoXgIZ500rz5YJCUSzqjf-lP1qHUw2wnuLBWBJ2vSikB6MBQkiKzwgopPu-BzppEpCjxSw5efKULGa05FMNsEBP54ofNeiItQO69COovB3DsEtljeiDER09Isawc86rw72iSQRmw9LZpO2C8gw3kNR07VMRLPahWtqL2vGd1IkX69W7ovjSkydWQix1mOs-1a21IjVRJdiPTHK1TGW6yEB8tPpqrEA9sYybTBJSva6PuoOgzpfCMli1frQnAKw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                      Save Receipt
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

export default HomeReceipt;
