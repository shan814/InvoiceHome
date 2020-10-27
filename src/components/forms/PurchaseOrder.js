import React, { Component } from "react";
import Categories from "../invoice/Categories";
class PurchaseOrder extends Component {
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
                  New Purchase Order
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
                    defaultValue="0tc9qtld49AWUjy63WlNfYA3D3Z7h66pyT+7BQvZK5Hlu+IFtz5dSGYW912laiMMbr8p3lcj0ShXLrQHsRQwkQ=="
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603140871&Signature=BDCrVhx-AiyC3Fx1NW8V04O3m3rCn7c~eaJ8xE7dG~pdCqead9p2bg7WMTyXYLdO4y16jJL8p4vnpkDRbP8eoqCj0LC2TFzgdAhdFToQBbBWtGH2Sfia3szvBS3KBFrmdFDWAhfnes~-gSNCnHgg7WYU4cjeG2ODgor~ByefcXPl~9Zcw-8skmHwBARoRFhpkW4H5l0miTAeEmiAWYhCR7EU1Wv1vItGKvG4hfqj-7i7soHJ4L3Aode1xVAtUmJEIPLga7Ns~qdYG~bdI7aqq16RsIV-9XoQo~dhw12BmEDfL-4FBMWV8hn7BKl-LurkZKuNSktBdSApgv~lmyutOQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603140871&Signature=HtoA52FNFO0hxmLzFjLlwxRyxB-nv6VUN5BiT93g-2wccUieVykR4FYHXvxs53Ai9cTreQG3fco6SarzxnSVPo8jyNaM4~NkJQ5yxiOQLzAMiJNlab~AEtx85AapK2jsyz2wOt9RWhgX9yqciVP85c7~kd38QO5u-T24Q5tzE7K-eLoaFL-M8u2yAUQoiluoBYj-GRGqyfHHbrAZVAyhui~h0aJCSVLaytOBm2ymuHhEom1V0Y~t-dbIKBcOWHUyYwx3o1pN812LQAF6heJE9t92sT2jnZxsKc6B5GunCEyX73lTgAr4MLiiEipk22bbr5yQZxFTfJIZYm6SIYsZ2A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603140871&Signature=e7dvY2IUY8xCanMRNqxSJKKsPJuLjuU718oaUOUH8p9p4VpJB8~Y2GmQzum0J1E0ma41S4l2NN29Z8l8kx2xZColk66vTjsxFy2xn33GEjzyJiP1ws72v08YoBpymQPoM-dG1mO3oWFBcf~xrBSZ-mWu7TtVrILcpIWo4H5HQxC5bL6w-Saq-uzbSvb5X65mlnKeU6tOQGxjk05swgoczJh2WPOnTuH9QWnypinpT09bKeem-FkSqJXe~rs0OeXsSKYGzwoZoXOQW1eLCyM8iUPmMV-zlX5jG9KDjny5J3x3mSbxvAUunxPmnIl2Jsqj2htkfy3VWwhmuI28F9hH5Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603140871&Signature=eU7pEUNm-RwF7~A4q53zr4Eqeng4p2KrJZqt~wOLA21mGXUiE0B7YWk4Eavof22mhkRt7c4nanOEA8l2-lQ5d6S1Z0JUnZQmpSDkekljYfGxDT1wlYbyQKG-1JPS7OXT3UqSGB8WIzdHWAuyWuV3JYEo2ArW-u-PSnRNM9EqMkGST0posiFK9Y7ccS2ItbPyRKMv7vJewuvCDm75MzNWRQjQ34GKUryntHl-hgWH8iAcu5T8WyDsEqwhPbL32m4qotsJOXwY3~pEvyV5UhziPZ5tfo4ZC5Rkr3ctUORm2g1sNhTmJZDPEtAwWD8xC4qGkIFB9XIRLhtMQnmKiCAl4Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603140871&Signature=S04qW7ff5s-3afjYc8LLabrehuaRpzrVdKzkmqf3cNo2UEshr4Q6aBw79wWSeuHujtZ5hBYpo2FQIs3ByR7XU3bzU0rhDNG1T2ASap0hF~4dbUxTAkoA5biz4Ic-4qstjsdp9SQkDIbxRes74l9KANqNdrHK4yMMcF~-wzU0sT06UYKXdZwbe~Dnus9J35LYFfcw8MgZIBOTfEN8w6Ej~1Mv5kfVWq3rbLPy3p997n2-O5aQrT4WtviwKzYORjugvi8IbiQCK59C4Mai~ztW0vCjUFse5CeGxx0jDVreuAyiH-oaRcDN6~ouwwdW4O59sdbcAnYuOO3kOL-5PR5zYQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603140871&Signature=Yd84cXB2~pnYTE~RNaGQlzR-MZV4XdZtjuPyoVBoi~jLl2XY~sh8WdVMDiFDxl21mlwKVUWuQrFbhMmMoZynkhrGQQJntLpUWJA8K0ymeWqD~KOfiwIIff2pbyWAPYrTSMiNJun6EhZgZacD8I8uMMwwx4c5yG3HXRTMMsOHNMugyh7LxL~WZI6tgno~Aihlj5e~tf0oxInsvldPuEja9gAbP2ycqLGSsRChbfoJ4v3Qn8RrLDQVgjJcqUjzDJ8TqbB2SkDnZKoZT74zNVIxTNpc5e5bqSHo43Mh4Cr-GZN~cVn4siF2oQq41c6Sjix7ryQ77yaUnGhZUcpaM7IZUA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603140871&Signature=Uq9UoGlkRjnBgBKFYVEJCTf-5PNRXFHWbIl-hs4c78SwTw-2EZLgl2OZoiPvNjhqqFdwTv0PCKB9uAtcuCQc4KPvzWJV2MV03GkN1DTdToYfU-B-TLL0dMX0hunSARyAOhSORKx~2s5TUtWTcVa0XRNkwxGtw57QoZFoCgAOfmxFZpf5rSjY1qSvUmaATOVNMde0vMhQKJ0NkturzPWVnBg-2DyI8XilGK2Z5qVUPW9ua5ez9V96kLCbVrLrSWTMbrPGX5ajToWyMGeTXM2dRtd3NEsUEt93b9WQlqASNAYHrOL~9IQTMZtca5hkDUDkQiBs7C8MtvD2FXYCRp3nhw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603140871&Signature=feqCwy1cAlh2MG9HvGr9sQgKVtpKYePQlETN3BqLBgXdWScEzWC7p16LIbp8CXcYrv~SyfMNcp-rrV4FXok61nd4g8HmqIy~wRsEfgkfzMwTuddktJ9eiwiaQhObhYwjejMNpZGLUPpMv6KOhEYb06pTdUoHJSZHCiUoMDOjsyxXEerK08JgO3610HblDOsIHhH4vWam30yr9KaGjuMdvR5VyC9RsubgmKTWmeNkGXTAqAiZZnlGS6NkrFVzw4uVV~Xwp0O0k0Q0h6hXPxb6u6Svg9Awv90656KF~TFLU6TpPXZz9FpHXOLEZuqP65xAH6RbiPpgbZ6WuoGOy-O6ng__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603140871&Signature=pJ93W6khtaX13TEwRX8AikkLHizcmRg9bdGYrb3kdZt~mHT2X01RuLKcfCtmGe50aLfcutnRrLIM-aIeC4eZRriAoOmZeSXgqoTaQi~VOdSvDOmPDO2Ib8vpu2eXirH1p0YwQSd9TZQk10Zf2piYtcVCuv4TPk1CpGgBrluQ0ezAoOlQhkzEFi1Ep1qBFXr2ut~9cQqhZzoPUFurlTjckrAIHQAryrNu~0kIsPOlQn-BA6LhEOSZElIiiQjMD35pXHNcicoFZUnA2HvvvEcZslT91ZB3vl9v4Bi29WrGZbkObFvzcmRug0fpk66pXM~miBaTgwLWhC4YwzSE5UTbIQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603140871&Signature=JzR7tONAuNWDX7OJaPbDvhCjPCF44bUm44DV7WzAieRzw9SCf0SjIcxWvK9q2VFv2qhD9ClVzrB3utxZrMLtX5g7ndIFAGT2RqWCmb0Xg0SFv95-kmIu7mazonoILBPBYghz3dgYHC5RnuMk8MQ4fCDjf2PT3Stugk44LdjeUzABS0OMsXwqIuco4aBkRcZ-DuSnlWGl~nIo7BDBsjGkeuSo-UgrUHncXJGzDX6PHnS3vp3FarVuiaTBZCtUnvvOI-dWNa-LxIJg0XjgAt5cOe3PnRSNr5c7z9qp~kSwNhH40iHX8KhMl78o8BWKidXNrTeeIf1gqKrmLj4bvjYVaQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603140871&Signature=HR4YSznJiBkFsNrOyPChmc02-wsR8qbrQDEMo47~eIS2T8exC7FokCLqUXgOEJ18qjmG-A9mJR5LxMeNxyH-Zm3tnqilqd4xWdsyG~tYFIGkgaO2PF5lAarEf1yE4WqCj~OXNVnyoTYQQoo6lqraqO4vpKHXtb1RIy8KJgv67pYoi0CBihqW5CONl9o1f3MlQxnDt-OIxZfp60znvR8lpDPwyP0s0g7M90FMKUsxjiE1lWa3GeJXfHwjH-sac5wh1v47ZGR2z0ommaosERq6y6B48PvJwUm8O2fpxbB9hjWe7-rxUpKvzgI6WY4b1s35SstXJ6wlyq3Ga0hfO4AVGg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603140871&Signature=ALe8H98KACvaFIdJjujVglzHFpjZEYnORwR0eOT4gfJkMjz96QTz93tvT0ZbX8s3Gz1OPYix6GwD3Jjdur64xTgU47RbBEF3-Nv9gshsmpNh59L37p4Tk75qekg9wdayxE2VB2BGnt-dhiJzELRvQqs5sbPmtE-UqGk0MOnuQd3yGV6AvJMvYarNlzPtCiZYCe5i2F0VKVZdeYOErT9UjTA9CRTHwt-xgQY1~GJtb~Atg-9r7g7L5353cSWjVGG8NKisDJWpEmuGtvPJzMDr9upXJJyfck8rMdFy8uUO0Ij~pAXNc06mz0XAPMJRNeRcURRNTWWMBGcZ0CnlaCWK8Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603140871&Signature=YjIMD0ZqzFCRthuoYt7KLphBVn3B5Ckm7AiH~oNdCIYvxlIMHVd~DUMLTyJStkB-4yrrp1aBK5360Os7Gfjjjg3UwRLh8FVhbSftCUnibna9lQtxzeNhB309S3yfJLSKoYqv0H9Ejb66KgQPUwXLeEevMek4rhYNIbT2fneyEpEj5zckyBJcMdHv3g9r4oKJd24VbA6vwFF14ZD2T4zWYQde5nTj49nkRFZ2g0AyjZXMLaDzIZ~httWZ0-7~6a1k2N9hEmTbc9NG3GxMSGM6gtccSGxil8mliMGhSaZkQDp1TcyGojKSIm~lNrN~r-y0k3TSeaZ77Y4lOlpWuIM-Nw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603140871&Signature=WBlOto~2V6qRtTExzxjYVyoc7KeYA1F8oYEyigrpXV4HGb0MvTqtyPgL3Wl2DP9Xng4NuHvEuWdicLzFMJkCo9fZLzOaPpZebl4Yc3~wwdSujT7b6tOz5xokyFB0fAFjj~eGFXY-2ZDe64uOMde-qmiVcZxq1hDRHG-IhcRjVJ8BhdCo3euIYLadRzjWMTMaYgHhbatb7mEtZQvpYwBmv-u0kimrprBCuzG9-4UXMXyRkVCpVz-5DzgCaIBNXi-DiAHLrr2qEk6dodqj4jjj5~PtNrKTKnbGjqmvUZzkqeNpoEGrmIP47puY8dG6dCiB4qKZZXFZLo2ydmrdh6Jn4Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603140871&Signature=g4xRJgBHPA8oKI5xP7NdNDsBxke0g5DKlIieli~v0-DfOwx0hekWiKJSDP9U7mz1wM9CQdXz55KFFL6vAymHpbZT3py2-Dhrr7HyQIoOP4zSEZLN7Mwhhsh3KDpALaEKo4mwVZm~IGE3FM9q6WxNFtTCaXH7qfzgSiZwjv9vMdfNapxsa8Zr~j7ITzB9gJLxrYkFeKHMUPAQTTMaIU3RXDWukDyd1S04f9~~s-OyLCkAGcArcwGkGgC3npeINgS9HGNE6O1SFZ1v~j2RBF5YnDT69C5gSUazSMf5txiWoZbB2~lbICfbVRPAnV0aYSltSgMFM98TnnekrgdFSxdIhg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603140871&Signature=Ab6AYucX5ZsCYxMaS~uBhX5VepCiHcMpBjLa3gicv9MsY6UALpU1Q~j2kyJVI4nnBT30KW8R7aNGC0sSH3lqOWeqdo1mZgEqslGeTh4Ny5RTpqE1qK-ySO5am3xkC40B9h96TFgp7DV5QFNtNUjumZad7eAvmY0kZ0ymI3kSMU3KJCCt~hdwf7cpGQaiQpTu3e9C8ObUKgcOx6hVYMoYrilKFkeEzg4AKmkGzyWKNOfPu7AK2-kZYFlJFh~gmvD-UY6vXUeJXNdDwCgvTwuePWs4FPA3B2adcjTrjrV0rVL8WU57ZABANa6qVNR6Ka4egkAHvQXtJ5NxHvylf7s3tA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603140871&Signature=m0GxnhgepFOlaFTiQm-d8H41ppm~GEV4e5IlTGcqZNg7O9dN2cs5Uhl8ViZXYfCTgfY5XxCXqlnlLvzRLGSTwD767RmOiQQ6fApk2K8~8p2BzWGUHX2TvOU3fb~zv8oV2pgN7zFg4rHW5wHwVApLbInbXXAoOvJQ5SaF377iqe0K8YjwcprRKuKTeSzbo0xpBqQ0EACq7DIzaL~n27PElkZhatAPZcwuAG7ztsaMNms9hlEZU8Xk0YQDW2-QFx~mcKpQju2A66l8cHIUWudEDA4ZKscfYRtwmLKiANRkeimwL61pR2T8Xi1rXfrhfC~PZrWK6zfvI6Cd84mtpIqsxQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603140871&Signature=iX~9GlDmYHqLPA2ZjYWgS5r1WFKquwqFhG2dctICutfgNZYo-DMXqgJz8pUIIttB4S1yachv~uJp5tew9i8bvHEZbbcSVx-N-2d7rJFiZZrhPwjPSpfvJQWTsdcswODzfRW1bWWPKxUJsiJC5aw2XlJvT2oYMlQSS6PNWss-hjdxVkD8AOe12aER2~G1UGnz3tIXHi3lh5X9eDdrkEuX-jedJ1tnjcJx0zrhoFmUWIyMj~K6NUVcMCCOTs5pKdIVbwzKMr~pWxbfVMFDDjzK7CltIitp7YEARbeNI1UX2Yfln5WyF43GzQ3Vj8Q7kYOwStqLNTgOoyj7Do51bXovHw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603140871&Signature=eTapZ0B3raH-yNOtMlfGsLzPh72d-QmcOtlN26yribp~36urbHZZJ7r2JoYirkDZgRkS0fOZDzt-gsv-XiGjmrbPvb5dQUZi0ZVHirwob5DLKwRbePkl4TmT9LivJ7wUgc-OgcS~uH1~x~ElxMVHUmbAhuisBHV~b0DCelrNxUTL-jxSVhrbm5~aT4txkpt~R~SMhFixY2eeniWAIJnNCOJICzzNzYXHQpMSpkcbB4TygjPI18aTntYcHnORARGhNri5zzZTcZdOI6P8OCZqsp7Hj9VurlDzUHpPDlOH2WicpZhffHC8Ws2bcIlALw4gArEPKQeTavGVNmqwYsIl7A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603140871&Signature=XNVP-0FzXMiSgkD-xbCS458STYiUv7hoytQ5MrqKn3uMc8qtUD1MJrB84Oa6D4Nbh-kpA~ICwEdUqkzhjH19EcchI2iJn6wK6civ7-imb6Iw9y2AFwdtJRy0PT3IgXzP2PQ56l9z9RWiVY~0C17YNucY3Rq-oPF16z4y7Fw8aqQYbjtYBrVF4Zed1L4qdHuGOxB6-EdMGBRZxXMhdAzpGIaWGu7lr4BamBK7yAUu~NGPt~yevFgc-3icw4KuAmdyz-sjdqVbCrmfNI7RWLQNF1jfHyWT-Sx5Bb5Md1JBTi3PBlh01t2JETsaQUKNvcLNKl5Pqu5yVCLuWPiFY4XcZQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603140871&Signature=c5AAEoWV8IjzsutXOezsFbJ-S5W0ThGrxyEfTgTpHWjddKsdAuGLaW0DdDJn6XiH7A3JC57I1fspQPD5fWTtN4K8P6RqI6d~UO6PB1NkgRhvZd0sRfDLxqnrjjD5h21F2yr4nbJED0LmGlb4jmGgXQXG7SO9K6yXg3KwhK3QKrUbFmGx~rQCXS0ZHCVP-OMUVzg4cNtSWVhOXcsySEdNfY6CNE5iA5RCoxA4e30G3Akmuxq4XB8TFiyQKZOL2IGjfFS6kcc3wDF5~XJTu5CEsOEpNzt4GPJw2bpCSq47cof0dmwMJi7gkmnCW71tHGvI5KZjmO04rHu28GWGG13EFw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603140871&Signature=pQlI5VpSBO8fH942VFmlV2aViGfagVsMbwhwubroc0BAgwN58GriNwohT8hngjdkUhAeV8zjzoJRkRJczw7ojHwAKUcbCZFQl3i3aGs4D5KUeWZ5QBcJEjwPOtMr6ysl7~B8bpSxzAJjl4DSI5xBDNvMn0up~zdcA~F2ffS7rEXVutgArvE~Xb0KXDEzth~JVRTllz6ZPKQ-rulanIzR7csLyKLVRfoxNA5dEgJQs0~0Tj6dV~w6KFYRJi7Mqh7PtQPXxx3~8PhEyBZb9v~ZcC97~Zm1BueRfYL620xZy3Pa00BtFXdMhC54knVUxuGsLDzXon70neOWMGr~j4ZROQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603140871&Signature=LlDb9sIdrGd7daIq-Afi9Wu6FkC0ciIBTuHAA13rWlXjM9B7J391~i1bjrQP1Jr4kxPJ7t~6XBRKUqVjJogSLfX50DE2IAspp1FWoqHx8UuP7hq692EhDNHOX6oCCAGP06BCEbZVXKm5RPMxTyq-JYxJTVamICVeVJ590hVS5D69jZlz8DZEReshr8NoXtoH3bzPUo2bvU2pXCr6bKpj8SklF1S0mWxOf8jqwzf8FP5K2rgSjdeKKu1LUQz8iQS7GVmPfzxCEFcd7BCippsHqn6a9uNEt5C3x2tpLo8itXdPgAnABXxnS6VOzgY2mK6uzfBD29jORcDNpGb1SRhNLg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603140871&Signature=E5EV0im0sR-DBKVDzdEO629jqT4cT6Ko77vSKzDWzmyVPyBAatNAqRvB0e27f7ubEJh0CL5KoZ7Wcfie4P1~b7mTOYw1sc1zxX5IUQBDPokloKAgN6FdLNYNwFsezZTl42-biPDSkxhmn1qxmuxjktn5JPIAPKkJld78lpxzmrZYpLDWD~uEFWroyEIy~94z07t4ViK3WCQyAU4TjYXTv5hBfMGNd1hXzIpnFWD8OaDj-SVWsxX3U0B-9y4DFkExMqCodTbVMSPbXUhRYWaWOrBdfvMH~Rvmag4L0QiZyx-XoI~sz7oPpWL9eJm5H19fW1nmTQcSnpqy7PM2ZWFXWA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603140871&Signature=TRWC1BemjODnhzQb~Fp3FVzqQ6GRbHJR9wanmsF6nDpxh8uppRqCymCXo~hLOvmYFT2nrQ1vCwXhW7s5Ox9NkOQ3fLPihW8QG70VjZ0s17mM~Hi86nG7Hl58ipWzEL3PJt6KO0uNin5J1Ex-uJ8V4PTBDe1qe-Aw3EXcHW46x5GY3XAt~XSYuD~uiSoAUnqkdnIPGPYjwdJrqKWWqJdlCK4Xm2khh8HpYCGwYyzq4QqFtF6tvtx~eb~5so1u5zj1zig89~GXhHGtrFczJa~hkBytt74iawdm-zJXv8bnOTl-Iu7FJK9u0E6H88b8t~faOzih8~jcGJNDCPQlIO3gFQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603140871&Signature=Kv4Rq8lDVSTeGUGJeVq3Iu-wiHEXJwSkcSq34~MS5s7nuepDNUqJjXxiZJ7CXRnIixFTA~xTfF5c2wlDtR5l-XKT~QcXwYHvremEa8YwDxQ5DeXIVwid~EOsvO42mfR2Nb~Zwt0BDO2AMi4VFA2VIsb3bPF9-4QOe9uqD4TogZNcchy3erW-EQdkOcV7TMSrEk~uU1VaxsTD0yn0AhlYj5rNk5EgZnk~Su0Ol7aIXQfeL4EYoFrDhwMZnHsrduECZ4rP4fKJzzfeoZKTTKbdrlR0NyGdq-bpmelk5Q3uo-Nj5Qm5rZbacKA34iuFU6Rv-RHk2PT1EUQAAR2VjeFtMQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603140871&Signature=RrVXzbmmOtyUQ-QiSlhKBUoa7tAOjGPUfVwqiQh0xNJ-LqsBqCUSKYWoTYw2D1OLWz7Dr7d2ATQnW~KGw3daCUvbC7uBs2o~-DGnCJU9nHiqdnIjCyaXqV6dZu2E6yHFjyCBaty-eAIR~KP7ZtBk1KTy~HBrg17ijg4tNgUdGm4XCjMi8uaq~VE-jZDTr103JUdTrRz9iYP6cLTgaNZmukrXBl1obIduu3bR6tXopLBmNj6UdVpABZVDw7A5KSMnqpiMxsuG7hcQpV5p0ZQrjaQBAhZ2t2reg7LF-KIizQdpYfZuB5Y132rr~jT5al2pV6t9BJkwu8l-JvJ37R3UGg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                          To print, download or send your purchase order, we
                          have to save it first.
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
                              id="recaptcha_token_5e3162ca2e64bf3152e1"
                            />
                          </div>
                          <div className="text-center">
                            <input
                              type="submit"
                              name="commit"
                              defaultValue="Continue To Your Purchase Order"
                              className="btn btn-primary btn-lg"
                              data-disable-with="Continue To Your Purchase Order"
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
                              defaultValue="ph86gHgOqf8saG7m/IdHOPBALeg4xoh+BysHKDxcmQYKCejCy7LpVD9H1ALhhorU4Q+Sd8JnoXC+gAySbL9D/Q=="
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
                              defaultValue="F9e8Y1NgGKgYZTR9OQpqyB9Gre+Dcic4uY2g4R5GJDYNvPfWkfEndDMM1/rSoXHuw5a7KBVJYlmqzTHfd9cQ4A=="
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
                              defaultValue="1FL6WnzOnOARCLUA10Rud7RM58/vOjpzjQmUYFWJUB076ALyowwkK/EqD2AC7aHRwSNhjFO556b5dUpCeZxutA=="
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
                              defaultValue="CDrQoH6ldPKVL8AllDiADIg/3if2A+YTubYNmxXVTOnLF6jeMO/fPE47ZlC541oSQtInPuPW5y5JKOcif5UGZw=="
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
                    Save Purchase Order, Print or Send via Email
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
                      alt="Purchase Order Template En Neat "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Neat "
                      src="https://templates.invoicehome.com/purchase-order-template-en-neat-750px.png"
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
                      alt="Purchase Order Template En Classic White "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Classic White "
                      src="https://templates.invoicehome.com/purchase-order-template-en-classic-white-750px.png"
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
                      alt="Purchase Order Template En Band Blue "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Band Blue "
                      src="https://templates.invoicehome.com/purchase-order-template-en-band-blue-750px.png"
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
                      alt="Purchase Order Template En Military Orange "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Military Orange "
                      src="https://templates.invoicehome.com/purchase-order-template-en-military-orange-750px.png"
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
                      alt="Purchase Order Template En Us Flag "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Us Flag "
                      src="https://templates.invoicehome.com/purchase-order-template-en-us-flag-750px.png"
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
                      alt="Purchase Order Template En Modern Red "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Modern Red "
                      src="https://templates.invoicehome.com/purchase-order-template-en-modern-red-750px.png"
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
                      alt="Purchase Order Template En Cool Waves "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Cool Waves "
                      src="https://templates.invoicehome.com/purchase-order-template-en-cool-waves-750px.png"
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
                      alt="Purchase Order Template En Dexter "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Dexter "
                      src="https://templates.invoicehome.com/purchase-order-template-en-dexter-750px.png"
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
                      alt="Purchase Order Template En Mono Black "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Mono Black "
                      src="https://templates.invoicehome.com/purchase-order-template-en-mono-black-750px.png"
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
                      alt="Purchase Order Template En Oldie "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Oldie "
                      src="https://templates.invoicehome.com/purchase-order-template-en-oldie-750px.png"
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
                      alt="Purchase Order Template En Classic Blue "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Classic Blue "
                      src="https://templates.invoicehome.com/purchase-order-template-en-classic-blue-750px.png"
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
                      alt="Purchase Order Template En Connect Rbw "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Purchase Order Template En Connect Rbw "
                      src="https://templates.invoicehome.com/purchase-order-template-en-connect-rbw-750px.png"
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

export default PurchaseOrder;
