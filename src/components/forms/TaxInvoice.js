import React, { Component } from "react";
import Categories from "../invoice/Categories";
class TaxInvoice extends Component {
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
                  New Tax Invoice
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
                    defaultValue="USRjul8pxSvnoTOLph46+1igparnROYWe4tpa6xfPD9mSLwVMUp7s5fl+GzeHVSKtiiDAsvgmZflmmZpFpInPw=="
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
                        &nbsp;Invoice #
                      </label>
                      <input
                        className="form-control"
                        placeholder="Invoice Number"
                        tabIndex={3}
                        maxLength={100}
                        size={100}
                        type="text"
                        defaultValue={100}
                        name="invoice[number]"
                        id="invoice_number"
                      />
                      <br />
                      <label htmlFor="invoice_date_issued">Invoice Date</label>
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603136570&Signature=jVW2fY1GwP80ZVWajNl2pthXfzUWJuzRUHZSmEgCuZhsFHlwwhmYhsNmWUaHbAEU4lPa1ZPhqAcODl3ZAvpAGTPT0OgBgMwY7tZrnc0x7urJHmAEnMYeNtS1SDN1Z1uum5h1XFRsbWa~UtAm~tXoYUU2T2t7SMf2~adaiKvc3hr6AvUTD0Q0XKnmlQMxs4M6wYy93zcENpmIbGxoJ5zY4sCDq3gHcrYrVDPdkFptTGSbswpaCV~8NOoB9HY~BWibGu-EpqdpJVaQJLaGxW2MmlOg8ta8j3Afb0sEL6lJVTzWULRiidr9tuyENvuwzVYSprRXvINlOllOgVBvptHsbA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603136570&Signature=nbXEQl5H4xPnfNkFd~xM~4NEI5W4~0ngqB4NEsbgDBWuO2UMQajkPRDPE~cDbIgpc0~jWXIRoheZS4X6OmrWJDppqXMCCaQNo0oHq4OPtbuVxp5cO9BaLy4hBs3S2yAYOi7i7n68QMMpXYHZa0dDkQWdh5nd5Fd~af5MYQ6S1QMDFsSmbuYmnd1~MpHQ8bP7uwNSOmYZDioZhcWrTlebj6U9sP~BB5W9qvU9rJltTg9wZ3f9IgDPD4z5vuPVm-nAmnLJbGmaHvzl~KXbE3Sah0RXaVMoKNEDQbAuatbPAFUvJ6cjy7dRawvnBklMpZWGPyiptc7253NVNWWyRZ-jmA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603136570&Signature=EO9EomeY3phwMgrrVJXIBAJjdEl3tYTvqG7aNR44HZlGEWHeOhqgyE6PY41hMoPNgBGRpYR5akGGLEgrTJEFO2UfM1~HQsly6NJB1Icsuwr5mlWHcKxtqVrDTWbPIVlDzXnxCbguxR3CxnrJbf9bScLGuXuKHC3DVBbVCnFPUWFr8T91syve1ZnaR54kA56xYvk1IajU5-4DsyUcGQY47ohbgHxGACF6KY0Pz93dWrZkYCl5JbJXJfThER7z1EuO0QEC2O6g74oe768n5uDDblF~5XRFQTRiijKbWb8Z6xToKZyuX9C2z-VlzmnhUDE2OhkPeViyRQzNbjRjRAeaRg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603136570&Signature=U60P8ZoGnCuukUa227MIyAVeCHuUuWpTGietcuTgBHYXWGhZnBIAHqcY1-HuZ-cnz9QHtuSVNf62PoH8x0KEflQZ8DEcoGqwFf0l5AOQCn0Oijw9FkTBirb0w-yD6GqZ1ahDJuka~zwKxTTRmxbelAzeb3xLJPBC34Z6FEQ2jnbjgq3dUtY9ADwcMJhC0H7Y5XZL7RJACZzMJ7rptrkKT~5QnOTvzzaSKb9CyssW0y3HLC~m5YlKPOZr-yt0HS3OV27hKYPTv31xraJlJsiM0xGDo1ruEpLc8TKftaApBQwS6s1NURx1QQT4A8xIsKt3KbRjMhXzo86kGVq8~Ygw7g__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603136570&Signature=odWhLJvtwRbDczpPwjeUI8EizSHk5Z~wmdkBwaewv0XPj59wo1Xv3v738wytYQ4LSAnZeq48fJEbz0jvdv4oPhbVYqMMidWci7AHYiAI-DVwhSa89OPJd2MPjqiPf4uXV1CQyCsgOfmt1Ybgey5HGlOU0Q3O7NIsAtrpCl45maT83Js2vDuR~B3x8wde7UkiD0uMqmriBqMe3b7xxfCKL512nQ0Uj7Bk12QK91tHvSu49ZndtbPVqAN1sGSBBtRFvE-P-TIBDzbTFuH5ODSk5d2XkUEzYoCAToydydM2y2WscAKDX7Xaj5Izks3blhcMoMNhO1vXKs10PZjE~MZGfA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603136570&Signature=Ds-dwa-I2YDCynLeWVdk1ZGOOka8Mx2efvoJ5oxoiksLolq6FSsojbEGqjrYYvPkQALcRGvlMM2vImgTX6UpHc98~6Qqz1EwRjEfOl-N5A54fYkL2P3vluF46PNkaK9PI2X~DAHoUaNbWJ7Ai6lYATDdxM2otfzsbpFS80-w2SxLf6SyG6aJH3bOXNIlBDrY~-x79Th7~gr4DOtEzdr5FOLHqc5Y91C55f~tnbhnqltR19hPvzqFOK0gRGXkWN-gGmnJhXpAhq6n14wus84eRxTcYZQ-w8OSXDS5drEMng2L7ljLFFSYYEMDdQr3q4ZZLZ0qlQppnf4ILlg3746baw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603136570&Signature=B9QBtUtu1Jx11rfIEaZG8GRDuS5e8mZ3~M-QlOeLsbzupXAWOaa3rz0iEdvyOrv4KG1bw5JYo~HtOSbm53aDQ3QwqZrX676X0OTPen9fHC7jIrZ26Gq50nycuNPclThi85Z6amHsCNrosUUE4mkBzkxysdMA21U6~7ybeaa1jf2x9zcu4jz-7WoZsY8iRn-96L-FNbb6XDd4ifXW1RjZ-yTEiSNRzibfFh7euBHsW5gB36QwQ7CDu8WA4SQoq0ioPaV0pVYNNamDEWCdqOEWLYupBmj6YXqcel5ZFR7ANaDzEWEJ76hhOigGAbjgP70HEQScUav-pg4DGpvicO4RQg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603136570&Signature=lnzA5zn5pHzH6FpEhWckXuNKAR-GIQSjsitopJB-rfWvUwx-vrjJD7hZKXQYdhBUnPDyl84t3cq5WUXJCyy0gWhi07G3Y5hUcl3YZeVDnr1QRBYJp9NawsgcOGjotpvBIj0TudnfyEfSKIe4-0BLVHEyEFR7zUND8e8bIS2GyRHAhf44RnIH3MWcWW1jpw5JYBvdBZlGPPVN01xF4sDG5kyh8ySX2KfmUEXEO3bSH7gKpEg-bXAhVSKkCpDqx7lEv8kLHV4gPW7ATPfksblxnkg-KXr0u11ozJdjqjxhnlVUzb3XyimJFaw6I-XkPBJGRphzkgOVvkWZ40C~FmWCRQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603136570&Signature=nEY~Q9DJ2PS5oRiG1x84hHTPEc84VJ2bB946B--y56c4aTRyaLdpMhznOMGTg1dYw3MR3C3~y9VzHzfLpwIaCaMIe82d9IoiGy9NhfqgABGeZyyIJVTfl1KxdC3HdD5smYtsjuen5zIveC14nGmEVNGRLrPL4aYizh4BvQyYJeSkZ4VDJsUOcc0Ggyl6W~Bwu6SkR-ZDYe~ZH7ob1e2HHH-H6pBTO6O0tEQmZ4BFUiSRLgamAsHpmyiMtChimIiypM3S6Rlib~D7VSHYNTKbBBxtfBcGv7os73MfbRbaThC83dztLxhFBdEC4pHgEiz1yVuBY1LdmqRWs3jXRDysAQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603136570&Signature=mUeFFL7PsnNaIgOU4FJnP4qnunVmTIACCnbgC4DgqTGYgWwoHLZyDOttEyC6Pp3~Vyh~aOKeTUh9OR~oOazhlC3od~LIJP3r2~lzEto1PRVWyRVLNcaFkGFxFvwIygM4o9KMKrFqGhhwM9sf8nL81YJ3BoHy9LVINCRkLlGnnYRBzx~OllzyAKBFF3u2GVpwPLdSPIOlSy-CkzK329Z~~mIB-An7n1UlMQDbhN~AressMPMxZVhm7jyvkcql97J7x9Mjow7yE3vO2n7Ga7RFiuEktGzGktwnUYsNQhVOe8ZHS~ptctVgDrNNMf2p7WevBf5MsqNRTjRggoht8pa9nA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603136570&Signature=ZD6uIIg~Z2HEAFoOJPpjG5oxd4ilE~caWa-kyMnwbuYuH~fm5esxa8rpxYJZpWOlpx5Zu9CuMrCTWk46kOIbkNtMtDRYZkT7k3hyTz1dYqArLdKZtl5TzaJ-bx2eF3yu0Ge5eQoZ0pOV8YytJB12IRjqpVL1UnLjDfa3O9ePY8Jdy-rLhXW3P~TCcYyu8vx50nGu~Y2o2cqGh2dY7WAO6NIuxZU6rzglFdJaUHvO69ycYpw4Bi6~jDVXl5smEH61afxbZAD0kX8HoU93lxcgEFtD6Nbc4B~R8l2ERM3hmcEmqmfRfF2JAWFWl0DB8JDuy0y14Ku0PMYZy-PsCSXgxg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603136570&Signature=NP6s6A5XPYNq9bwWwQb5rQgYr3GBYaiS87Frtl4JQtF~j0Vhq76m~bKJuuMWP8AlOm7EZC2~S8oi2bq-F8RYugIq6akDeEuwzzDJEQQc~GqYRFb0lirTes7mIHQm~fT5aPxxGEaTfi6PjZSdqNtykyIV0qOwj167IFkzeOVv8LCryBwF2t-OvYgg~mhg11wBIAc~HtnL8dlBQgzh1ZlJcmqsHYq9F0NNujt-FoFJ4ksNkpohLj79TGPr7oKOFm1~TC0FNC~7Gv6zUJ7uEKPp7U4ScXgqKyaqjdcbRM1zob5SWQ4hvAb6DBNSNLbZsRIt9mq4xWnfH~mM8QwU~0LkzA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603136570&Signature=nfRy8K9a~4yw6XiXXUFewgODJhUbhzEghYS0PBCDC-k0RmEUSSfhsAPbc6wKXj34dgLrL2PVkQ~srd4Gl7~82iyzvtdXoP1xRJvidsAAeHzVyweCsPlkRemjR5JSggIcNB8GwRI29X80FUarofKoCupKRGzgB-aBoctyimP9Kx~NYGflcaq6ika1gwLGMOi46VOZA7UJQcjXF8ydgzlw508kHyJG1k2Gg-1Ih7zWRAsAfeK6Dm9XezQQiN3TypFe0cO0x2eKdqw0r-apFTfPMAnYI-qSu0pltYgXQzz3timfzVUI2U6L7Xjvz2XNE7vkjObmWaUd6HOGVqBPDj9xGw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603136570&Signature=ktqzQLX0qvKZIFLgPoUuNxT2qKGIUddnuZjzp7eQgGIvwFZBYnR3ZhKhBOxrUHhezJDHcvfxmTU2y7RUVFRECLIgEXwDcgo0y4R~4EujhrYmhgzYnPz36OzP7fXvyGcoZDAchkFqMWttKhcuSTEPopGj6BE1qUSPQ32lSU50iqX6x2aQj2azs~8cxVuoSCxQUY1AA6OMOt1qd6En~o-92qlpcUQmfANcts0ZRrVJtSjz-9vs5HV47N9~jzTPZ9D4cZlNfs-0tjGIPnKElNkzF1uDEfjg~W5OPhFjxMwGowTLfW6b7u80LkOwuzyV76KHp0~jjthmjMb2VX4QbGPM1w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603136570&Signature=Vik6JWK5rP315Cat2hIjBR6EPTN8zzh9jolM~sTJxaXLl~Kdixxon7q3qrGSh0AN8qSR5HkNy1argsub7Att~eH-Z5W9HZYqizw73eUACLJ5gCSw6WLz29z0Zx6HScluvX4md~0eeCOCDJ~1KSlM1QfkmXOrhodw71ADU7lucmzbujK-yMe77M7gNDNhK2m184XHgGGyDLwiEx3ey~iHrEdTAEkUurNqDaPu6Q1bR1N8eQ6161svYh2YL8tLqY-JfJqXUdTr8H1nQgmiTVpdfgQHUL74mSzQV3773N10bMWk9jKKf4ZIOeFTGbzNlelAC8oEyjtybHSyH~mFgfxCEA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603136570&Signature=E3vLTmym-d-EEn8XImdl980r6VjoUJooq27RIxDl025BX9GUSvvuCNvSPr2BznHjUbkIkuS6Juy5uRMlf~BB55kcR6JtqpDpfLb2QDBT6uG34jI7iLllMUBoEopInhOGsMQb2zC3Z3tmb9GUPq1mZmSit71k2Efp0LE4AWvVeC6B1G2gcDt~sJme~BXMDrdGCNVWZ0~A0iH5YIg2uAc8faTQM9vI3AmFdDq8Olrjh8zJLAqHx8n-DrmkdJkUKWnZbhHK4ogXAzzQQ7DeBsp-DjT33M7~qHc8H5HQ1V5UOtCxgTHMw7x2oSPKQj72nnrl-6eneDGZ-zboxCyoS9QhtQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603136570&Signature=K05pd9zKnwlkwVX4ij59eFnMVG9vCq0NGYKtIIkItah1x-YXFIzdk-LVLV8GP9dcwJZAekhPa1pKhKQyh8S8wkFDIa~1gdNj~50xffXKrNfuESI-owWzwImfrd22s4UUNvCY8O2d8MiiCYmgZqmwVUbyfp4G-RsSAGvg1QHWSpK~SRslk248TQFNEVTwjUheDQchTiIRS87dLjMp5dsdDfFPsPY09K9t4Tfxsgdxx5cMG4vJuAOIipnr~W9B5maoazpiaVOm3gkI~khlXT8KuGQSWKLpPIdL9ZMAsPXWPw3wT0Ve9DZWrIItAe71ifbrzHzNAkVE1PhX~pzUEUV3Fw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603136570&Signature=MKFdwECSfg9cgL-o~baTP-YEfQoQYI01x17esmwXnTR-U19Jo4SckcBgKWVuRCSh0pkAikVVFw2IGh7CeopiJJfBs4xVt~4ipH2dmj0KX7c9RBAP3T-Vmjcs5IYUpOuC94~HS3BEIWdNqmfzxIvY~uSEOd~QDaV8XfWbqLg8YN06yyqMYoz1iCp7pvr4i4aiq0I~3-HJbVkQ5PcXP23DX6pR1fyA~CsKanAVXMkEs0Y0i0zQxWtg9~nBzyq8pbtoUQhEF-boNsZpuGcJwbItsBJI2AF3JO01AUhAavoT~33unQjncSbe4EfvUVvnh2xb9BkrF5sEDiport75J3nMCg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603136570&Signature=jwgB6uLDvPHNA4XKDqhVxQVR7e9nOf8~QL~TmGrnzQH9x6Cu01F4oReJiavdvRVcvDrg5uIjnJTxYepFltElmfCkxuWjXubc4bheSPty56lAXrHBC5H3r0DNoaY0O5DHnSMdvEklNxN7XbeZ4A7LcdU9fryPwarBnmFD8GHDMHhl-wqLjny-F0d7SRhp62Q7y0LV56pR7SMb2AxpLGcPm~kHXdN0vr2gSkJGGrmVEViiiHtKC1oPWjtxnmnG0ifNugF-vFhf91dEj964yxZkWmRGz1dZLx7ZaSQKMHKByPDrCnUs-CLpD1KLwamHGUmi5s0DadU-Qps1fbBq4VIv-g__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603136570&Signature=ALPoybCv-oLeNeh-py-MOWy2x3xVBEojc4-apQQCwSRNgVf~N0y27FJcINcbSV9zP5RaUXW6dpCzmxTquY3ugrC-ISFRLMfRVHU4iEzPj~jVb8Cajt5fz3hP9xHjGgasfnKI3Cr6xP88q78Gft8arNUDeDVGIFpZJjGPpowRP-o6b9YRdHcPqgvTqrUtYarRQcDWd-guwIhCEMBR14jcptjOGoMKdNddo7E34F82sAHfCvF3r4UHpwGdlc5t35zVWn7OlBskmg9Cv2N7qURX4CXpwtJEly7zX7SQo~CbdoNyncP3ThMTnpOXirUQWGQZLrjCx99Yl4yiETnXsACtlw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603136570&Signature=FOFff2alasW26xw7FH6-W5WyiS3clLcgdA0lL4KWX-sU3tRg4sb8qciaFwXzxTjj9TFEBXfPTEx3w-juUNz1fnF66DnLkGBB~hasALeHQ7JtPD0WhNFnVoYE7k57mlV5SPzOtyF7K3seXOh01hx1VuaIWNdtW2WHDpYkstxkk-Defvau-bCNSwQesVdTrluBGFQSHF0jeQ2gns-1DpG~KNniztZtaCxdqHQa132le9cQoF9v5zSPdHYMl57o9KcQEI431KpPrhFxSvBDh23xaYTK4D75qdmqffbRB7Ohu636iW9HZec30OYMjWrE-M7Xi1p4mMOOXzCCDLp6C4QFVQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603136570&Signature=Xxo9gAiuEfrJvgPq4OtGZxgSYuH-ap2W-FRu3fbM1AjnK1XnWF7tAOzi4tMrpnAwx88F9jJeLrUM9V9zsGfAP3qunV67-bbwFVNhqBSOYJhmsLbkyaUrJJGovMGT94nuXFQkfyKRJfzqlj4hfikgh~184z4sCeZI5z0jU~dOLKsZS-qdioqCDye1foQc7soosrUdP2qnEHa26esgsWhZkLvtBmRQNXGzBf0vQlJ2Q-Kws~uO-sLAA9Xs49ENeoMaogOU3ylZHre1ifpAYk0lTOjbIUXBARiYppY0LXg-gF58FbPda0Cj6Cl4txwa6aB7Ab5CzCjo3DVXLJ979MS0uQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603136570&Signature=BngJYpGTMBSHQcVEjzY6bTzv~OkfAl0fo4EhhBVl45P-~HOWN4mDpS1gAjnPZb78Vx7nVOoAa-H~zTI09P5qA9QoE6x705cmnM-VJNT0i5GT~GdjjWWN~nl4pnILpASAt-Aw6lWexoUCaeHEGzM1fD~bnxhGav6oS8NPms9JmY8i4xnRH2MNwaAvvdUBc1xjKU8U2-ON~Y8r4lRsO6qLRtmuLjSb60KknMJoPyGSEnnfOkk4wbjIhqg9CfT4dax43AySGs217rnrvMjjv3PVsNvnXa6Ab-RUNrnnWFcajv7dg2KZOoDCTUpGk9Pods2~csp3bzzNkhdYiAVu8wAp9Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603136570&Signature=Uu626DfWShJ0o046PJzg1cjbWKnYufaWo49KEwqOa~bx9IIdzHX1aS3pUSRp4g88NYtwzkI137cIEnQ32ojVXVvK50fE~w33E9G46MCgozix4t8fWpLRNlF9Pjg4x~~Yn76FeneF9sPBH9RuogcWeH688Fquv~P0pQuEiji7U-EWya0UNuT0Dafn2TxQicI0imiRlH3KjVxSntGR3IkeMVokTf~eYsx0-3qw9zaGn~2BV4pqewsur7fAT3~6oYNhkqSPW5IR4sk2AZBEqLlV3qU5poEr62sFSRyzBMRbc6BHcE9ZpNVoA-ryMFvgvP9fKKHvJ7QZAFNAG0wYQ1IaFA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603136570&Signature=EEQY7uSyfashJ601Zi3r1xOdtifK~5wTnnRQ9FpieDVXAq4H0E~MngKCyiBJ9KfYDfp9fB6yghe8lYPNzR6nUkSQDN8GQKv0W8o6PcZ4ybgs0-o~eN1Fty07Rs44~Q4bNU07NkR~fXpYkB3QYBkXavJmcSqx0HWTHF6HrZjRdNfK-Q6Bdk2A2r0llxiRpO5alsrN1MsFhKDHf028bd6a1mci3EW537rB1ZjacWK12wkpAmVyrLGm6OQwRNjBcNAAU~XhGxRnoBMs6u99M74tjxTRVagU07HZ70TwpxfLfcwrUSEEih921N9eUCDhITCppAJzO0GhIHXApDKIKXR3aw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603136570&Signature=cnQQsBhcCU7~WAls-995FshMYEmud~v11ifpHwtNBW0OBUaSDhwkBepEU3cgOzkVtDGfnFlTZRjB-MSd5q~xv1plJVmvEI~KZXRlpnggSHv0w-xLzjE~6QIXObUQjH19KRZry437UjCprVea5ffme3D3jAjkvv~QUQlwJy4GTJkFJtGnzIMZGPPIZbKhicnnrQVFt~ghWQTnoIqUq02ZIzHk0aNOCNH8DGzOCjNzV4WdaKN3sfK0P03r8HtcKngThZN0Zm0DAFhn50HZYliBrTNCt52WWrAmyvBWc4OvrXfbDtqOl-xF-1ZqftB9gUDJqEaJOQQXWKMXzGwZ~YtS4w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603136570&Signature=UdCwaFyd2lQB~xPXtD6gWpXD8siJ6sr-zhp9p--QhjbKiS3tq~2Ljhy1YH-osv~0j~RKQs7awDY5svJzaicPreoG~FYW0gfxpyJl50-a11VoPA6S48VY8qihL~Siwxfydu7im4GsfSoHNc~vC0dRfsB1LJogvwylkFOMkcGt1SGm3z7r~EvtT7WFlaR8X3vjW0RiFcGn9GNy7A1aOLjdlGzo-PeTJpAUSh6Kivw8tIh8ODwAuwrzpNlNkWMhXpXkZZXuo0OukYxl8HmR7APQNdh1CFPfOcJjOYZGyq7sWBLO07xE01Pghqb~IHIDDiJNUnPrcYtdJVXbCwx55zlUsA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                          To print, download or send your tax invoice, we have
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
                              id="recaptcha_token_66f77ae57ddc7d6a69af"
                            />
                          </div>
                          <div className="text-center">
                            <input
                              type="submit"
                              name="commit"
                              defaultValue="Continue To Your Tax Invoice"
                              className="btn btn-primary btn-lg"
                              data-disable-with="Continue To Your Tax Invoice"
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
                              defaultValue="khHu8d1ZvkZRypNoj9Ho/mrxS6avSvVlI+7w2XCzUtE+BzyzbuX+7ULlKYyS0CUSe770OVXr3GuaRftjIFCIKg=="
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
                              defaultValue="B9rhFQH8ugTaheiXjhgrGlaxlXnS3R6pPvcjjXCDcdwdsaqgw22F2PHsCxBlszA8imGDvkTmW8gtt7KzGRJFCg=="
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
                              defaultValue="Y8sxeQLcBjSPqXdisi7LtuckWw4jao1I/XSqQSo1yc2MccnR3R6+/2+LzQJnhwQQkkvdTZ/pUJ2JCHRjBiD3ZA=="
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
                              defaultValue="Hg4Kx1zh2QdO75Df4yi3ayN13d/dqk3xSnB0miDuCnndI3K5EqtyyZX7NqrO82116Zgkxsh/TMy67p4jSq5A9w=="
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
                    Save Tax Invoice, Print or Send via Email
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
                      alt="Tax Invoice Template En Neat "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Neat "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-neat-750px.png"
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
                      alt="Tax Invoice Template En Classic White "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Classic White "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-classic-white-750px.png"
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
                      alt="Tax Invoice Template En Band Blue "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Band Blue "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-band-blue-750px.png"
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
                      alt="Tax Invoice Template En Military Orange "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Military Orange "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-military-orange-750px.png"
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
                      alt="Tax Invoice Template En Us Flag "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Us Flag "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-us-flag-750px.png"
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
                      alt="Tax Invoice Template En Modern Red "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Modern Red "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-modern-red-750px.png"
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
                      alt="Tax Invoice Template En Cool Waves "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Cool Waves "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-cool-waves-750px.png"
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
                      alt="Tax Invoice Template En Dexter "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Dexter "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-dexter-750px.png"
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
                      alt="Tax Invoice Template En Mono Black "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Mono Black "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-mono-black-750px.png"
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
                      alt="Tax Invoice Template En Oldie "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Oldie "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-oldie-750px.png"
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
                      alt="Tax Invoice Template En Classic Blue "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Classic Blue "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-classic-blue-750px.png"
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
                      alt="Tax Invoice Template En Connect Rbw "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Tax Invoice Template En Connect Rbw "
                      src="https://templates.invoicehome.com/tax-invoice-template-en-connect-rbw-750px.png"
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

export default TaxInvoice;
