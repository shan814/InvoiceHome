import React, { Component } from "react";
import Categories from "../invoice/Categories";
class Qoute extends Component {
  state = {};
  render() {
    return (
      <div className="padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1">
              <div className="text-center">
                <h1
                  className="title"
                  style={{ fontSize: "20pt", paddingBottom: "5px" }}
                >
                  New Quote
                </h1>
              </div>
              <Categories />

              <ul
                className="nav nav-tabs nav-tabs-wiki medium"
                style={{ borderBottom: 0 }}
              >
                <li className="active-invoice-tab-for-guest">
                  <a id="change-invoice-type-to-basic" className="acts-as-link">
                    Basic Form
                  </a>
                </li>
                <li className style={{ whiteSpace: "nowrap" }}>
                  <a
                    id="change-invoice-type-to-advanced"
                    className="acts-as-link"
                  >
                    Advanced Form - <b>Due Date</b>, <b>Ship To</b>, <b>Qty</b>
                  </a>
                </li>
              </ul>
              <div
                className="page"
                style={{
                  padding: "0 15px",
                  backgroundColor: "#E2F3FE",
                  borderRadius: "0 10px 10px 10px",
                }}
              >
                <form
                  className="edit_invoice"
                  id="invoice-form"
                  action="/invoices/40820788"
                  acceptCharset="UTF-8"
                  data-remote="true"
                  method="post"
                >
                  <input name="utf8" type="hidden" defaultValue="✓" />
                  <input type="hidden" name="_method" defaultValue="patch" />
                  <input
                    type="hidden"
                    name="authenticity_token"
                    defaultValue="4+IhaDjM6hncv7Hnp3/gqyA+zXKLrrK9gU8iJXo/qXjUjv7HVq9Ugaz7egDffI7azrbr2qcKzTwfXi0nwPKyeA=="
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
                            className="btn btn-default btn-yellow btn-lg"
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
                        &nbsp;Quote #
                      </label>
                      <input
                        className="form-control"
                        placeholder="Quote Number"
                        tabIndex={3}
                        maxLength={100}
                        size={100}
                        type="text"
                        defaultValue={100}
                        name="invoice[number]"
                        id="invoice_number"
                      />
                      <br />
                      <label htmlFor="invoice_date_issued">Quote Date</label>
                      <input
                        className="form-control datepicker"
                        placeholder="dd/mm/yy"
                        tabIndex={4}
                        maxLength={100}
                        autoComplete="off"
                        size={100}
                        type="text"
                        defaultValue="18/10/2020"
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
                      defaultValue={73617505}
                    />
                    <div className="row">
                      <div className="col-xs-6 col-md-6 form-group">
                        <textarea
                          name="invoice[items_attributes][0][description]"
                          id="invoice_items_attributes_0_description"
                          placeholder="Description"
                          className="form-control description"
                          rows={2}
                          tabIndex={73617505}
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
                          tabIndex={73617505}
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
                          className="btn btn-default btn-yellow show-modal tax-rate-name"
                          data-index={0}
                          style={{ width: "100%" }}
                          data-item-id={73617505}
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
                    <div className="col-xs-12 form-group">
                      <button
                        name="button"
                        type="button"
                        className="btn btn-default btn-yellow"
                        id="add-item"
                        style={{ width: "100%" }}
                      >
                        Add New Item
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
                            className="btn btn-default btn-yellow btn-lg"
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
                              <i className="fa fa-fw fa-user-md blue" /> People
                            </a>
                          </li>
                          <li role="presentation" className>
                            <a
                              href="#jobs"
                              aria-controls="cartoons"
                              role="tab"
                              data-toggle="tab"
                            >
                              <i className="fa fa-fw fa-paint-brush red" /> Jobs
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
                                    href="/logos?id=40820788&page=2&ref="
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603138733&Signature=HmZ0ztQtYsxmW-3md8XUaeyRTKxSrRJwQJWU6v~e6e5FZGte5B2cfR9LJGkd-d9Zu0wpHSkbmZbt7tKDhuMbpMG4Hr7VW9ERua2KA1MUM1vOpwIRy-cS5i073tA65B4joX0iDog42x9hDOjv5mzOcgku4xFfLDmB~MbMzdhES-MMX6XppdZhPa-WQn3MP~pvN-lVIIgptFC7fw~UJC6YVN2~3pJWL541oO5jItPYeMFaZvmwZzFXOY1eoLPFEiEQeq1dufubJCO1wyGLMTxvlQPIaIqzrnCRKK4nN-RqCPQhPoMUgjhehAeJUBpIKP9BfjUl1~R2GXYGsXbxiS4N3w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603138733&Signature=XaCcrqfZEMMncXb36AFey90kK9b8jckVWPvVph2NVLr~Ltwm-vytyViriMrrMaiYh6nY8DhFiW96nreHyLMVVmw~duzo4bkgys2Uu77DSYjhP2Fi6j3Oho98IdxpQn3xIp09RP6iSoAlabcx4P4zXY0ZH79qEQ9C7DiUfBM9hjGAkVU7JO~j1pvcXGbFOXsk4AaYfIHbaBdhQJ827KnT12CIKmVaSmxcU7wojT~GK6rNUJY1YBpmq-dkoRyZmqh-29XG4wSMMS2R764oaNM1lESZbe1XhB9LHiXfq32S-BNcarx1Nj2cqX~BsfUtHhmUW2lvYTfJk9ajGCqhnIPfdg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603138733&Signature=EOFe6LXtaqYGwc1jhlXBLfB9QeoiDvHpt1~GFSdCgtyiYtStlybhP0OMATSTeWS1A3eb-tfvRzLO6Rvk8gRWYJjoBlYMgs0GxFZ6hspg39y5JaMKMsUs073t-Thj1uXgCwobLO9w8dYEFukoOWOkbQv17TNNbctxM6UqzBSpb67z4l1mKgS3uogbDxBk-1MMYcwuKHcPCNA4x88mFQXJX-6St9UWzmgd1krmHT8Sl6eHvpJiXRkmp0AIQI~XybeE70-9aT6i-6ebAqUSjg~XKiAkSDZUQAUny9j0XQL~cM7Pv1Bwr7pO-WLh~QOM96R3SgXQ1mjev1wijMiAXPWl3w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603138733&Signature=GcfwC6D9JAA4Qo15-TCIkiFIDaGGmhTyGjrnlFdweaRD~4ih3qe0Xi3si3Ki99td9f29jogEfl9mwhEIR1tg9ckQzsLAaQnjmEivEFR2k-7j2JNpRBCXxpOKI9yw7ARlP0xA54HKDR5fTSpduJmMmNPg3inZKuFF3-liMwEZ4Ei7kQKmBcZ~0IzfcG4VmvpO~wYyaFQt21IlGiqTXRcfrnUZ-VydppHFrINmDw-ZBcD3B1hg4-2Jns2Sic7XJkvh4YALOYONWxJcTRjU7wfMh03Axd7KEgfnx~K89KKM6JumS6WxxuGWAQ93JCKWrz8zaO2Ramoi67L--pYI9BTRdw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603138733&Signature=D0O2R4Hs~4wNOE8bjKFaD-bYYcYkoqvGU5265ISiZGGfpJMuX8AiczXchXk156sQlfQk~Ta8T6HUorAC9sgZGacmZKhMLqc6N~ulNOK1kyPI62l90lC88uTGHtcyVfICXZE8dkRVaifaHaIcz2qOK13edbzbEyLZLHhD7UC150RTMtmuODm2Nfp~4-kK3JFp7MWrJnRQB7sYSgxL~0c5fHx5ep1KXt2P~zr-J5T7fGOetgDcrCAD5idi-UTFswdtnZcT2CoPNftsiA6Ba~2PGEfozGxcHEZ6Zd7nG9kkk4K6Fkzef8woVOf60cu01wDk1fA7Qx0VAurc1TXUZ5Q7Iw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603138733&Signature=ks-adLMo6h1f46bbcTNNf3YY9GKLuo36Aw~~R~LfjK2Yizbb4-BjGmvMQ5vi2hG0nJZk-z~KnJ0azJChxjqRdBn4UNSiVuPG74G-gJCjGt5WF4EB37Y4q0e09hVlEucONWtIPN8vVhDn9WcFYQzRHlYFnIKSTq-yCrQAJ-5HymQjs7bS7dA~VqrTSX40JWA9W3jPSaxMOcvMhRHdgfE2Q3enYDd1rEUdJIeBH7vX0i~n9z~qraOCQy8kAgi0c-paYFZgJmxsodI~1TzuG9vAXiq5lHHKc2BP7GohfHmiudYpSw8OHyL2VcR6gzM369adv~MrYBqNfJcWNGibe2bChw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603138733&Signature=Q0L0Vu27RSvtlAHl8r6y7fo~n0cIqApFmt-mtuFZce4tYgpsNId5ZQfvqsR77eDvB6XY~A~cZwKCWSYw4~se3vPrAa8L7mx3Hd3fU3sGlZ8nIW65CMWGbewmZmXq62~sFEGuZsChSS8vp1uG2JagtIZtQolmw~6hWUfxD1-f487QVbhCdp-PZKqHiV-ETjVxkeTeVVen7fbVnRwL5RMzoHl2~xw4n2fjARQ4XeRPJOfWvIHPeG1fjjbeuC7aV5G5p1xMMJjY6P3JQmIc6gh2~UN9~sJNOIQarH26uEsvE8CJ2KAe3M10zHKUruDPMxekVvvyQbFerERZjYcliZT5dw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603138733&Signature=OLw2JWM6DXnQEkloOlRcvJtXBiox0bx9q2VtB22I03LgGMCDnUa18fHQRVpPbDW0lsQFCLYpZvjYnweUIQ618qbfYXpvftT~PdKyILkkPCuPCxPIwWzHS4TZIBR3ezRbfviqnTY647s2B62z2VLZMaPttaPSI9FHPWmzAY4T5hVPteEp48934dMI253k7JLSyfD3X222Pt6PKGaDdk51gbPsRxosA4vmS5q38tAZppSoy0NgpCenjWZkr8KdrQDQYnjrLf4BVXFCHhXxnoAgFEYS6lW4Yqxm3Y-fCNHa1R8CeCOkNYpmHN5opgu2Ju2d0fnxLGZlFUq-W3TSrgfkbA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603138733&Signature=OEVrPXTNcaJaD7qCTAiy8zZVDisfW-xZzhsfNtba1ES11o1zaKD2Mvzpq4ICd22oP13YUp9uGaCynPObMsmgMoscPEJQkO56ukey-0kLJFOkSOBs3gMyOhg9micW-hTLrn1jA4K2h8EEtB8XoPNBO7dUVnEP7tQJfVHX4yByP0bv1zzTZXdZtiOJ1vzKbF~XqcAH7oIV5jE36sZOU8GvSXvPCWYKc6Aq-abSWwE4QlpmBVsp~ksOfFz4MB~TXFgooTqS-tmpffWPdRnoaAI-JV4fmpZWf7Ui5Yod3mSDO5ErEJrZ3pwFRmlHzQC6lXg76tjz434x2igGMq4-HNCznw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    href="/logos?category=JOBS&id=40820788&page=2&ref="
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603138733&Signature=TsnJIKEBiwftU26Qr9b8N~uc4oPpn-fTa01RLn9w6QUj2XjuSbqoiyHs5aNCBaxMg5pokj7SWQdvHoWa9ta~JoGuLjeGqNPL1d0PMPZ144kkM6xBKfF8~hDJXB7adihMYFylXIgjd-NK8VWISor5N-UvqLvLLOUwnaRaroeHuMSIkPgqQFjoDLGMBRQ4raWjMWXqEcjh~rOlAoRBYn219~7LlbaOv45ktY8ONIAYdgyk6C9ucHgTHsGNzGVLuLcDpUqLnToT0nt~n0WJ9znLBLxj-SR5syqVZw2T~JOrn0ogKTGvjK4qL-NfahJnndpo0z5pAoBBORUTVOvs8GbKpA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603138733&Signature=jmf~wo45kuZTbwcoP2LXzmGXn67BdiqICobfvW8ikKLvXmGX4kqSSQ3OFyLm-UI4epNGfHW3E-SdKt6SUG9f8FipV5RXDEo9ovDmgly3TkJmDk8gu2cv0IYY9ODF0EANRfyYwXBgPLKJRKh93kFHn-TTz5WGbipNdHC55IxzTKdK2kBsHSji0qaHTc0sSOVHNvdTRqQ02LhwJBRNDp7TTuO~yGQHKlH5UNglpY9T4AIqy9LmptLn6Bs6pWUpady2tsbpDsGE~VhJU7-Ke49H-wOAvyw7hSX2Imjs9O2bftHrojNjuFfZD2y39qthL3aW6r-Rq4cdg3q5DDSdR4ZJVQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603138733&Signature=D~F4Gklv3gPfYAt3KYzRru-nbwoLTmy2plSZ5tTd4Gp4ZhOIDFwBxZ2wzTa9rlns-8DkmEuWtpVGm3MwFLwK5OmSxM2ypaVpLsKOQKJJFCZMJ1cF-7JX6j5JTbcl1JoXcx0ZBvgDKmvp4~xjuqDujMO2Fg6Crb5HS8jef8nlGsOH7WEYOxRuX0wvzii4xa8c796qsn8XYOASJ8ZP60O0LP99cRFABdHUeougzZ~yIUcY6wi0w3kqG9ueqIleFAYFaKY~WotfcEND7eqvxkJnL7~NvZfpLq-upPkTmp~pZcTJ1KzgvhmQNDCWtt8xTd6dr9ptrJuiE3usvWXm8lD5OQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603138733&Signature=WCGyYuCD3qipMJV0IaWfK6Ol~B2jgUFfgfALnaTC0-dxHUftlq8y6jHZqGkel1qFPrQBkI01vzzBaZK~~ro-kSSXwYtVDSdMaXDRT9roBiINUgdCTFkqIcsrG0~Yc9wPoMd2bRhe0n1wSNY-MZ5QEf3lHeiDCOWFO6jjrM5csEPJI1olF4OiSY9uHQQfMfzBWItGCszVYd7EjuH4v7sbuB6f1-vvx8kJWZ2vfl8yfudqF-VJYgnhPUsDRNwn82~gq7GFEWTicjR3yrltdv8kHeBL19mh-V0qm27Jg-199NdI1JpS6j5nE2gIkL2LsVNc6RkMbSmkE-f6d-s7SqebEw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603138733&Signature=DU7LXj8EHy8aII-zkRzq7DwYW5s3mZ7D2xnzgTVPRXtumLGVj14MgJvvdhfxWyJrYd0re3ZSMIUIkYp27E7mN0aXrD0gY~I2o~hOQIzT0KV670b3ubdxitn2l88P3HLzwjympRGKg2Deis2HSQyq6foH9teOHdoGPgDb8Ci9o8JjmsRVAHQlIFMDpxxynb3DG4YRZG15hX0QK1r-4DutaxQVnP4Fp1grkXVm7Z1k5GZ9iiPAOJKrHFkwQr0e0MHEYJTcbCB9PT1C5VQlfjmrrkT15-iQ5j-73nLtN7-ytCms67xj3h9XfUHtWO8lr3NFM5K9IJEj4~dG9HXyXJ0Pwg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603138733&Signature=WRUIx2H938dVnfkM3HGPne6N~qsCwyhveEW0t05C2XcpMY6gXAKAMwXntNIfszxEEmV1NSTn2BtvO8qfUav2xFWzyKjtzRjfAAaZucmUYxYJ8bgWhr3-3GYYLR~YECqJ33cWdDhdXd~LFaz-~hcY3EuQA95vfdN3O~UE97PrrdHQ3epbAnhn1O8kwuKh-qFWSFdiEayyqzY9ruu-WPpuGROORi0lmvkasJeBiBD5Gc9uoSqRXDBVNzjHooJNtaSyz8CxWS83~v2et8ieuEagk38ST9bZtubyH7LyHvpIw8q0qrvt5B4KESOjTeZhL0OfsQBG0kyV2F1PdgbrAM2wEA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603138733&Signature=nrBCdZkfqFei89kfHH6EP6vK4z9iIJyC8g-SV8pJvY5DAey65KqS~lnMsU8qCHf~S1MfIXk4hZ8rLf9iLV9u-bwRXOMIWcdvBOa00yIsL-uNR7B1Jnymdc3fcoL5j-yBb~7yNEYDmKdKu~ysRRC1H85ZwvMUqCueWqF2mq28bsu-JbwhTWCZmW7-Yl1LCnbQ9trd1NqTIqzL0OtTPue33QBONzIPpUFJffdd~xzv0j8xq6yJ6WEv5VkZ1WsoddST9wLKQ9RhdmocJKhdfZiDkKeSko~aS2wk3NKtZp-MN5~C6828z1mNj3QnVjhtMpB9zKcprzC7CNWaAQ-n81V5nQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603138733&Signature=CUA8vfXvKIG4umMf65UWEpowEeKAcAC-RoTJmvCTd7gukCYgYznS2CDpN3Qom-BsU7DmSC~IFxqey7N0x-Ph4HZkfEf56XOF1~8-FKLyeOTPyr~FrF1afdioVvIDZEPto-2Cmntq-0qBXW9ubRlaWdwooeh8h6iSkNidJ1UIrXapKlIMpbUkFofJLNV4ZAplAQYtjElVj6eYMgtyAEWJZlU5qBLc7ClhgkNo5VUdf24Mqis2gwbrhC~yhq63WuQ7pOCRelJ6eiIpkvD0gZ~jnfMr9WZPSg50RGq1649RfWJRgsR~qlRpm3s51p8NBiPkhHQoIVR9KBtszCmrIKo9qQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603138733&Signature=fQrkyFJdELVReqbsDMuvm-k5C8uG4fFsSnICwZ4YU4Eb75Sk8FkHLVVzfBPBl5DYfjiXq9Z~JeSwX5GtsLisxE5b~b5s17W7Tl2F8M-VHWz~nKy2Y50LeqGYnC9wK0HknAvItG8avLm4jqKn2Mq0BecNYP9138yftfJR-HMJ0Y~nfAWRR8KtJXdap9W0ghbVLSXgtFoCzLLM-MhQdDjzkXiRsG--VNjxLk3yLtZPU2kOfee3sodDt8uyARI8nopNbibTSvwmV0orT4hYHYO9LyVysXY4cE188UDg8T1stYcgzNVt~Ybt5q~N1EXJql17FqOn2ACQydVSqGo2CNnjYA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                          <div role="tabpanel" className="tab-pane" id="people">
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
                                    href="/logos?category=PEOPLE&id=40820788&page=2&ref="
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603138733&Signature=jQk6z2WuJx4gXqFWQlDN9KYZiqL5wDgiRdLqDbK~scaQ1ywCQ~nYCeXwEvYrtoUdKp9LFyLmRvT1E~eBxp8kMaB-86oLQ2Ouab9glZiyryQ2Bxg-UiLN0WJrPy~jbZNvih9FTLuXUPDC2EJpF5f-6gZM7LcIOTG7Nduu-TGmp4mJP734lUjyYHXqeYjgbbt4ow7tI55dspnfTuQXE-IP77nCnOGZHn6EhyxrTIy3uiFN6HONk8SzRJXIC4SWpUKDfmAmVpRukeEmvz9bnfEpze5B8gLqj24aith33uGOxE1NVyPDTrlZmgcuhgNQUehSS2Fel-h-BQocFGj09XH5HA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603138733&Signature=MafcvWrBg-ETmlryy9KFP9G~FsPiTAADQP~AM4rpenwuk0ErYaj5C-Bz3zcQWzykREsP6QVrM3PzgaddVTsFlhmdwFeJHh6Vyuf6d2LFZM0teA4v9zTrvnrRuIt3JK-MvKLKPClmRpRp2wn7w8tQSmybd-SLQyAb5~f8xud2sifnPNsUOQNAKnFHdEfHKQF4NC1nDYhxf4vr21nHYwKllkBZeWlEE9MdHp-xxSIr2Feo6117K7ZtPbv640dVoDeOvqDp2-RzCOuytZzgv34m3gJpfKmBmauDB10q6IFXy5lCv9Na16HISHObTeKkE1Ct8F4-HUls2pO6amDRUZ96Vg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603138733&Signature=nqQF1P17i4oJPm7ZLajtfP1MDtcu0pIs-4XB7PTiTFcSZkl39kcJsU~7dzJpOZaVOO~gp1kQFadvvVCcrECx-s3SpBXft1mBWOSloQARUc7KIgjqDU0J3uTJtZcKcfRMK9zYgcqhU5ZClz~ySpm58ycMCz3qNniznD~vkS91-b6NoEn0DAVe3uQxh6aSZAm~TZKzg~Tg-NP4B-UMin4dxnbQY~q9m2mtQzy7MSIO3iIpFSAJX0r9sM5UwnWsNVBKWF5XZSWN0qL1VvlQkU1fjNVleiAQUU-14kF2ErXcZJenQtN8NmBcVbG84RIx7rOfkRYKBJ5jphKd8KT7OrcfTA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603138733&Signature=gk3ms1TzudR5sn-RPHn5WU~1bHTS~EFEdQFeYa7XseiUgUkNOpH6CSbytsfbyP68GFxQcJFL8mgRX3FYhC3Lw47IFEQ7B6plHsN6HUJ0wRT~6uYnD6J6DmounZDj2PXVFGPCKdicT6jIMGjLNHgtNE-u1JK~gQts1Chh-n85udu7ztbQIPRxUT5QT9JVpN47kwWOsSHTl4hOFHMQAGDkJoBjMkfEDhHmtEKvHcQOUoSo0STYWTCjpVyPKe-RCqdQLyt~OQHRtnlcD15ClQ9PX7mO4C-DNI7WP4JzJT0fMzEB1YufTDmyWa67R0Zh0kOl8eDClrY0FY6b1pfaMe~hzQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603138734&Signature=aUO~kq5mti4qljPOOc-daa0KUJRVN8oSZoWGVdvWsfGQfyKjFkBSmzcfSzwOdBbdiAzkgYBzSxA8~PQBUg1ZTA3MzXARnCk7QQHXgqAxzknuNl3CjKWKtxeSJVvwFxZjIQviz9l6kjjtPeaF~GGoeE6gsuRYzNhR2Q09cuC9BobqSOnubMZWW~fXsN5sp47j0JlYFv5bTC0vur59vXGWn04X9JIWAWGYX~ttxqSxzDsSXbvPmARHw1f5s7S-4kYjbsKnBCBxxOqOL~HdaLe27bHcILmvwEvmomj0U-92K8xV2jG0rJE220pB0ZWs65zGj5pA-YdntEzlbspLTtctzw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603138734&Signature=S3lBtu0keZPSsXSYn45jRR63G8BSPov1vLrXAWgzQOse~G-cCz~55AodCl56wl-9CfGg9zn-H07sF2vqp5HmNACz9xexLSi1W583pTujMiS5go6vDe5rhUWYiGaPpoTyKNURRFznghTzew08yjKMiJcNsSTtR~qxM~6tpJnns-uGbqP8f57ut0P-CvvVfEHYwQq6dp1YLp3YyJ3b6X-iKooVYEnexOjMG5eyqODtFAXtObL5x31MxaHJUYKvrMdaxW6GzC8v5OJSg8sAYmRhf-ChZPD61iNcFcbn8UQCwlTvCW7TCMwBLGC8SAhne1mVPC4eesXC7oj0FQqGL8e62A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603138734&Signature=gx7nW58PsYE7ImVOW0Nt5UgqZVwZdZu1GEnffKMIF2BBr-7fKYoZ4ez3E~XRWMM9bMfV3FwGvkplZMzbhcF9hrEno23o0GtXNLprwwqG7D4U8QKD7y8WhNmk7Pjpgoxe1v-I36BK0yAeY7AsY8YfifJMr4z1G9IAixAJSYrpgvAguExmRiGiVZnBrjUPeHdYRbQbmKep8XNWVCL4I8~YSMHXfX5B6wkSLDSbV9QxhLpNtF6mkPYO7jHqAMqpX5BJxTWYjg0iB~AzM50AtkpHuywulDVso7HefYTKCSE-Ha281gNTPHTYJmpQBVgenW~8rVQnGlfrvvF33jst5jpMNg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603138734&Signature=oAIXtBE2DyABnYaRjJZCFouUUKEVrtgbN62yBNBoVCdGuU22rUnlMkdicYRWt~4teTZlHGGmft63jYoVLcn9P-hYIv2LzvGbWH8hBMJoTI3ZbcnHgIGL1t4D3R3ibnCBIF~ZMBAlfDEtFPMNSPjdifTLOdDqgsuppmfmolGcHEsQgY6pFVKyZlIofCPQjiu3PSYrq03VTcdDaeTEU5KLq2UcJyWvRxaN0uiMbhXdTDZLXIzpsqCTadneBD0VU8YJRcw02GLl7qOZ~bQ0IK7LBMsVgF2Of1ypSsB~pfCUz8lNOb-E6hHsrc59P5kOxAa3deXPbNWKRvMwmkf3mce1tQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603138734&Signature=PNT4qUgJ1NGniYTVd5f24Sol5-cwcrcn1Vdvet2VkqX3ySyz74UQYILWkuDg9oK4B9xm1PRoov3cPXe1efDQPoLqlrx8LCscp314ozEQrQDCP~VBBMr4~Z6aytAUWPUbwC3BGA3lE1egxsX7lGwS6~nEQ6qNec2X~wDXKF8l8wjXUGje~WNfjIsg~0ePuA5naY9YrV5ILmxkPm4qxoTFBbhD2SrBC3B8vkuPQqqGdL68Rc59LAmG8~V9VVkQEWHHRVu5HHGZ2Tr-kZtqkHTkOUCq6ajB5Ff6X5BgKoDACoIq722rKlqaumJLuGDQLrLDrP3NxtUA3HQ4J6ix1loeng__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      defaultValue={40820788}
                                    />
                                    <div
                                      className="row text-center semibold"
                                      style={{ margin: "20px 20px 0 20px" }}
                                    >
                                      Your logo must be a GIF, JPG or PNG image,
                                      with maximum 5 MB in size.
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
                        <h4 className="modal-title black">Select Signature</h4>
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
                                      defaultValue={40820788}
                                    />
                                    <div
                                      className="row text-center semibold"
                                      style={{ margin: "20px 40px 0 40px" }}
                                    >
                                      For best results, upload a bold signature
                                      on a solid white background.
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
                  className="modal fade text-center yellow-modal"
                  id="signup-modal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="signup-modal-label"
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
                        <h4 className="modal-title" id="signup-modal-label">
                          To print, download or send your quote, we have to save
                          it first.
                          <br />
                          Please Sign Up For Free.
                        </h4>
                      </div>
                      <div className="modal-body">
                        <form
                          className="new_user"
                          id="new_user"
                          style={{ maxWidth: "300px", margin: "0 auto" }}
                          action="/users"
                          acceptCharset="UTF-8"
                          data-remote="true"
                          method="post"
                        >
                          <input name="utf8" type="hidden" defaultValue="✓" />
                          <div className="form-group">
                            <label
                              className="text-center medium"
                              style={{ paddingBottom: "10px" }}
                            >
                              Please enter your email address below
                            </label>
                            <br />
                            <input
                              className="form-control input-lg"
                              placeholder="your@email.com"
                              type="text"
                              name="user[email]"
                              id="user_email"
                            />
                          </div>
                          <div className="form-group" id="captcha-div">
                            <input
                              name="recaptcha_token"
                              type="hidden"
                              id="recaptcha_token_6516e039927cd93802d7"
                            />
                          </div>
                          <div className="text-center">
                            <input
                              type="submit"
                              name="commit"
                              defaultValue="Continue To Your Quote"
                              className="btn btn-primary btn-lg"
                              data-disable-with="Continue To Your Quote"
                            />
                          </div>
                        </form>
                        <br />
                        <h5 className="gray">
                          <a className="underline" href="/sign-in">
                            Have an account already? Sign in here.
                          </a>
                        </h5>
                        <hr style={{ width: "300px" }} />
                        <div className="text-center">
                          <h5
                            className="bold"
                            style={{ paddingBottom: "10px" }}
                          >
                            Or sign in with services you already have
                          </h5>
                          <form
                            style={{ display: "inline-block" }}
                            className="button_to"
                            method="post"
                            action="/auth/google"
                          >
                            <input
                              className="btn nolink btn-google"
                              rel="nofollow"
                              type="submit"
                              defaultValue="Google"
                            />
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="ivXeWNh9lYYVCjtv9+ejEbCC2tbYVJA3PedSXmI3QXIm4wwaa8HVLQYlgYvq5m79oc1lSSL1uTmETFnkMtSbiQ=="
                            />
                          </form>
                          &nbsp;
                          <form
                            style={{ display: "inline-block" }}
                            className="button_to"
                            method="post"
                            action="/auth/facebook"
                          >
                            <input
                              className="btn nolink btn-facebook"
                              rel="nofollow"
                              type="submit"
                              defaultValue="Facebook"
                            />
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="Mu+7AH+rRxoW2MLbwhVdXJLVu4ITrO+Z+7HAirZoWigohPC1vTp4xj2xIVwpvkZ6TgWtRYWXqvjo8VG03/lu/g=="
                            />
                          </form>
                          &nbsp;
                          <form
                            style={{ display: "inline-block" }}
                            className="button_to"
                            method="post"
                            action="/auth/windowslive"
                          >
                            <input
                              className="btn nolink btn-live"
                              rel="nofollow"
                              type="submit"
                              defaultValue="Windows Live"
                            />
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="uHf5AoKUsGF63eccKTZkpLwzBpdJnOf7QhUD/an/u7NXzQGqXVYIqpr/XXz8n6sCyVyA1PUfOi42ad3fheqFGg=="
                            />
                          </form>
                          &nbsp;
                          <form
                            style={{ display: "inline-block" }}
                            className="button_to"
                            method="post"
                            action="/auth/yahoo_auth"
                          >
                            <input
                              className="btn nolink btn-yahoo"
                              rel="nofollow"
                              type="submit"
                              defaultValue="Yahoo"
                            />
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="v4aZbUQftl4yqW1x535dfdr5ChJmrd2Q7Q5ai0WeNdd8q+ETClUdkOm9ywTKpYdjEBTzC3N43K0dkLAyL95/WQ=="
                            />
                          </form>
                        </div>
                        <br />
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
                    id="done-with-signup"
                    className="btn btn-primary btn-lg btn-lg-done"
                    style={{ width: "100%" }}
                  >
                    <i className="fa fa-fw fa-save" />
                    Save Quote, Print or Send via Email
                  </a>
                </div>
              </div>
              {/* <div className="text-center">
                <h1 className="title" style={{ padding: "15px 0 0" }}>
                  Select a Template
                </h1>
                <h2 style={{ padding: "0 0 15px" }}>
                  <a
                    className="underline acts-as-link"
                    id="done-with-more-invoice-templates"
                  >
                    More templates inside!
                  </a>
                </h2>
              </div>
              <div
                className="row"
                style={{ marginBottom: "20px" }}
                id="new-invoice-templates"
              >
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=165"
                  >
                    <span
                      className
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "40px",
                        height: "40px",
                        marginLeft: "-20px",
                        marginTop: "-20px",
                      }}
                    >
                      <i
                        className="fa fa-circle fa-3x"
                        style={{ color: "white" }}
                      />
                    </span>
                    <span
                      className
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "40px",
                        height: "40px",
                        marginLeft: "-20px",
                        marginTop: "-20px",
                      }}
                    >
                      <i
                        className="green fa fa-check-circle fa-3x"
                        style={{}}
                      />
                    </span>
                    <img
                      alt="Quote Template En Neat "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Neat "
                      src="https://templates.invoicehome.com/quote-template-en-neat-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=1"
                  >
                    <img
                      alt="Quote Template En Classic White "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Classic White "
                      src="https://templates.invoicehome.com/quote-template-en-classic-white-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=88"
                  >
                    <img
                      alt="Quote Template En Band Blue "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Band Blue "
                      src="https://templates.invoicehome.com/quote-template-en-band-blue-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=164"
                  >
                    <img
                      alt="Quote Template En Military Orange "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Military Orange "
                      src="https://templates.invoicehome.com/quote-template-en-military-orange-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=73"
                  >
                    <img
                      alt="Quote Template En Us Flag "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Us Flag "
                      src="https://templates.invoicehome.com/quote-template-en-us-flag-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=3"
                  >
                    <img
                      alt="Quote Template En Modern Red "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Modern Red "
                      src="https://templates.invoicehome.com/quote-template-en-modern-red-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=206"
                  >
                    <img
                      alt="Quote Template En Cool Waves "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Cool Waves "
                      src="https://templates.invoicehome.com/quote-template-en-cool-waves-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=297"
                  >
                    <img
                      alt="Quote Template En Dexter "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Dexter "
                      src="https://templates.invoicehome.com/quote-template-en-dexter-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=87"
                  >
                    <img
                      alt="Quote Template En Mono Black "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Mono Black "
                      src="https://templates.invoicehome.com/quote-template-en-mono-black-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=39"
                  >
                    <img
                      alt="Quote Template En Oldie "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Oldie "
                      src="https://templates.invoicehome.com/quote-template-en-oldie-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=4"
                  >
                    <img
                      alt="Quote Template En Classic Blue "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Classic Blue "
                      src="https://templates.invoicehome.com/quote-template-en-classic-blue-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=215"
                  >
                    <img
                      alt="Quote Template En Connect Rbw "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Quote Template En Connect Rbw "
                      src="https://templates.invoicehome.com/quote-template-en-connect-rbw-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
              </div>
              <footer className="footer">
                <div className="row text-center">
                  <div className="col-md-12">
                    <a href="/" title="Home">
                      Home
                    </a>
                    &nbsp;·
                    <a href="/templates/invoice" title="Invoice Templates">
                      Invoice Templates
                    </a>
                    &nbsp;·
                    <a href="/features" title="Features">
                      Features
                    </a>
                    &nbsp;·
                    <a href="/sign-in" title="Sign In">
                      Sign In
                    </a>
                    &nbsp;·
                    <a href="/signup" title="Sign Up">
                      Sign Up
                    </a>
                    &nbsp;·
                    <a href="/terms" title="Terms" rel="nofollow">
                      Terms
                    </a>
                    &nbsp;·
                    <a href="/sitemap" title="Sitemap">
                      Sitemap
                    </a>
                    &nbsp;·
                    <a href="/privacy" title="Privacy" rel="nofollow">
                      Privacy
                    </a>
                    &nbsp;·
                    <a href="/faq" title="FAQ">
                      FAQ
                    </a>
                    &nbsp;·
                    <a href="/contact" title="Contact Us">
                      Contact Us
                    </a>
                    &nbsp;·
                    <a
                      href="https://www.facebook.com/invoicehome"
                      title="Facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                    &nbsp;·
                    <a
                      href="https://twitter.com/InvoiceHome"
                      title="Twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                    &nbsp;·
                    <a
                      href="https://www.youtube.com/channel/UCe2AUob8Lw3yvKFC7TjFBzg"
                      title="YouTube"
                      target="_blank"
                      rel="noreferrer"
                    >
                      YouTube
                    </a>
                    &nbsp;·
                    <a
                      href="https://www.pinterest.com/invoicehome"
                      title="Pinterest"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pinterest
                    </a>
                    &nbsp;·
                    <a
                      href="https://www.instagram.com/invoice_home"
                      title="Instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                    &nbsp;·
                    <a
                      href="https://www.linkedin.com/company/invoice-home"
                      title="LinkedIn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    &nbsp;·
                    <a href="/blog" title="Blog">
                      Blog
                    </a>
                  </div>
                </div>
                <div className="row text-center" style={{ padding: "1em 0" }}>
                  <div className="col-md-12">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.invoicehome.invoicehome&utm_source=mailing&utm_medium=email&utm_campaign=report&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                      target="_blank"
                    >
                      <img
                        alt="Get it on Google Play"
                        title="Get it on Google Play"
                        src="https://images.invoicehome.com/googleplay.en.png"
                        width={162}
                        height={63}
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://itunes.apple.com/app/pdf-invoice-maker-estimates/id1435778692?mt=8"
                    >
                      <img
                        alt="Download on the App Store"
                        title="Download on the App Store"
                        src="https://images.invoicehome.com/appstore.en.png"
                        width={131}
                        height={44}
                      />
                    </a>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-12">
                    <img
                      src="https://images.invoicehome.com/flags/flags-iso/flat/32/PK.png"
                      width={32}
                      height={32}
                    />
                    &nbsp;&nbsp;Pakistan&nbsp;&nbsp;·&nbsp;&nbsp;Copyright ©
                    2020&nbsp;&nbsp;·&nbsp;&nbsp;Wikilane Inc.
                  </div>
                </div>
              </footer> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Qoute;
