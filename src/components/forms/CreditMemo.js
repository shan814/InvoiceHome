import React, { Component } from "react";
import Categories from "../invoice/Categories";
class CreditMemo extends Component {
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
                  New Credit Memo
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
                    defaultValue="FQHKvsW4ipqhhBhyYYU72Gw+2V+QKRxFLPqgbfB+cQ8ibRURq9s0AtHA05UZhlWpgrb/97yNY8Sy669vSrNqDw=="
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
                        &nbsp;&nbsp;Customer
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
                        &nbsp;Credit Memo #
                      </label>
                      <input
                        className="form-control"
                        placeholder="Credit Memo Number"
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
                        Credit Memo Date
                      </label>
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603139275&Signature=lgUljqDkB36Adnt7Kgnwm6IzydJyWFk2g8rSjLV46pXZR5diuahFLZMSscP1kvJ-w~TrcIA00G736XfZq-5ATLRx1qdrC~QHmurXhnvay5CdqTIjzLGxguRskhT2sDB4y-tp5KFz1Vh6g1MKRXFfBLAVNrIWxJ-MumCNdnmqHHOzJg3OA80vZB2SnKXTdipz6-~nuk6JrvXYERUq0aoXxZ-LEqP8RXWwOpSf1vMqdD4TUy2~6WAQxDHRf0U7AEi6U62WVIEQDSx8dzj7zS1D9SBC59dvnoe7X-33jQFpY4UUTNC7SrVeDZPoi2sn6Du0rVB4BRG86pMpqbBCQY4rbQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603139275&Signature=KGSKflGCv66rrAGNRPd7YrW9cyunoTXkWmZ3kxLqKGkepF-gqWJwlYvurhLCpyO6JdB3uLIHxx1z0CSIMSHs-BPpm0xYJkg1WCnvShF8JQjfnvc6eyozQMTT9HYXtQdAvGvmKvQrmaB7QImxBE8AZwtRM-4KsfEJ9~tmvnWB9z5VLTaQvCEUGlCIiMwYPX31iVK~mV36acOjPMjr1rwet1LurpCdzzSjv4ZIhr2CVQ1Xjhk1PY7igMUqCH7xAVGjfB-7QRN-kZkMuoDcqX1nDi~tqRoN0EbLpDVESqktZzFS9amxJdro5be9gHft5~mKCl5GhmFEeA6h~YCZFNphcA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603139275&Signature=VvCB2B2XbA4y20RHPED07pVD~iqc4giwm1OjW6de7RvWSSZx~nRgQEHWmJsieyJNwLRClXQ2KpbnJSkUpOlYDpMOqlL1PpNSWpXLHqQHmEDOdWqoR8M-V-jkP0wuCMcsFumUAYkBHFm3nCuxcQrzxXt5RpVRLvES9DhHywXVsFWJGbJ3LSBj63gneDmBiyByoRehK6ky9BAawHwVwuAeyLu33kx7M14Bk~pBn1tA7jMo8s0recjDUQZYXhHN2gco7V0i2HUd6zjKhZiKDaAiGUnx0jSkW805xFN7miZePidAqcmJgI1L~kri18PcgV6gpv6KRji1OGq6tNx1inw1NQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603139275&Signature=cohHmdKPNVmpxjOvKYG7Q6TsV4iaSGDKC-5m6jTg1OfAtHGT5vvGCZolLk-br2Vm0qlrmmIdcNuevnCvxlLO145CDiW2kvoz8Mt4-N02j5DoaZ-e4WpdedWTy1dx7ZXp-4xi4DVK1mJVqbCqm~KSoRJmtLExzEEUQUAKWI8qTWg32g8cbxzqfqgQwh5ikmkskswDJT8rASYoqkipk2DDKyIT2aTYgRjEKco2HS4Z3~U9tp~S5nwHRgT1fmuoFtwZyllSsVi8jaIh2lwp9k38EOWco1XvLZcmw7a4Nm-wbjSwIcwz4rQ3QRw6WuZGQCK9~bi0aQwcHrqAEZu8EtHA9w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603139275&Signature=DbaOS3d6kk1Zumgm3hNzWmcxoPBuml2jPxbCKG1SzXmHY-nhewt~zZVUHSq26cly38kUCeqAKKbefG235GnPnfAXEVy91FF2hKPAUh1VgOPk8IjwcNUjk76s8EuNU1491lgw-EN8yY-TnfRTHkz6j3lRaM0D8x9bXmRMpcSpLYBETt~U3fZPtvjLjhLr92cvGfqAXaReqmLXnQre9nksSIvKBoxCB8kgxkQvdjpp2wQpMbYopIXdM5026gbOZFqVsEwc2D4npuQeyVKnVCjSXwScQ5PQlPbejaDTMtova6b3Rw60D6Bgi~06azQQi6Hg-0M4PuIYIRI8X75TJ-aPvw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603139275&Signature=ieJG4YspsbN0-lPQgLpilNA5gE41DehZjrrQZueu96cE7KCAcY-tQxAddOHwfuucvD4QPhAq7s9vkbsRvHcttsaV~D0sFrDd91m~V44v7nViSpi47DbiveWpmG~fpifj5vZnV7~MOYJZIet12q7nVk9QLek71q-mT~hTKGgl~NHlB83Y25KUNLUsVZJHb58YjdcyK50mCmuqygQhwPShqAZ7j6i3KRJxBSKG8oNS-hSqkrV43wPCt7LlWOe4svnBbrpZtdEthqLqjk3boTF0DdTVSGDiV5ckZaC-Yh7Mdn1fW97UgzUsyY7465OHryh1W2zOerCZKgDUobMMeaS2sA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603139275&Signature=VIFh9otWlWZHHMBZbQ0yvk5DnP9NYlHvcetTRfyzJtLMJIjuh1ZXASgF5~SSFNKvEpZwODEZwkj80o5MtT-GrOS8cuvqIjHqx3tJ7VmgjccW~hQBiGQ0Sq0JH9EAvD4BDlBXdo3VbE4sfmmT8SeeOOiT9Qa2b6qXrEpYMiASAj0L2fNxIPeKipVDdnU8MoIvvbWwKMl~TiRY~btZ0tUL1KqncNugRb1jNK1WrbnGr5rByFUrjnCTkbgkWfX5SgNMXRmscJ58kMe4C5jXAYBgsxTuNA2hLCyLlWL0os2jBETAeQCYE8n4UauZ-AB6abBV8imCzTVJFPbn6fvyc0helA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603139275&Signature=NA-VOjPtXh6cVuRRET3lpeYWIs8xXfucfG9GHV3KIRC3ysUPFuRVKRjYalcURRDCfNCjOAdexwjGJA9Qk04GIErk75g4pPoMqbCGu9UHHtt4PjV3gVLM5vOgBrix16bCfyG-Ky0shE0V1PmfhkEgHmnGjD8bT5m9cN~1ghCNa4TtdQqAjZ3~52LmQ5suVKdl4K6cVXj9L-iQrW-PeyBiurAgllaXt6kVyfCfeVL4S0nLbZJ9z9c4jdo6OF2ZYS-PP0CKoF3qeR9yPLZgprfhocebeQWDbiRdF0XH14xWN06D4-Q9EYmatlI2uHEdpn1UFH8upHNFf0QVaR12h8zj9g__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603139275&Signature=IRfjJ5rMfJaTJnxqv4m5ARVHgdS3mS0cN316U2YpQcx8J430tJieJ8Xzp0hSYRlhUhfCfauMAUGOHj~4i~mxClgxWZmqOR6lsk98RtmQ6daYBO~Eday4wZVZUaS7uk0e~NUeJTBblhEehm3iny5qd66GeuWADTiv5Vp~Lna0kK1qor-toaAyTvYBG~f9CgVbeM5fzDiPBKaJXWMwtpU2pnheMKQYA7~l1QB9F5FYc0ooPFeC~vhO7zSwyBj4U1tlxPFmKizjctZOkwHuRl0pz~5fl6pLzRaTxHfejYE5xRfHO2vGlvaOR6DR6s91PRf4IH84zl-a6gznXsmaHSdjwg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603139275&Signature=ExX-3MKTZyHSNUOsFb5Ufb~sbNMPYd-lzInpO4H2GD-hOk9mZU~Fde7iVW~36Zoc39C6lOQS-76~MubfDSZQQeErRsknQrZZ8HO5s7bGZUwbP7aiGTMkHlRmuQAEdQpELpmzxBzkH6wcUZgKWFAtFVehHG494vmNFqlElBZJq5pG~-dCoxu8z2qryNLNy9lgkhuQg68SBwsc5~oxyRW2lgGVJXc8VlSMP6RMhb96N5RRIuJKc4Nw1swQMq~iZGVOzB2XGVehtbs-IMolva-aSpy~frILh0hw73LcnvxBdAHkBbocjNna9eWlcea-IcBJY4thj7Kvb4qBTpXxNSCyKg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603139275&Signature=Dyh~Lw64pida0Afb9MSyh1SAcrIZZE3sMyth0YPDnvLzVLy8B9QXn-b-WKKqG02WuYu~iptPa4GcfdtV2MZ4AtooNRzSr8lS9zxIcB1Yxh0vhdg5gUGd-YDAYKwK3RT~FGiS6vD7nM9gbDNEGE3wE-fBEoxYu2P9m2-o2J7kTpLCSvLI3mvgjxCRvRJ1rtLOqp6q-dP32a224onbP8HCzcyva~7faHad-vGgm4MZ8o3oD4Ua-6ROSyubs4Errz3FQakgSOVTrDBBLH-b6O0VpSp3rK7TAAFDLtHwdEzzHZO8vPRpeIeNURyUNXKcBVVVoY26fnVlV9djtI2sawgI5A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603139275&Signature=CImilR~zjL8JShtUYpLsIxC8IgV7OjbanoAIto4py1YRmIaw~zfav~jJYfE7TX0lcO080Iork2U9JAp0bPCqgNTIfddNbfQ4RBKajbaWo5eu96Lyv-OVpEhGLcxst9ZgH~s5C5Hoh~CmPtX10FDjJQ8~xuOGux08AEY6mUXzCAooRtZgaju2UX7KtyJlJG078NeuVM~K5Hfb8T6mVrU4IwqhtxqY4Y8cZ6MhtX-BAO1ZYyy54BDkFrfIIhchs6tvHLZIgEmBiz0gNbrpTk4DOySsi0~YyTlyZBAZ42gtqft5yfq6srvJOzE8Yr59dkgeKepHjUPw6QtV7yp6KCf2UA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603139275&Signature=mP9WAVijaoiW8sbufsbfdBKJU8icjtpocx8OSUgbXaJixeg2RImRT~mcgcMugWcLzWcMuHSMvhRo6BXxC7I8p~ZRukQEbAMNcsKLghGcrQnfLE2fQGh~D8O944jtaEjdgHoMS9VYQmkpPpQ3NMsRcS0ghsa~8drD6yqO0d8a-hVVuHBGbxgC3UaFcvmv0I32qo5twOsUyPY8bFcFv4qMABIBdaT73lxRL9fFR5F8HH2h~ryq0SIPOCaRqrWW4jqyz6qBLJ3Bo3Q3hTZ4Pb5KuR~WIt~ptVOBbiIuDf9nH8usIoAmbsvcGzsNDtM1LUw5gsKsGXjUJR1-sHvsNZiuHg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603139275&Signature=Wh0hN7hSWXIfU6IN5Zbb7qfztVQLJ1YVClyH2DE4mEvJh1ORbp00pU86QJO1ijsDxoEoVYlsELRU71AIHbXy6f2diVZhEXOgi1d7Hny18f6QmuOFeNbiLCLkg4CC210jwkeM2FXI-SWgFsNh1EyzTIPlWqNSGCVc85ASbpUo7VOnIrNigKged5WMOKxs9yjUFhp~Wlcdx3pTSNm5Dg0Bt~JaCYfvy2wGUZ59sg8vtLyi6RwoqPstrYm4XG5s3UR-2HBoXXQ~4U7bF4jeRKTNsSsGtt5~-6FkT-EWz7-BCXNAfqiP9VExux12Gn25FdtjqpbiB49RzmKZ7wsXx6Ivrw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603139275&Signature=cR6bYOyHEMBbdfdlEERHKkHhbkABGiqOyEoZulBMha8RBwhDDH-jkNH3TfG4Bx5xkIy0KlgwNQKOdEsBcZMv1koN4TbAPbvsOZpIKSyMX1WG0bdICuavAIHCsIX1eF~mtldNG6xjqCTtfszu-E3ZAIvwYlAaX7NI3q8qOI6U4-KSQf5fLlogF1cn7-xmatEk-2IrxCfowwt2TeO1cMIANoRPGExu1WHXXIjcp~7nGrkNSPKZhtcJF7MzijmxqNU8HfoWO~TkoLOG7JebCnYBN99IpPyoHz9iAVbC6vLb5HiX3Fvt4n~UMsu-jCmN~9kYfEJXhhz049dt9XM6w5sORw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603139275&Signature=Aq~PSs19nh0RRDYv6QHFHh2SbsFtKJKMmA7-hi4KGdYcaZhRolH4v5t80o81H8n6B7p-rLMXCMnctAVN771VycNWuYvDa960PdSai28q5nDeklWg1WXdoGhGP1XIEX9ayAOT860mVsk9Atqx~K-jgGKUhee1h9YVY1m9r7EWjfXRCRP6a-SFTfErXTXRCpYM4bh0IvIn3iArQ-0AwfjX5b~ey09gNhKslkaLW0iNMWtw1hTfJ9OjBUvpSq6MSLiIiuPaSvCkq4Bljt6cniUke2nVja0C7YlGelkKOQmJ3oUay0gfOdRR5SwTbbBBdf3XJJ-g3FlmKzLcodwMcx-tXA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603139275&Signature=YprvFSnBdfQGy7TWigVfxnhkRRc7nzIOd9T48dgfYv~bHDDMfwK-TTDr7NCQhUZPfXsTUDuGES6dldLYFIRP67GhUYViuID1c99L~WopSHYCLZAJ2q6g7t-yPT2Baue-7eBYrtKr18AYVVr5tw9-dwJ8y3pi6jnub6l2urCpTYspUButMIVXFrPAWb4QCkAdfUuX1ZT0SjbwFgtvNyYrkGYecSq84zJ5Pwgy6erkai~Su8SV~KnbJEIH9FwesGRP9vvexx4UDbLuyPlAoj9YVpas8aiAabZSRbByZRY4YWjgs0Di7i46tjY30Dh3G~J4qA7XJSjZnyP0IpsEPJWnvg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603139275&Signature=nt8xGtcy5E~9mx6jRTr-1bOM6vgLdFcU1SxPyZvZfAaQT7NM3TUXXjZXcFa06C5-~ZmtXXtbWjJ6Li3Y-jxIteYKp3rM8b35VxyfIpHklFZdC6wQ55UsVDwyFyXZbHVEeiK5SKIj8WFHRUeUYakYKtMCl1RZ~xbtPoFMYgTytJBraDqeR5cmGe7SYvC3S1d4sFuXBPr15Ve6ubvHBrapaGcK~-ra2ZtO6i6jE20BeXlpXdV3GyDaDBk3OiiZpVlQen4b-Vr8BpXjxQtWuWwf8XN8SR2t3-hMVON-PWZfkD90KQvOrYxJaPM3~xGJjKaTz2UxxCvEnwTmi2NoPjU4-Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603139275&Signature=WuKJ5xNSKwt77rnsBA6iU71vFKOPMeh1~qeUo6h0d5vVPydadl6TP38M1A50mlSFHFYzbWDCUAnHGlzv5G~6xHCuiIupzDdfJ-LcMU3vZTTPPWdIorFi0tqOWXuqhI7LA4mZltUvV7Grs3KVmdvqTPtA3-1oR-q3NmhVNjiaQxwRxTCI86p~xWpyMbDqsIkmZq~0SsGai031gdSzHwDig5GkatPYL3uwwyd~qRrZMGwu2I~neI~mY95kCHYOBKJRw1NyVVs8YdPOJTTv3OXFQDuGGPbm4N3MexJ1NzEiDfcBaIs3d00~4ChAidPaE72BjD9PYrRE2D-933ErGePqsw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603139275&Signature=qUA52U~KGmVicF7p2Jw37u580uWBx75o0sS0Wc-RycoFnIuiwwmqqs7MANpp1ieapHHIAjOB6odA9L8HM9FJaf8uJc42IDbJqfB3wTrALFpFzv6VbyJyAsLIvXNYEmGEtRwKTn6sNQ9v8gCTephuNi7FdJ7XcDa8TqD3rrV1JJzQeQlvABkOhn0TazVcv1kiM-4IpktQ-eaPt1LNxH~PuLAl2zJBF3wAOoqoB04lJOOz3~~CQXt-oQ8sDP1wmdeDLVATb5h-2SUS-3SYUWaOyIg1r6OkKFiboNB8kQmKCoiqaxpx0Da89TIa4CsHUNgnqEaK6sxGUTxoabGRTwfn3A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603139275&Signature=BwUicG2~8IssBwAAcHAbnJQ~~3KFkx4lLM-2h-BTVYIny3dMOl2y7T1yUU4usBtxkIjKzpjz-ao9CMKotUKeNer~ywsab39UCqVfipEyPXGjnEdxFxf3~0IZQrEeHRHaG6RX~DS5RhndfrRMO6BcIxv5pFpD~MM4BW2PSOAi21mAgH7CYpvyCrleAxQ~sjyq-Zj-UxbRUPpAivsfp2wtkrLBW5y29KHvlHBj8JqEiQomCrv4LHKXqoDj33PDWb6uvj3HIGQcj55yvFkeFYmJWoLRMk4ebOgJaXMrXeI-BC7D51dScJyPsRSdOt0I-r3Skhwx8IoH2C~PMmwu0KAL3A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603139275&Signature=cU~t6qhjiqBMUmJqXu9xt2CPlPcMc56x9mTts9hCr3eCBuDtf3-NZNNxq6j4YoQq7y8dgM5o2AxAGl6tuY39qjXMGq3EpVKWxxUudMYqnDQvHvWcN4gd2MTAgKh0QNJ2mhHTNzfQzFeLzD4IXm4aapAFHHvY-wL-5TpuEr33whcRTSSf87jSKEkUGwJ2xrncL5wdlJrP4vh~1FgeXagVmLWu3yBS9cMKTpT2Z9HkXAiwFHUmlcd3sHiscZLMdDnNzZCk-aIqSyyUXe1rqMltYb~bldk6NHqV2EsCUxqSA3IcWKPrPsRCKiH7Ey9mC5-zy-USY-XURQn2UDTt83GMiw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603139275&Signature=Lhj3zZzTEL1Ifr7ft6M~kCEvK~pfOrAhiwjPGge9ctVuSQ-s3c4TYa0Icv2ZMiZ-gv2YoMJOOAhjEmsmFpFL1KyTXMRqLnw7Nw0jn1dNXtpR2RA-k6bIsEG7Y2-WwXaQiVQjlb0VHg5rqEEg2RyMDg3V14eE6t8B~ui4iXpkr6flYZ46bFzmwYbmaHPwXuuH9A7np6~W7ALrR-7yvCTEUXvQALFqp1kwd2VCM1h~w-SbMhbI3hjQAqLj-cs-T0pd2LFQR-hucALrgrNkS1~AhN8APEfFMvBC0atdnRzSH8Te1LIP6AUtvKvNNTgORxFBG6GeNIZlubvpn5NmnqyvAg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603139275&Signature=GxC6~fIqf0So7HlMNgncjAyGeuISv4L3HKDLnXBggw7QbwbeYTJmWNexJxzzu6xr568genD3GXkpy4tm4rz10Lwa-lz83d5mbk66DiTtR3Zhch6grcERDVMn6eAS3AVV0Oe6cWJRYj2~DffinkUx6xGFVvgsU~-PvosfP8oEb5hb1W13tBKmiec5yHSBmmWJB7heEIRTqL22l7qJ2lTgYR2DzFj2KaqqHElg1OjC2IipbrKo8SpPPiX5r0CBkPP-CEzZbIH1IoYw4emtX3PaHVKm8zJPvOd4S~kDrxQNZzjFgep7tG9Khkrj4pBYgPht-RrkRRqR2wE71IznHDFZGA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603139275&Signature=atYpA~FeosgIab6cf24cHZudGV1WPgRO-3VWPQpkqi7dAWWblnXUOAAMxd46LZNF7DfBaRqvxhKXEveCt9lqBTqhUUebj4xbVxzU1EgRZ9uiXUiYctAxrweb8~HM~0HTR33aZgrwEr~omuPe5TCuyKnFYHI3XcnptsYb4IrOoWMsM6vcmrLO8wOmRfm9LvcVDPv~36hlH-al4ze8WFnG2NovfETWxguaZjeOJDYPotLPUuKJmVqy9KmNFK4zHB0ddirRvbM00cv40qOD~urd7jvBIq2q3EaLV9ltug9J0~m2TnvVfczF1M37XxpE11ZffWzrfd3op25zfhI3WhTRhA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603139275&Signature=kVFYf883A1V-72-psEi-gIn8DqmTJ~Kka-Mh92Zoe2wPQicpNFI4jGXMdMJFHCjSPV6XMXg5cTejKDCEvvQsapc87blyJPfF3usUx9qrvPeQ0VZlqRDUQGWnWxf1cjQuO7u1~yGvZsDS0rWUIywJ-CwGR0XIJJkhMFbGhpYrOshupdhGHr189XY79LMxzVEI-NAFnOuoPmOoIkbMqYCWZ~te0HhCEoWxSl7nARaj6k5ZLAlxIXxKXxxnvsIXHfrvqPTB2Sftz8IF0cSQ5pOI3yAX4CrXfaPguIV-~MEN2Wx16iq5SXPaisKG-cvtzhQ7w3fJCv6tGIBPa8xTUpsyng__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603139275&Signature=ZzNHYv-gf-APmQ4bvKPl~7kGq8og9MpQ5tqctPFTnj-5OAM-mFvlDpokwuxMNEvd7WxTVsU1IgdV47xZOUc1DgMcMaAaAeodtEhEIAx6bkeFmgjpW4Spje5AzuJvnqgoUeYvyAuBxxkyh7GC9y~ZEicjAexIqT5~c7-lgnGvAldd5P8NWjGMEN5N~SHHopvAPADgtHbEaBEKj2vhPXYHTWpSKwM6sk62MalZ2cNpEbbW2jdFQghwwd0I9xPR3t8qH3-X75HKIqJpVQLIJfZCZf2lsLrT76db3C0mqMGfHRFAlyYF1jBDHgMsvJt0D5oL4c0s1mhLErsyLqU4V5lHLA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                          To print, download or send your credit memo, we have
                          to save it first.
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
                              id="recaptcha_token_7bfa9cacfda0af78e8a5"
                            />
                          </div>
                          <div className="text-center">
                            <input
                              type="submit"
                              name="commit"
                              defaultValue="Continue To Your Credit Memo"
                              className="btn btn-primary btn-lg"
                              data-disable-with="Continue To Your Credit Memo"
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
                              defaultValue="faIOsupwmdV7wms9YU1cvvcvC0eLzYg3sA1dFTvJFn3RtNzwWczZfmjt0dl8TJFS5mC02HFsoTkJplavayrMhg=="
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
                              defaultValue="c1j5oC1koFfAFIqXCZOpu7DBAmIxC9VPHYY9iv33qh9pM7IV7/Wfi+t9aRDiOLKdbBEUpacwkC4Oxqy0lGaeyQ=="
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
                              defaultValue="1M2wohrFpJ/JoICemxqpBNFgHO3aYe7h8M6UPRuqnhY7d0gKxQccVCmCOv5Os2aipA+armbiMzSEskofN7+gvw=="
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
                              defaultValue="n0oFADtbOmwdcZ3bnRB1SwqgyImw5w6v3T80sVqMcmNcZ31+dRGRosZlO66wy69VwE0xkKUyD5Itod4IMMw47Q=="
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
                    Save Credit Memo, Print or Send via Email
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
                      alt="Credit Memo Template En Neat "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Neat "
                      src="https://templates.invoicehome.com/credit-memo-template-en-neat-750px.png"
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
                      alt="Credit Memo Template En Classic White "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Classic White "
                      src="https://templates.invoicehome.com/credit-memo-template-en-classic-white-750px.png"
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
                      alt="Credit Memo Template En Band Blue "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Band Blue "
                      src="https://templates.invoicehome.com/credit-memo-template-en-band-blue-750px.png"
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
                      alt="Credit Memo Template En Military Orange "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Military Orange "
                      src="https://templates.invoicehome.com/credit-memo-template-en-military-orange-750px.png"
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
                      alt="Credit Memo Template En Us Flag "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Us Flag "
                      src="https://templates.invoicehome.com/credit-memo-template-en-us-flag-750px.png"
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
                      alt="Credit Memo Template En Modern Red "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Modern Red "
                      src="https://templates.invoicehome.com/credit-memo-template-en-modern-red-750px.png"
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
                      alt="Credit Memo Template En Cool Waves "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Cool Waves "
                      src="https://templates.invoicehome.com/credit-memo-template-en-cool-waves-750px.png"
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
                      alt="Credit Memo Template En Dexter "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Dexter "
                      src="https://templates.invoicehome.com/credit-memo-template-en-dexter-750px.png"
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
                      alt="Credit Memo Template En Mono Black "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Mono Black "
                      src="https://templates.invoicehome.com/credit-memo-template-en-mono-black-750px.png"
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
                      alt="Credit Memo Template En Oldie "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Oldie "
                      src="https://templates.invoicehome.com/credit-memo-template-en-oldie-750px.png"
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
                      alt="Credit Memo Template En Classic Blue "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Classic Blue "
                      src="https://templates.invoicehome.com/credit-memo-template-en-classic-blue-750px.png"
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
                      alt="Credit Memo Template En Connect Rbw "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Credit Memo Template En Connect Rbw "
                      src="https://templates.invoicehome.com/credit-memo-template-en-connect-rbw-750px.png"
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

export default CreditMemo;
