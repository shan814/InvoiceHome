import React, { Component } from "react";
import HomeCategories from "../invoice/HomeCategories";
class HomeInvoice extends Component {
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
                      &nbsp;Save Invoice
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
                      defaultValue="bqTrWGjsqkJpJXljYoVnMPDw9PngIfFa00cbEJahqLcri/pzLhyjSexn0YvfP/2+7fVfLZchxEuvrRCciNEk1A=="
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
                    <input type="hidden" name="ref" id="ref" />
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
                        <label htmlFor="invoice_date_issued">
                          Invoice Date
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
                                      href="/logos?id=41154575&page=2"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603633357&Signature=Ti8v-t5xHkiHS6zJFCfUCLI1Sbo87ghYxm~AL38XQfk4bg6qriy7sNlJ-6t~GXifyYOLwVaQg6FVNOcWS3MFdOBMYY~L0Fi6sXvDMdbD6Nh3K5TmpUodp6pjgk-FoYbcXzLio-sC8saklGehJu69dS4oa2Jgb40jnDoHskB19xEOHyQhoCsoL5YOVeLju0WMuzCGiDW~ROG7OdO4dJIrmA~t7kU1rnyzLgaMLsxLCsLJBQPBGKvbsb-lL3mf0tZ3WbU-Boyj8NJK16F530u0AaBCtF6il5ofiXBglIJOfqp1nT25R2lxU08r4czGeP-pz5hM5gxe0tqUq5AQKm8s4A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603633357&Signature=myrG8V9UuB2FTWnODh0It8YIFzmnns-C09jQGktN2EYMZIS~zXBJ8KWtmKCouoMnn5mIHMtoNtQsqiws1QazvZTXkCrz2h1XOLE3Cf1AmTr1TDqdB-Rs4tY9M2Y~BBFej1nEMV9rzuSKvSHSFqruFPHaUQdVm3o317FDn6EVKMrVaM~9ldn9TvzOGid0Z8rnnh52nFuTeE2iqzfi7M3vrd6Efxn6Ys~HKLfqty3s~v9p1TIrLkySWkF-haj0VGjWGE~kHcLc0zE8qPJcwACNVzYLoOWj8TuRw7WvpKPPkkx7GOLPmFWdMKKulWCVQPbLzYyg4CAHM-mGrPiLEkLteg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603633357&Signature=H~wJ2TUyU5lkujVtclHcoUJ34vAN52ag24ujUfN-VSIxIpGQUPqGJrZ7-EhzB7vEvUB5-DLyAKKKXzCJFKK0Xbw~Li~MqAykxn9Z5vaSkjqV-Q04kFGP-mCLNqwy2WcAYu5M2UBFxDNgXGrTq5ny-xpP~jCxzERuss4dZDBxy5tjAaIhKoo9SyNwZ~PNwqZlZbjl2HT4ENqfDBIO1VhSvB9fJIiPrUhnDX609aoQBc5dInOgEZGNalXL1KcM1pSWuCwnMu1I6vres~bXY9M~0~m8g4SrO1enC5Avbi1X01R6UcKPnIruVvcWuLhiKVqCYCmh40MKnXWOVT640WmGiQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603633357&Signature=GfXkocSze7-zC9ERYpYkiIZmm8o8jOXK~IyronlcJdV-ZaDA9kNDGs5D-9yjDZQc5pz1DjIoHxlzQqxt59XAgzBCUGVs0bJZ6YAsuXukwGha4iXSXWQ-B9Qsp6NFmZF8FutEPjhmHOPP1DYn4o02TqLSMWLKmONhprTHIXgzUfaI112alwwCkHD9YsygtGtIIvRF2ivIn~lGpU1HGO-JVFNbJIeTR1IAtGm9zx~8qIG1BayniJ3QI0SkrvWhwhLkR4HRpnI8xDWful2Vuq1mh4dIPYXsSEOIQWyC~yflEqTaMD8eS9pSDkkjmWGoWdH86ADwIlAdVFvGaZKu2zUe~w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603633357&Signature=AmaQpRm87vpth0ybOSQjAR4DU-fGIwsq61pkH8yDbb1aDcR9xzqlQBThpOfakorcbpz-6vxGa-8wMGISB~4ymCvq007iTk~Y-SvL7zSjHQ7qlDwj-WI3jUtmLAFAT1aRSSk9lXMyC2JwIkTq8MSBaN4dq3~uYzmk3iMxVy53C9p4zYvdrIJWivRDvm1LeH3dtVid4YcDDUxX3x0ahwY~ixKcA8Qw0KvHzPbTS0zEPG28huV8NqFi7k1eATGk9vDR9-jZgZkB38p54WTOq4Ju57K~KI6O221JBW8BdYBebxbdRxHaSsJxxsv6RXuBYys3vObYw6ZETTRde5ysOFx5UA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603633357&Signature=ITzrDzy3bPUg4BDE84Ikivwmdb8IsIy0KuKHZ3zGFpzbyTvBZTgCmDH5cuMXPLX7iy-DqqjGtjOC6dUxButhrlim4KUBEVcYs8584eUwFGBwK8HRykDwVJxuYUbPTqgBoUYrKRWDzYYUbIU05nzpOadkf8MQcRD-39M9M7Qxdb5nz6AjPVasiXEurD6zOVmRF4QZjgN1AV2oVgETEAu7DdNt5SXefcCEMkqEH5oFRQy~yQaoSj37y9MFJO7cPmjShs8-gfbZ2-TQHey6Jxts8sPBRFfkmoYYsrpOT5vGoyloAa27BgyNp~VsaG1gKbm8x06K3M4ywNMNg0RBdAfqJA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603633357&Signature=a4gXls5ye7OWcVUeDqseaD8sG-nQbgOuguQX4Ek~LeKB0AofabG218gm3OTx0kHXde7EOatPGimBrCToS1NU7kNlY2ixxuspvZs0iFLiZNsOeEZUgCeL4Yt2SuKNVAwhqprS7CGiYaduYZ7Evx-8BVgsiq55K3hlBrrdAn6KVz5oFbQm5FDrf01dDFhkfUgoeETJZxDZh4fQZADDxke0dYZEEFX4mwLhq3Kht0T7o~A~FxbRX0wOP-~6SAKucYFUxoylcGujj1HomWEVSAEYY29v3-QEv57OT8Q-MXJuy~ctmkTFrE0-b8vfp~AIcBmotaaM3QiNpfGVPb2PjguyKQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603633357&Signature=Mje3DWdX0j7MjyVntJnJr4RmqdurySkZyMFFpYAcmGKzaJ8UBupC7v~j8Q2SkjZCyhr3D2z-zKTf4~jtgbtTbAn9nl~VCiEInOCL9sT8on6ZnqwIuDotKyT5-HoPqSWKSKQlkAYHeybsRzvuMUd4GYL-RY7Qjyh8ACLkVZMUI1P3yCdjW~XtacNu1sqzAl7SNjCxl0P0uOofjOlubjH3u0jZxyYonRaE-YBHalSjOgDmmlzXGiXF8HJurBeCinZju4PAURe-nePGm39wPuxEjkAlaQRcCb32Wak4Qe9Sx~Es-1AQpZoo5AVkFDN5Y6VNi42YOR~aK7QWI5tVut7Cvw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603633357&Signature=EyIsYaNSFV0-ROhmIipxbXwlTy9qjzjR2yDRoibN13gz1M5Y2-YJNGFvgCnvTXlMKLoPyM9y5UFW6rrerVZhsXL2zHXUQsJ3tKpA1CDjNVsbbjJeEIVuBHIXUQFgPJ8Frlq12lNb7x7XaBHBsxC5JYA3DGkpfH92pNTK5j3Gjr~f5rR84C8iQ2bKriKgGMlaH1Lnt2ltOL7enqVtt7sODiaiTOCQDU2nc3i6CAGFE0D3APKQhwSWdRu3kfJsBtXzfvtor2BYjBVt6ctT9jh7oFB6FqDi1~j-kfz3rklezPuLmpxR9E79wW7Xu58wP5bi61rzGuPqmwqRXJpS4wFeeg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      href="/logos?category=JOBS&id=41154575&page=2"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603633357&Signature=TZLpP5hyyr8SW4WeWZwo9SAgnovMBtxA2kuaDtjqCtaVYHN4IQzz8D8jJVUFxkbAUWsDprVkIoQgql44cT3mlPVbe0LJoEVN2I4vtGOAKk5~bIjYrjsZ4tRgVCgOE6oJ5rUZFZ6lvC97Va6-uzfhh7NWqE07YaqdkhctPlv8Ae4teGaKzn-bDwtAo3PG6hLl9f5XfMaCEHx-Hy0wlHo8josacyhlzoPmdm7xGR-fLM8SBtmFAOtVXM5gKwgeBlat5U0yOGPJ0zyHAj7fmXmXApT01lpB48EeooPNF1uVzDtcs2OT9APWBnZQKQfFvQrx9OESg687oRRh9V45ou3YrA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603633357&Signature=W97zxedrSL571FMxy2yIBhoPkddOEks8LerpYFwz0arIqSDaZP2h2ZYe9TvZTLFAEDSN7qlI6ekuDUORkXi0kIzC3VU-JSYJA6U64-Ae09ziiilZamIxQlmf~gslkFy-mVbfgC-zHVG4DP3xI5jjlZGXpZpAJZmtPUO5GuWW1lhtOQzNbnQ7xa1PNLCZhK7R5KHeh0ifliYVXoDKTZX7T4l6C6qgHXSZESvw-MaPRKe4x41Z6FofMhLYDwboQQJ61ikwoiXixfIsf7Fd3-zAZ1s4Lo6xPqo6y2J8KWy7wBSUQNkxsxTF8gbyWfAEHkghz9o13fYbK~RjqqTw6GaJ~Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603633357&Signature=Zy6yNFJOJAN3j9a0SYcuAPcNNJwxMO5gYx6YCOqvZCktqZa2WKW0j6Ee0WmMWYx~hVoJ7S2oVamlIDpwE-AZkq2LDCc6s8u5px6OYM25C6iV46MZZmufGSmHyfIhhj1hJjWDnKSbIRVSWQxzaVpwr4cM-LtoHn4-ZVkg45s~lZRkNiGTUcgnnacXU4Fpy~SvaZSIesRPFG9GM~-Oelo2D~O7QhjneZA2h2wst9fdVuC5NHLDgiW7IeWqrDNuUGUS9Gxy8q4bnHO5o0E576DWN71megmXIh8h8SSvkJbKGLN8GNh73Rh~jUtv3BhiYtH6XRwMDFbhCG77y0a1EdtAqA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603633357&Signature=P6u61zktbaoQI5kL0rhSbxfFe6oLlIgHpFB-bxTckejJ-GoQRUmsRxD7dSCRVXozGBnCpMU9qDjy1SI7dXA7ygv9Y83bSLcREfgK~W9gQTYyZxJPn63KhPdYEJ5LCakViRwcHzy5oMvphb8maOilhoYfNTowhE~NjP8cK54MfKqxFxmHTuAjgdUMquwBFN1D66XA3q~mCuCXl6rx5m~mLXHLJkWr8CRlwCymIOO~i5eRgtHECvnLwQp~nqjwR8LK3iwBhkhlZ2aO1HueP~jHLUkPvEkL1vN2-qak1xj5TY293Z7Es1q87QuyWRkDvDTaMmkjU~S2F2g9DjgoVCbvXA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603633357&Signature=QKP-8guQihEYWt5I6qXDbvqXBFSHq0NCkpMqwo6szS-UA4kgiUykyKOtn-VwSMhHEWhlINWM1fACY8xEaJzNIscioETOQGWzlGI-06xSG4piR9~sXK1PLOJFIETMMuwmS9LSSYNnLQSGdmeJY18b5qWZhOMt7ewF-j0Hb5i-AE4-Fsy~2bLY0sFGM7zDmDFN8y3wQeieSPG2IOQQtpY2~akIo8Ujn~mTFvtiff6URoOchHdEfMPlqIuHLsmbib-p4Nc1e2Ni10PiIG4ReT5lpgD1DBD74bZDM5NPFOt1YlaoRnt~PnEreK2YnLeSwJ3DZKs7aAVDf7mG0i0g9J7hRg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603633357&Signature=c~WyfV6ILzMkCoc-w~KWnAPV8y2u-N5XrvkYqSREBHSedRLNg0ValcPMDR5CY4o6ujOAwTahrdNcOaVktTtnIB~rKWSc0RikOD3Hkt-kMnICRXQw9YZ7H~OfSKfgMQXtqdIFKiK5LQgipDxBJeji5HKqwvffvG0NCc2Pw588b8dsS73vrQwerbd1xFkHTKIl4NzXFnLhJCE4BYnyh-ZLVqv5JE0GcaWwTWptWy-ApvKRBfMtcgEHXrE~vTV0rHItPvUID1wL0-64pLgMhldstcifCWqyn4ja7SBNVTQuQ2x-jY2UAcr5irMmghZJTJje04iiQH66ZfZK9~At1JZQCA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603633357&Signature=U9dnS2pamMwWbm4OMImpgT-nuiP8QzK6xEO2TpA24MoJPJzXXyBySQmOuVFUaYP-ceJwP1nqAi3nwkmAjlMGpY7XLbSvH~tKDLqP6O6Jul2Ib~7Rr7D-aXXdb4kaEKOUEj7hX-ZZZd2Ezh9daO98JWTrcRoRqAp6Doh9uTvLAVIQwFK5rEwAjrb-u8AgfYjgvdXD2pg6mW9dI8k4oqSvXoG7sCdH4SUCkHuUPh50G4Q4JLeFdeRmwBr-S9yyP3KbTI60hG5c5DX~CfyuwQwkunxGrFpgM0-ryNxPpbYWySpF8ZKbF3qTAEsFrkzCyNq5rpwbNA-13DeEe1LZzTBxLw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603633357&Signature=kfcBfBAoZwhCIoRCKzsF5VR37QD3ANgCR-WFpVHDLOxEmRAiZBfa85Fm6tovDf40F0KyTqWea9Z4-gwhOGR~8gOMMeuwI1Duqt~oEMMBTWsoCN5B7wf~JLRqnwwaF5GFf0LhJOsxj8gC3y-VD3CaIOv~YvH7v4~e3C0RPHuy4d4IdI~u6PSDuQcLn7EX59a8di-21OMrs48FiIo3VIHQh0-iUk10YxYVgkxB0QbvXZ7V~n-FDIUD7ZZ-olWzaihnnPN56SjRcb0sFgfaicq-QWl1Q4gFzSFCkdUNLrNcCfuKJqKa5LWhqEcVBdr4gv1WMMFvvNgMgVuH2I4BH92kRw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603633357&Signature=H~0uFUavr7lpyblwIpX9eDwCyu9OZl6UbWgRA2ZW7Dlg8N0KJAo4wkfpxtARg2jVEsh7cE70cd0cPEu4DeK1A9P4PlVWLQVu878D0T0QgvDqGOkv5M50lrBydU0bktBMrOYdy5p4-k2MNkivAj~vDWLTeaz8WDZKdGMo2n6u44lNA36kn5W2jkiIJEK50DdJ5sbkWKdxrn4hI7GUAwd5Vm8G1RwO5VML4VDBgP9EyBBk7e132xPPqDn9UCWBPqzWQvdNLeLjbKgqPYMNfgQCBdvskox4zJH-5xJM~m1M2SscfEI4ujzbbXkZA4ROVVrxoDPdty-SQ1r0Uw3k21RsFg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      href="/logos?category=PEOPLE&id=41154575&page=2"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603633357&Signature=WX22yBqP0ern166Ehb5ZYPtJUX0J6Uz51FaEThtjdaB5jmkvViHvsNb9zi8cqwvXi-HDZ9T4O6mtV5PXhMP0HQf1C-OTlVtyQc7E7WBikdMKgEZvHG07MJIFX9~2hCacq9lCjyXmSdmXQU0~rPXnPSqQH0Y5y4PQpkSAFyk7gnGeaGa8e9Of2tM-lwEv8~5~Imd4AQG~IbiXbuLJnTiq08SyugmX9sB0YaneroXFaVvCw9xdmBJLwtTzh1u7YGeHVOdRihm4XDHPUJnOUL-UMSZ0Duo-uB1mVX8B3loLmi6w96JikqwBvPqvatwXfmv5-4IBtzMXZmS6vMJa3XwLFw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603633357&Signature=HQF-7PDC3kweCeP3UIARVfu5Hj~~SUlElSNGBB6kI5nrAij~OTYekX4drc4jwl4JdLRe~c2daqPC23j0mbgl0dYyzrpc4WL9xlgjha2HLltYQedzGLg7qo4gnQxra3gSjbvNs05JtdAvO9Q6AQuuhRzfkRQz7X2qNkIsCMkuWX1qK2sLgCXXvSl0OW2OErtFiUdWyZ1u8kVCDCyB6A5xAfWlSi0gkZDBvteyMtGJqXfnj0cNjgf1Ih8XPVJZUmak~xqOHbXdXF9ZdXghIAWay6E4tv6yDngRxZuJW7mB7eYUDysvxr-Ufv3Eb~yJvjBchHAgtXClpXA5j3pDonrRNA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603633357&Signature=AnINi-3hGmqZOWcj6H-oONJKdRAY1WSGpYjmuu3pfX8gYyMAJqAHVtTkHcx57jQbMWGr5Y6ntjAEVIj1xIgJwH5YbBLdjGjAPtEjHqrMcazfaqOmCvrscgGYyzUsOY5eGe8oQEWLGvDarVF70rNDQdE87eSpwi~jl0ak6sh9wzwbKacnxD28o0kPpGsYFV9eJhir0KqNz3XyADayukHTc7lRqfI0vgXezjYqB7qm4jMxiVb3dOldNDcN75JO6QWQOCBKc1Bb5n20SdUnn1-Ii6~ymP0gdB5U-4qkUZnmwiF2lVe6IDqpuxqS14coJPTcDdXT857igM0h2fh0VNS7Cw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603633357&Signature=TmuhkwqH4xdFbS0AQgRf-AouDV5cU2BJu3Xmn5mYrWXkDYzrEMYlTYAVKXGMg2TLGUQz9bR4Qk0DZV7v8YNiUcaAowSIqa0Ru9R4Z-RkPk7xCSHAt30jxdWAqs6gVT74ys6IKTB5OaquVAeJe~oL868AuVEBfup6Ig-ibEoRW9rezSF~~7ft8YrPpCg1b~yQIYixHGCBSLSj7a~MT5Gb5-wCpK873viqQPRsJezTZhPdNY-qi69RIMLo~~o2~kIu8Eaa3DKTSK5Kk8iw~gFdE3lqCLbbq~z~9U3srDmgwxdnp3njsAeeS2WzmWV0VonVfoupWm8ICDju0k-K3pawuQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603633357&Signature=DeTlKMnyEl~XF6VyxXxqwKedtzHRbdc5dDGDfXZMIDyqLnqhTvrtPO7s1noJCix2-Sl8ellzAd-54VLzqOtUqYJOywLd4D-62VF6a3gWvWOm3UH-737FtN6GSj5Fz4CYlHI8RCgwL3wuy0CtsqZhURq0Ba1NsHCzIplUoG1m6j3cUySjOrUooBXC~1B8EKLB9bS2ITnIZNeUG2a6fWYA~nRA5IoSjp1RxDJH2u8MK1Kfnd1~IvV-YoI1TRubop3ClKPICCwtU3JdKLHIjF5OrtfkYZgxboBpDJwU4YjpjR6igdzGYG4m7EM78vuDMqVwrJjGc13alLAkSzdI5D1FUg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603633357&Signature=ACOyJ0-2vs80NaO09W5uzsE4xGpEiIh9QCajiVxaFW1LoGMtDrZc46ROYWywTulI0sD5282kduqpKShgf8d6hgjZ0TozMEYJtsrrDjzjEybJa93m5nRWA-T4E0HU0M-VBgXoiNTMx3z4I0MseUsBXnj3YV-GF8jOr3oEEbuR8UVajf9mD9ALi8SGh8FipkWHMi1i3JyB-5z8ivvtCg8J8JSHZ4GMDSh-wKC9OuejhEbKgukxPdDzbHCLzaVs09m64bQFukFTfTAXgybBObcyJBg~uIEy-wyLgKMo8q5gLpyG0JzMy1-Ax0uuAqjNqdd83KP-9gZdXrO7~tfNc9wydQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603633357&Signature=TQezrVcfJqUyopIJCS1gy1BREn99NSqWm~3MRlh6Zp-yKEfeg5i8LEfGlwQB5pbx7pWhGALvngGvt825edZpKr0rJYEoHj5ag-2qQbwmjAveXmVXspYPQJOhjCUHZrZyZvl7OTv5SpFGjiM8ndTLSQMrq7QelDGSMJMTUiegAtPcu3kzG7zI7ZfH83LXCPoRkZG-kjJZl3v279rEYKXrS2lhok8~othiQQkC8yDNepCsw2djjvewXncILjpJAAf0ic3wp7IFTm-RA9-0LtR6P5E-Dg1ulygTy7GxMp5SkgJ1gRWl7FToT7DO52KJ4BrLlXr1N2pSBFmkTANI1n8mxw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603633357&Signature=ldKgnyPOx1tEbxU2o2H-SsrJ3D2ydRHeAq-e29A~h~tlVr4NlGsDDDDQS21liFj4ogIbnCQRatkrkJipPQqwXWaBJDc6zURWH55sPE22RyiX-sgcPopTmPVClteNC6BCv8L-lvwjmbEzdHZIh~W-YvZLPVBAdSlIN~RnZFPOD2wuJ-mom-DF-IvJuPUyTQnopWRUI8Z8aDdwWQQJX7mKwii2A5PJ2oLAKxBFei2J~HfuYoJaqDQQD2myeQld3j8t-vR-LqK3nxnT~VdI51d6mQ5j~S3xi49-8WRZq2NbV~yyoQBgj40oZulUCeJC4Tqg2rwabt-sXhMfBvgmCDC40Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603633357&Signature=fD2zUhaWErh3hW3modQBrQ9Jbw10RZX0UW451Wo7k8vZVMAv0cxo9eNGTN3NdKXdumencAmdjkXc3UQwsfX4-ISG0fc8Gkq-xb0dq97-1cTU4gQnRBw~C81W5DyiHx9Id20sh1xLdSxZ4wuGrbHISB2R2ic0l2nDy4Gf4JztbH8P7m92DPUM4jDq7Zo3v93GUy5vXuNtNDPDGr3BZTkHxzKLdW-caLMmDPrDU19U6LIxJksjUPpZY10Ke~MKfoUWkWX70Jy7etmxY5KkSWz2Y4lheFprKbwXxhvnxa0EhKLf8R84zhea6Z5NGJXlqeICB6AzIZTfSvyEX40k7Xl~AQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                      Save Invoice
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

export default HomeInvoice;
