import React, { Component } from "react";
import HomeCategories from "../invoice/HomeCategories";

class HomePerformaInvoice extends Component {
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
                      &nbsp;Save Proforma Invoice
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
                      defaultValue="A7fbJaHIq2m6LEp+y3ShhSqNv9jXIdcXAiR6UKqkriNGmMoO5ziiYj9u4pZ2zjsLN4gUDKAh4gZ+znHctNQiQA=="
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
                          &nbsp;&nbsp;Sent By
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
                          &nbsp;&nbsp;Sent To
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603634892&Signature=cTxNmb4XLf2Dj8oMdAolLjIXyHLh4ghqTtPAp40izOboTef5ABbUD68t0B9pNo-a8Ory~JetM~KWLEkVe8SziLklY79e3x4O-Alt1qXJ1iyJdKmhsjS0q69UI2DhIu3j-ud0vUx7kiGzCaut~NEZQE~tZSJjsF8JhZGCSIjm1nwBLx-6IyIvCeVhi8jhFl6SYa-EAOEO3dsfGR6KxEu9R1WzEPiu~YonwZwnO99kXNVE0cx4IcsEM5sRf6O-TDsrot~60-TBKz1AwBbybJY9A0-PJQDTmkTj6b3RURbCwM9xMGw6lpFPxLj3FIsg4wd1j21d~eCtB0EvT9NhdEo2rg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603634892&Signature=TlayEN8SNKjSsL~bJsA-M4T~j3rqM5G5gV5PDKDTGLUhZlxQjqb6NaqkCPqIIn2zMP2EKomVwYqoZRRgLuXT4l5paNrFRVDkjL~ibC0C15Db~coYiO-0KmhcqgxBvyNAfB0nBp8LdSUon9FV2ZQE8i17RtaU5xXQRDnjF8WlPaixJUsBqT2KoCfJELd-1vZI-TRliZMg3MSX66WBSOJ4Rf3kHUBJfxoU2oR97UjgFPrJe0SMdkc13Wtkl6XpQMd-Vx48N-9~QprXH9RJeubux-CFkg9Bvjgj~LcocIk~C5bM7Dkp636bKM8k2EBZvetD-5Hh59epD7v89YhDI72clg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603634892&Signature=jyQtCyCJwFqRDufFR0vgDwb765Vl12c3h6~5bM8NJp16bt4nCBIXXY~hTM09hCs5HTwDcAB7aM3yawyKsJvNVFewqek0tGG~Z9Cutmu83eb30UpF12v6lvtQTgUmI48a9IM5MyVFyJ9XMtQ7zEQRHTPjeSwwYVbQobjYFtetSpBDj2nWMI5FvMnYMYCy3C3dWf6DMsf1LGOLis-3HAsPkm5KwbCTXdOv4aKwe~VJjay1QyUeoCelZlA6Io21iyN3TiQ1w7NNgxE6uLDTCOpEBibnloaZi9iWOb4nIV13PM8G7clxKuSkHCb~NZtp0shiNsto3jBKqJNmYSotbxL33g__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603634892&Signature=SXvFUNP6gXrxizvTuyAIIq5KQRPMlZK21Guvph33FRzPQmHz1zSZdiYp9WHenfT18qrnduZwgBCz4dcfHByM7AhbWVjIqwOBTM2~kTTcjPJCPjx1D4hTxQAQTA35n~2eKhXDjbQlLNq8qXqqECG1hIqkWc78vnqhZzAFnlL~8AiOl-xZ3gYrzxDrJe6Ffc0dCfYyVJRH20eZ2~eVIiS2U4LDuewEp28HKpXzD7M5Pf3I9r3m1QDX0h0QYRwB5mgzmnmO~Cd3-GYvVd1jl7ywuU3-Zm33BGRzBe~sqpz-4r70wbCXaEJwVw8IaHEzNhtJsHgE62UChJbmekG7xs3hMg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603634892&Signature=pow5TReeMpCSIYsCEM7Mg6-NOgJ7srhYWn6M7fdHsYZccDp0-kMCi3thWm-zPPLyHpzS33qUaQc4qs7h6NSwreHkbJzggrX0zLENP-AqutFI4j2DeymIEP0-cdEqWQpyvyuTJY5y1s1SIwlaayJM1ABJsyOl~HrsudtmUPHBVcZRYHkUNusVH7UzunEtfzfMpjmh9ynpW1iMp4nvff1cunfnS2-Mv2~tmoLjW6YzXFe~cIWAFv1KUAziUu~PlQugxxSSxwp~yzUmOo3wUr~JXoeSUAMY5xIG~vQ-2LGz5SqgZKHFVd8ekLllsV0jnNsnRylw-NlZbZuNhA4bk~TKeA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603634892&Signature=Iuuzw33my3N65OeivkMEFflQKdH83UmyrXsKDmS1ZnZB9ZYPRTXrZUKReStk6Fk6ObOSdR2Zzi4Pu8~dIe1Lv~uvURtYs8tl3szTHlJbTMQkSBbZBeZRedZcFk2i5EFefirOcWCrJY86pqGdUfIdQClGQgq7cpxRLvCeblcM5~qV~6pbXKogfJtWz~Wq-u7v3M3QiM5piI9FYmmnmu2G1zWB~sh~xVQiw1asMnR-ZXztQeDHYcnKOWpIJBHlIaXwMV3MZRgmXw-svQ5UVxMXBBFyVbe5~O1LwwmpMojv8JVgtQqLbV-22zIfhvvo7EXGxGbX5jSA0b4vaJjB4805jA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603634892&Signature=If06BVxWjoslDtBhmyTVoY8Y6r6VUNzWVzhesfjVsht76hRfx-wIOWxSkSqrZnL0dcCtuZr3-dHtdZ0sq6xSsMZO9woEuHiDb--16coZnXDpPLTmw9BCtkKiMBzZvsQa-~uLwFGCu8XhvmlnvBRCVmahkfh3QY2-cSX9Q4ni9D5j9N8mOjQigWoX0df1JPWaykVYb~baORvQLhYr1HNM8f50IiVcpU1RnNyt8woM2WiUsPUFtIqopAN6wpoUSYNKEXCaIYY8EEAqQ2CKe~fRYZ~ji0FFTYfnZXB1jLFVaIBpsIJD2AdiCSBNk8pftRLE-t6RbGGsLqXQ34xD0du~-w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603634892&Signature=kAy7fmZuARqzwo~bGwVineLV5VZyPu6lMESJHRY3OEms~aZ9zuFPdUQPmh0d73GB88Au3Ce~zzdwFQchnwvCnV85Bxzp6pUFb-A~Cr7acuYk-mCCrhws1DTwMNBMl1qUIJASVrbeXOxveweWckTPkUOGiO38jw9uINQKLTG1P4jbo9CzBbS7ySwIusGVnrUxPzn7HDb1JG7ra4JF-VacFy8FKsHO92d8ezplyf-3iEFMlxhuxGOhJLUAYzeBBMvfGIvNMGSRMg8HWIXDeTRO0XnMguHPK3amigYQC87NfUXLJwnjeKEzJehVb0S0cE9iVTOzXmv857W-ReP4tK9nOw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603634892&Signature=jECwgJgsBFWOtpgof8jEYMEbIkRCJtOFKKlUtvsCHjGBKyNfbvXsJmf~HfePkNq8N7JeQD4k1PzlVfxQ--S4mge-XshU~zdrs01OxaDL6ON0Gi8e-Ns7pT9gdzsStoh181kWtKU-eDb4bWtPyYnqbOFXmBxObhcGOajduQbFWJX9H-FzcnWedqel4dgwsiaTiszVgpgJKoE37z1pZop~d080ApgYiKHIXJ8TNvhkqDp-v~vh10FxQGIUle93JCXLwFoVG~gxO3qeJ9q8kyI5g---Px63~UnHS7FewgbkkbLc3V9p5QNHOJUGXQ6THk-KGPUA96OyF0SRgPa6X7XbIA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603634892&Signature=GzpoicQvfOXl9TtdGxz6yZtGm~AUXAb8aFHXE8CafaGXSPACiWYiRP-14h-x7~p~vRmwv6rhfmNUBOdhPn6-8BzZmhUnSOUs76SzvUZ0GEpK-haLcCVVj5a2lSMPET~7aGWAZFMC-oHjIfUGoFgB35QuLdgEQF92mggJhTjDAQsZYwhaN~0UVAsBiFKi9JqCnjA8wIhQ~nPb53QRlxvs8uEuxy6oKqpS2TPmw7CQfkoA-rpV5uKWFHK4Y2f6S5~Jusw8W~ZZ~cMzVPM18MszEnrnChUhJM1b2Vh6KVaovvqS5-OxuiQUT-~GFQ7qVsRL5aFzXFbZPcBLaHIBAHlSeQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603634892&Signature=J8JdemOz~xjp-kue1WvZUiwscSQVyieOp7jWqhXh6lJGRykBuX~ofZ37ijSwQZTn9bV0l162nrpfm7XWKJIlFUQkZ6a6zEVEYIwaiRXZvc6nKsfQYyn545FJIKvwMfcNTv0OGfYmn8H9pbUZMn-7TLSbKHs33Fa5AXlBZP9~M4e-X9FjOXs1ZP83cli1Il~Ag6WCZbQltS5GiCYBdTJfjx8j9A9dvRPHV3MR9EmMoRF2IEVJdpUx585v5VXixJ3xBRFW2k290vv-f~5Ahl4yQc36bT59qUOg3tZsN3glESxEeKGLFemQnm3r0d1qiRGD3i2Hw5BIC5WB7R-9YXlWQw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603634892&Signature=AUSapqcXWtdEvS8Rvt~bAAXLzqvuPz45cF9opzpFrb5sQAbmhovNCeJnAVoG1Bg-MuFPmux5fnB8ZBaD6SN7Yt8GIpky5WFmBMagL-AbgkeLPiYSneElre1tm4fIS1~ZOGaiB0UixE24NBANXmwqb1CtG-Ncz3JKcByC-tkB9j2WyiXZvPJa9FU0XBZ46p8XuePL03ybvt4TFMcXl7DHzpOktTrrYxeFIqr~SXUevIGCbOb74LBw-lI6-4~b0mftNqXcSWdp~eHZfyrIVj4lcPSu7aic3B9TBzLin~E6OeiumJ5v3vUJkV4QccAw9olDmz3Smy8o~13JuU8r8TU-qA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603634892&Signature=ca8KqOfbSzOI1kLermcwhulHwvDHyuvUsGinOzLJ9ZkxaiaiBFMYBnYUbjByJnazPvi1t8w1XCh8a4M6Iz0KW-cms1fsjBJe8WKOP2I6pqOLKZ8bWhBUZje9c5iida6VCRwHeAFZQITUsbEeWeZppTiFmrWz6Z6~F-1eYSdIyaACGKgRjgvY6myaZOz~6lJaxutXREWjoMOJ8L4Qm0FL096eJFC1Cq5sAzjvydiRd4z3VqWbsjNBecFJm6lak2XBcvZPBIKTHr54rkM2zogs9CYmv9D79KD42YtiaXxJ7-XQSWaYysledEpO5TLnQ0p5BkWmVd8VtNjdXd4vh450PA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603634892&Signature=iVoGQPF8lRLQE9z9US1YlH98FWbm3IifNDYaEGT7whff70mHdNTxzDBlyWx2NcGsWpY2GSOQLOrrm0zzpaWy9shtPUylHF5jeRUHQ-d14L5TJd3QcFKq4IsrlkFBnRG2H6-uXy-Aaxuh6G31fBDuWT46cQDHZMQfsDMMC6XnD20EPALC0GPqPunRAg9mnqTS4q61b0tOYKWLsh20w0QhOtgHQ7bZgQVYOVjwZlYH24~gqa71ZCDH0kmewcLBCyDWXgCQcPfF8bNWTjKjY4ZMjPwNrJNER1pws9HeA-vFDux3dt7zZFlKzt3YgNII4BDqmoyGFEhdHL9BzB4n3xjCcA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603634892&Signature=ns-ZGV8c0TmcjueeE96o9lco3BzzDBSvXXLLyAO7nFu4CD7adidNKuidmIShEEu2xa5D0Pv3rt7d7YaFkDOSU8JurKz9h-xZzJxUENC0SQraJmBIdBI~T6BiEYggfnJGYasOhFJ5rcf18nmY2j7BBFY4TXmAzK2gXLb0Xwh15OTtY0E5-~iNGy4AwiDQGJyOLPfH2mg9XD0O7NypLz9tbrNpZ2F9KgaxfWD2AIAJgG4Uh0vrDbqLjNVyjG5GnVyEk8KlSdO2n6gqgM9QG-A2xZMUnlrVdO4D1ZGyThjXnQXDxoJgYrZPCIlS6RkRiGn4XPtdou9rFMuZWUqTFtpvXQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603634892&Signature=h6NdwLXLEUhvtrRz2RHAjnG1~1HB78a7-3VC8DU2vIG9W1IivutFiu0GPDjgHHjwhjW0uOuOU2-3UGltplRV2Z1Yyx0jV1VgIkzPyBWxQS1u0kNx~b3fuzwGm9ppXMGT-Lh~tsHbUw3g~paV8GSz9dvphRh1B0Bf~4TTa1A3IoipIomb2lWYmRyGieqDN~QJln8hv33fLPgd9bDCFUATGFlwEP7M-M~5KX90MBZlkD4kW3~TA3rhs4kbFVDo4HaIyWQb2OZ44hYONwCJyhq-zcByJDUBe-eWPGDnv-~KqwfvjRqFPwQm6a~UJeP3RQJv5UbS468rYmeSZpZ~j8sWvA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603634892&Signature=UiqdcsEdtN36tU5kFN9qMi1dl~qbH0FJMm9L1O7-jDdckm5eMofsMAUFLHKwjOTmCwTg4fKrHKqaZktpIgAiqlyYyNY2D3ETOxNogS4F8kBASwv5Rgd0Pi2af0kZoFTjsk0moPPzUcGa6ZOhWzbIWqKum94K-rBco8EXRP27CEfY1NUdus8dkGA8ldIhJ1S3YieacQKOSJaoeiW7kjKKYXKM8iz2sYKqWb3HyByUsf7Pq~Sl3qVTDhy5uBeB43R58i6k5cCbP0zoa-569KhJWjkJAfpP6pa5OfeU2XkYVGQxfcRW7QuNGK6-xu9qVlIcg8hysTvOn9b3MCXYhV04ow__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603634892&Signature=R2rieao4YdNFMgtjUjnvUhhMa8-095byyM4fzLwHg9K0Cr5Kbvg0Ij3DmrOLNYbPJ~44xLPMLZDaJBkVkINDyB4ctz0uJ3rkf0BrGLOk6TWc~Vnlbn2x0LM1PqR7ZCOe0QbPjn1qIteYeANQWLzH7hMKaXO7GFyjQz~3yveajqfjhOesUrP6N~dcmgsSV9stGERPMPsM98M1Z9wr~3vbLib8HA7Kp3TTKGmYLiB0rnWbbNvnsENdMrnSUptIbCdzH2e5cHq2EFGX0OGzdbiRQbOeZuFT0-wCcmgmq8Ogi5v5OcTiTzZma6v8QsdcJicaG-y2XpLN1GJqN7Z~LIDxvg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603634892&Signature=fpL2Ua~-Bh7qgYlB4RB9fzXm2kli67yqtCGZHr02zwjdGCQ3x0-pIjU2en03m1jaf35hzKBs3RV6Tv5Qcox-juW~rzr~-2SOi6kXn2LRgaYixYyPx8ysEH3DeXXKShGS2n5R6dk3YCzq-iMAQjaiN4tVIEMCnku1qb8m61NG1DcNzfVEHDhjflNwzj54Dqu9D8LAunQ7Iq6R8DUMfSPRSjcmTthgJUMIr0Rix064GWb0cEshnAJ5Z8TRr7n5khrzwFod-yP6h-c1YaegHKtclA4UD3JjMXEPrBba03aEYaTf3rKomTVgwUwF3gQkR~bNV3UP~dCzWNXrbZa1NXH9Jw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603634892&Signature=gzPTd7~lOIYDC2mcYELxz5cFoL9SKMlQo~I1k6xjL7tZQiyl74pLuZ5xUqkVrqtrjdGxRK6TMZY2mgQVSc4lU839FgeEcbrFPbsOhuSzGLHD71-y8yoZgxXMVh6ZOiQ7sAHoPw3iaDvnjgj-5~X1KEWliIS5VbrohKQUQ7AUQdGVqOKjQyknEytPduni6JySy4hZyLkis~QJXh0dq57YP28ZbMHoK7nEU~TzkiYC0VuUrzvmNJ55UgwCpL9PhV8GO9HCdoPVDeIb6TG7TYVBrqlyMhqnMlHITnSOOeRM7tbkGAucYqJ-7WWkJCm8uBHBcSLBwFWc3m0JpZ0lJxzI1Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603634892&Signature=dKaLBa4t9Ujbt11qaDAa5mqMaVObnkznIfYBz1A7zs-cdu4DZ~m6A-N7MJoAqXTTyTJobGDxMFLDM9Pplx~vxDYz9moVmFlokpfJ6Jm9tLDoGiuuXORQhspFs7xe~dOZuTajtMKngqaDCV3v2Gpv29Fd~EIJ9xvBf9LS3ehYelxD7CkpEQ2QD~25R4HyZB0v~5npO9JVro3BmQcLAy4cH9WuSlXud6b-vLlZKDefknuwvRlwqIXYIHdH5uiayFmssG05e6iq1ZJF7YdcowMpPvZOBajjlGNXbcNO3xXfk25KUjPdnpfRu~An5BboNME0M-Tn99RsSYfFkqa0oXmxgA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603634892&Signature=UxEGfZfARXPIRX7qrSVecDral7IsAJKyQbEC3--prAWjrJU9PXsdtCubdMXbRFBg0n0Bpp1DGUVhbJ7rMUcFWM86cFBwrQyM2yWv9OFPfv8iWPV3wYcU5X31VtvSOVX0bHG93u97VQN76Cy5ueCphCxNGouXDZKqhOL~qqwcIJUejjLCSjZVuEoE0LKz9MNQhblmExer0DmzBM-e8uGJ~D7dbITuQsYtBD-UKDzB-8Jvx-P7q7G6dN6zzxEonz7eLn6pMvLdXr4dGTudKRawsQRc7hudRaS9Qshn32Zbqx6pnMTcKzMogXx~dw~66Xyh8XR3ip7C-60GFKhwtip76w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603634892&Signature=hP3BoSdgh3IAn~58zCChuCWB5I0tpcW3AK3IMs~cnz-L6DV44Y5u6bSlDDyEmZWL-TJwCDnU3I5BAGcCAWPaxH1QYmrvjfw0cxLM9vad-c4wok3G61Sm~0xLmNWBlYdpfnuvFp07qtn63ZhfDv5K1fhJTx14OundqT1wS9xWtp-tvY-BZEpm9jdB~0phfJpGz1nXSSWSlnUTOw1~j~jIad5ry9QGLKnXDIRxI5Fo4mDHYNajwnJCJotIyW2b8vNnbkezlqVPiaFCEIFufF~00hSfY4eZH-DE2DnyxdHpkbtmS~DHNz-0jIo1306UeY8vYy9HIcARQ-MfuqW9hSgSaw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603634892&Signature=kaDPeFVVzOurkXq0ta85mVc1ioliE24pjza3YVTQ-W0J9OO18l2sVNe1lCzyClZCfIS8kqGFCsZzMGMqw7vH6Y83-Y2q2nvFsegzEZ1eOLPEI0MtQJGn9XauZ9O~tmUCtUIdYQTQ5QN9dnkHlh-dMJWaWiMWsQvR~0Fn2YXIDz3RRdAoAEtaBlkgq1sjy7r480H8ylEFvoW0OmJWSDMyoZfSOGIu2e7IWCVdBY1QgAz6I9ZEH6jbo~~qT1-TmgGfEFulp9X0O3oEDgODZdPdA2WPh~sCzmnNuc1qOsCILze6qXMYNJXWyv9DS5XD~MmEdJFa4rSggru2qzRZgwMbiA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603634892&Signature=ifytGmQnkHr828uDPIr5Vd1S~eDS8dmtjRprzYjbtOaFg9y5lwCBWqTCQUhp9MONLtkyT90fXcwFkxJ~VN2LBGEmSmhRP-yu8RRwuqNhNG-nqYmzcjKCnJupPzGyHuhllC5XCBArxnoQ4DzE1dLPaU9oEj2DjzJAMKXNxPDqjv9IkNeq~wN04U7BYMyBaXQLbSKS9N-yies9Ym7hV4Z9B5oWMmkfToeWD8QZu2hBx1sW9gnxjmkhSl9nHs0BEBRu5TrCqwSRysvuHSnsgsEjyyg7ZVjWpakgL07ECSWdT7cgcENcJZVd~T3WyjAHD90v~cmpm5r9-leHIu75ui~AbQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603634892&Signature=UfiVk9yT2CTyiLeHLzGR2LxVXCh0jhQe4eZhxo3z1Tu3AyU5gJQTT-ENvJotaJ6qz5gqsCx4mA8gh0eycre31NHfjEeT4kxS4M5IqQeyAZrtHmfr5aLCURv1r4LmuuB9X~ZO1X-GbQrgYJHKSLWjI2dF~qXZEwMXhefVGcL98tCHheb6vSjLyZHd-lzybe~WLZwUJkgav16lofhLzCeBeltVv827yT2qIZniGQKmfHRLtWsq0n7XLw3ddeMgVWotHM9V6TfnsYQggiMm2gG7hzYDvFDqB~wuTdP9AZINY2jFxoL8OfSpB~2bnSDGAAHobcrfq03ah0SG~A2jxYMKvg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                      src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603634892&Signature=N1XOSWjApIsyPsLMcxwDajY23aQj5NBtWwDiP0s7dmKjxnpbI08Fjz7SbZUitzDFyHAmogdqlYtpvwoaZhBLLM4xiO25EVTa4-Dn2ix7fnLcg5~bmeRAAIGKxBjXkXjP1naNTbQaGPuDyKFfnCk6Lbk6V7gz13xt~fcWoGH1-ezoJ53F4PEkSsH6gIpTVlNy6usJiMnpAH4YSWOef8qW1KZwvpUm314Mi6txwijPPMkqunuPDfjBodnV1S4iQsOt512eXlD2Mv3cMN5JeVtyucSMiaEKbEl4LrRl7R5jtBDw7J8xZFvLvMnisss-iZFL1TTbtggEVtKMBLGa5FK5qA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                      Save Proforma Invoice
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

export default HomePerformaInvoice;
