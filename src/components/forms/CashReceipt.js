import React, { Component } from "react";
import Categories from "../invoice/Categories";
class CashReceipt extends Component {
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
                  New Cash Receipt
                </h1>
              </div>
              <Categories />
              <ul
                className="nav nav-tabs nav-tabs-wiki medium"
                style={{ borderBottom: 0 }}
              >
                <li className="active-invoice-tab-for-guest">
                  <a id="change-invoice-type-to-basic" className="acts-as-link">
                    Cash Receipt
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
                    defaultValue="uZpd9yICBLy97zE3u4u69bA57Z2UZfJWpynHAKZNLh+O9oJYTGG6JM2r+tDDiNSEXrHLNbjBjdc5OMgCHIA1Hw=="
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
                        &nbsp;&nbsp;Received By
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
                        &nbsp;&nbsp;Received From
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
                        &nbsp;No.
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
                      <label htmlFor="invoice_date_issued">Date</label>
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
                      &nbsp;&nbsp;<b>For</b>
                    </div>
                    <div className="col-xs-2 form-group text-left">
                      <b>Amount</b>
                    </div>
                    <div className="col-xs-3 form-group">
                      <b>Payment Method</b>
                    </div>
                    <div className="col-xs-1 form-group" />
                  </div>
                  <div className="row">
                    <div id="items">
                      <input
                        type="hidden"
                        name="invoice[items_attributes][0][id]"
                        id="invoice_items_attributes_0_id"
                        defaultValue={73617505}
                      />
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
                    </div>
                    <div
                      id="payment_method"
                      className="col-xs-3 col-md-3 form-group"
                      style={{ position: "relative" }}
                    >
                      <select
                        className="form-control"
                        name="invoice[payment_method]"
                        id="invoice_payment_method"
                      >
                        <option value="CASH">Cash</option>
                        <option value="CHECK">Check</option>
                        <option value="MONEY_ORDER">Money Order</option>
                        <option value="CREDIT_CARD">Credit Card</option>
                        <option selected="selected" value>
                          Other
                        </option>
                      </select>
                    </div>
                  </div>
                  <div id="total">
                    <div className="row">
                      <div className="col-xs-5">&nbsp;</div>
                      <div className="col-xs-3">
                        <h2 className="bold" style={{ paddingTop: "10px" }}>
                          AMOUNT{" "}
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
                    <div className="col-xs-8 col-md-8 form-group"></div>
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/960/thumb_centered/Logo_Caffee_Yellow_Handrawn.png?timestamp=1436617985&Expires=1603138086&Signature=D-5cblYhJrNicrsCY49lkFJK1J5yGZcq4CPxvQlAhEol-YB~y3G6HSx3o-uU4fAlqOr3tPIpPYl8Aw7O9jr-R85MIeNr6dKiYPyL9cLIduSbKQQXIkTYqcpFhyE9J~2hXqN7pvc4LErDb4sbHk4oyTe0yoj8NHKgOZBEcrDWo4CxA9zYmXYrX2mIDXy6GbLCBKu2oXUKQSTGaQ9uyefBAEP0T9DRDbQzxie0h3VGhIbQW4fNxx7DKZvCeOR0mFVo~NoNy-3t2NplsgqJcucQuQY3kn0P-UMJTX6j0iWkH3fw-hGa8eZWyO2H-tHgbLIOmAd1uuUNNzR4Dsg2ETfXww__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/844/thumb_centered/Logo_handrawn_Gardener_green.png?timestamp=1436617980&Expires=1603138086&Signature=PnGb0JH0Gg1tgNa4TR8eVvQKylZ-vAVC18Oj1qpuqrxfvW~xjZqH~3qtYbpCQwUOeXDL418dCQclTFiob1I8JVV6~vnznt0PIQLL3LMpjNNkZODa2o~nkq3uhDyyih58mefS6MpKp7c6RFzHHec0I6jb41TkdPnQ9uXygKnfrsBIFJ6qQi2d1uOm8cwgMEoj1LyS2MtauIjDhPwNsRPLYcNyETi38A3g0fr6tRm5WMgroMMLuhLah2~BwvdYCVh3NpWm3rg6jmYxMjDrmydrgxybHGcPTKT~BwN5U0-qM2fv9ZgP8RP1bwdJB9xuChLJh8yoCk-ISKVPI~76NJQgdQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/918/thumb_centered/Logo_handrawn_Healthmedical_red.png?timestamp=1436617954&Expires=1603138086&Signature=KF7ti1QCOWh7MXAltiNG8rq-KQQcihkpIZIysTrSlJxrdNNZfzwVu9gbfMCqH6t0vR5k0SGoofEhjGDaXFgSdvb4SzwxMdOP66AT2REEQFtdLyiKcFK-CjstrWzXuaCBnoLkzRxP~VVXouRUnQdQ790uhbXkJcw4CAjOPDNhdX3jcYCy5P-msR0x74AoKdnFldlryTM2hEmxfET26-IoWcq4WYkeqJXVkZaFNm-1IEj2OuvGusAkvHaERHxfcFjAFWgOIdTZoIiSPkc8nXzQn96FkSUShqKzC9Mf3m9ZrBpyz9N5sEkPFv~UxLNTn9rPId-fG6AFuYRY14CTBQxwyA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/176/thumb_centered/Logo_HairBeauty_red.png?timestamp=1436617925&Expires=1603138086&Signature=MIdiJbcOJ4FtI9rLW0BuVJnYKpmrqPVX37oEM2HOkaFKkr40uaKDxcrQQel5GvEUuFL6pI494CF1if6eiYlA1aBBOGXb07YfE3WCFFYRQhlEYOxb1HWYN0-Weesce0C0wpAJWbTqxRdtGKIlDz6zL9PCVKfI8T826wFQ-N5RbJpeU4kQhlxhPIxug8eo-TDbOLwHwsweZD5CcVbMpUEvDdKaCyeBKbappr4KX3fdFQXDR~RFBmCC9PhbNNG5oISRo7xbiwrIwtT7HZTexYJ7RLCJgymEQXEV2CgZV2luZcvTZLdpess31bGzUnp~gaPEJ2Xlm1RwIELaaKKxQtxoXA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/876/thumb_centered/Logo_handrawn_Repair-man_light-blue.png?timestamp=1400510778&Expires=1603138086&Signature=qXp5VoL-NElyu06u9U1nMdiqet-GCBtZAFjffjdncY1Ycf96Q-d6uHIM8IoF7TvYO730EP0rRaQQgj-1O-jmHbcJo1s8i7xoiyaJatT5dqSO3Q1CHHChmrsHWVKGhYfCshjB2nA00JdP5YYt~kZosByKwFYwZ3VIZeB-8ulLl9xUsmbldnKLzLDgckif-fMQxNmVvzpJsc2-01VRf3ScJ6ghCzeNWLWef8R25LIV3kOF0XW21GPXZdGFrnDjiiQBX3T-ttBVW6ZtYnSxYxesnRjhBnpiJ2QSKwasKkXrUZ5mAevFzh2Rf76ghVjJe9SRaltZ6s8uJ4wrZ1FjxSxyFg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/001/155/thumb_centered/Logo_Analyst_Green.png?timestamp=1400510778&Expires=1603138086&Signature=amUO3eP7rv7yF6qmziy1w3N9RZKoiUyjmF3ST9bZCyjXVQKrDwpSp3c227fokwP3dKaEPf3HdVPzD1mjQ70gXI3uTx7sbRz3w3cR5BmRsJx8CKj3d1uBwfzloL1XQbFq3JQLygFESk-mGPc1LCR8gaUchDhVvTZNI--8rvRahCL8RRD~1SZunsJnvayI0WQsypKxuBRn3DaZqrzYmTEhiF0XMlf4qhH8VHMWwjpy2eDNc~dHdIyiM2SDVlzHqH9y5Woqjt-3feeM3yqXLy5ZZCAExWkchFGEy6wpE~M4AeOSgadKxkPIFBLluAd1KpfyeSLqoBAejHQTZwhNxwXLmw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/873/thumb_centered/Logo_handrawn_Legal_light-blue.png?timestamp=1400143645&Expires=1603138086&Signature=pwyRkYR6T9ymRTSTAVMK45K~g-wVQLgSMdUIKOOOuwsbQIBTIqeB-rwIba~0YybzA2T2MRgdJl4J0vohZHA-sd1m7Ov~oQVIaBspl~KFr6Ym5ZOHNSUoT29bn7xHUBwZmpdrV~INcLUBKJZTQNkFvZNROlJdEjW~8AuAaEbizR0QnxxT9UIf2ja~JSKOhva1worYhiBzYqrn2lHF0mKxQotNcXC3w2uZcrbYb2W4fEjg6Rudh~frC7hyBx3MS0jSNvYSI9rTZIlvMfQwE15spVmTW0SYG9wOopIBcfR1MqLWP6RZaybrY5msLHgO1Fnt0onkHYPYVaCeA~teBAi2rw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/907/thumb_centered/Logo_handrawn_Butcher_red.png?timestamp=1400143641&Expires=1603138086&Signature=pqMckjyOjJqS7jkZG8uSfn3s8ECsuaawgGyCJhM-ZurSD~GArRGtHTemTov8zgklvG8EG5XA7E620LvN5kiLRbCWLM1RMzOzhniuZxh1AcPcUIKPicQTskdfy8IS4HCvC1~~0P4QRmoFgYPUluHqS0f5tT7rcec3M05JhrknX4MJwfiwV5T3yxwlxy-CY3HrYrEcb7OfDAp433Exoa-nvMarZVjQvEfmYNr6bUGjW~dcwENMbnomRP2Vr1VM7NTjq6kSELmzQ4yChClE4WxzLr5-KrMld8JovksvbuvKzB8qKws7RRPnxJxE~0qhuWQcMYBy3vCa8HyO0gYceQeZ8A__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/000/144/thumb_centered/Logo_HandymanRepairs.png?timestamp=1400143637&Expires=1603138086&Signature=LIGNTm-v5HsLHpb2btpM14vv2TCWNmVm-9MOCWgX1J2WWCU0kyk9SHI9W1jdLfHwYSjiMXGochQr3LLS3ZOExgx9GmRWZTslB13j6gMRRGmv3yGdw-2wxSdH8YveDt53br5y8jSbubgsz8OXxOGrlGZLrtFwnQ5OFkYLT-Udj2-DbRbLNgbUtZ8Z3CRRp2aFWGbaCybUfmFFXGETXkOGNrk~1SlhT9Hz1hE2M6eCS8RvxjtThzqhYftdqI4jj6W5uUV7EHN0BEjd54gUu0FE1p4G8RU12MWoZ-w6gT00s4yY6xs79JqNUYO3qLGb0ET3F3goltoWJUwJcKNeeVMOUQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/275/thumb_centered/accountant.png?timestamp=1450354638&Expires=1603138086&Signature=jAVs-U4i0BJIiQaYJ9Mapino1jH-PEQ8s1b1O5K3ZKbwwADz-KTM7cD1jXQ2V225NY-7YomsXq5S1mgxJ7wE3S3EwdccR1AhNcCYDQvwim867YtLlTjYHmnPR3auljJPd9babqLWHZz4XlZDV~FJ7SDhy0RQsnHYWQJK7rqU6ErZi3QG5Y2-TvKHZXhk~KItXqwrkGWMeK0kwRYLHAPMAlUgYErk97ffWeTLVOIRxGxTCFekQC9vMALJfbXdJG1MFm93G2VkKvWxISYD9kzIxICK7zMrNajVnoc2krn0OIMm1TYXxfJGYpi8fPr0-RUjNwrlw2GmB0ivOLMinV1VsA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/274/thumb_centered/actor.png?timestamp=1450354656&Expires=1603138086&Signature=l~FTTrxDra5N3zPMVuSu8IZMfma5kt7hud1WIf9iqzZWrjUoo~nmQ6VUIatsXsGPK48S9fsd21NQ-VCakU0t0sj6V5mOg~MDVP39dedgSt-vMSKR2uiyWPLwdHgRqTckyCjRimMZ-~L5JXUESzVawtMRzSICDXQiUrdA1PKZyelayz7Qz8mZ9t-TAqv9k41-dpXiyFpdLNFfH3A~UUeys0NpoB-bLRexdaY1jkGSQWVKkSGpJ0hcpPFcYuOJD88RNzBCMKIsK4tY6VsMSP7G1quGbILL8dlKFPGFP4yXO7CXNfbvC9c4VLuG8R9t7-l~zTdiPONvlBwjuRTrTxazuw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/273/thumb_centered/agent.png?timestamp=1450354678&Expires=1603138086&Signature=LOAmSbFpt8AnHkhDmvo6jHaYQ9YuccW-0BrD8yOclNpZS67FK5o1gvE~mFcQv4nsIWrxKbHyAbTt7ZSx4u~IZPxP2YyfGuTHwtUozQP7BhmUV2oRyCdY9-k2kf-SyIZiEaZlq0ka~nHQE81DF1MPsLUBt795KbgASWh2wbFz3eLqfwLQlT5hINFICSoFwLmmT5RL3zzT~9eF6fmmC5zvgQ9ckIUFu71MMxvNJ7NMPTZ2nCRQ7qcwysXgYJMHxJI3gzBU64ySJLWuVopwnBhRaEtI4LBrnilMwvEu94z6sKdUt8GhT2zZXeyGZU8tn6FGI3gH933vOaWB7g82yh7Wfw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/272/thumb_centered/analyst.png?timestamp=1450354697&Expires=1603138086&Signature=Dhv-A9bHn0N7jUOaw6Jyrxn6V2RhBurXjx5~sqLtneBn5ku9amdf7mMusoLcUIhQro-jF3T6OX-IiXx0bJ70M~u4YhdqNRsg-9sdHnt6NahzHU3uUwMXJzNANvHWhQkxQZZy3ET~YRY5arExEhicZPvTv8F8jNkqRE9IGltNu2tvweGR52eWTErLjg0IjKE-ik0llxJVAe5uGwTiPybGES97zGc6hEW0SvP~oUattFoKVdzU5vnjLVORuKSkzYWLOrk-isDa~cGtk1imyNXZS2t-sD~fPN6UkRsmrAz6ey6Quao6o~DaNJaqx~Q2Bq~pLIYdCsrWlg1Jk1N2qQB7bg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/271/thumb_centered/architect.png?timestamp=1450354716&Expires=1603138086&Signature=g8ptCdkVUB4QOL~3XT7RFkF-Dz1zjRtvLJv2ohSNJzu78I16BEFWuZtZX5Ryprb3jIUZAEJdb~PpCZwW23F7GGbtiUDeEW9grHh4veNQU7KTUkPj4jnxsingzBvuRIIG-muKqEqWZFWBaEknQJXhz5o6J5nZYYb2E8yRLF4AOs-SfVe3cfYsGNSwBxcQ61sJanyjsXipDMH1NIJVnjrVCRWuPgEy3t2ytcvkhJxWBCgMIzUJiknQzbku973dySpyhxWcle1-OjE6UdIr3YEW5cfoZ9FUIs8V0Ux7HzcLbtZ9spSXGCPvCel54qU3CNrM8QPQKfh61ZeJLVd6LJaq7w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/270/thumb_centered/babysitting.png?timestamp=1450354733&Expires=1603138086&Signature=pMh3VtASiMaJE58v~K7gHe~tr2tYiP5Ld37jt0Jy-YWtZmBTmrVaxLi1YCbysPxqSElIOa8HULy1IvFX-TMVBgU~bkRCWYGSmo9M4SMmuyblfRPK8Li3Q1PMAA2DP-XzWoKsXd7MoTTo0pCf8IDQXPVmKrzfC8-pqPZYuspK0FeX5xhdJQ3UgRJsz0rBKbe8PNjgU~j8TrL~wLDyZnhl3Ill8WntFE633DJOFg~AoBIuU6Utb-GPMwS7V3FkXI9NgFRsu8BTuepD~dK4I3upEj1jnHev1CoGgY6j~wxUF9HPRADc0zEe39wg6qsc1W5QT~vTzLNmoqdvobL~9Bms4w__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/269/thumb_centered/babysitting-2.png?timestamp=1450354751&Expires=1603138086&Signature=fuPpvW5vYmy-jdmnN4OoXaWg90fXPYAsYtikZF6J2WPdojXsh6TTQDrv5OM510OrpN979v2FFmK2zWj3bScimQOC9B6wZKPhhaoASC8tOIWGX2Dazv0QFb3SSFn9YBXKJtPLkEDrU2m1CejfJsyPcpi2hQ0Mg3y6FVa7sONya6-0NsaAKBpLtokAoqO-thgfwrLph1PfU28eFuPZHd8RuS68PjgMAhzaE52jZ3v-MqIIe1EltV-wPPXxg5eDK2x8ZyeOH2NQwCqjylRiWit46kQLGp~ZvYwKRqQUkx9qODD2r~lB4FkmHq6GXinL8vmVyLABl-Lm6~K9A9Uyxng3JQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/268/thumb_centered/baker.png?timestamp=1450354765&Expires=1603138086&Signature=OE1MkqKDMJ1RYQE3Aaj1Zbmd-jeuC-VTxfgnrL-Hlxmq2AiNZa9PcRLa13WZMeTImQ3qV7aUZG~4b6dHAb6GRcgoLNccl6vJ7FQme6Y-ImwfKF9bseeZ3qoACBJgyxqukcDy6Qnm4oDz6MC0UoUH~p-9lrRdyIVkpzaljGowgMUzut94UeHydHPZiguSUVv0oIJg7jL8nT74ycCMbi8kN1k~cM5qstYcATd88oOH0M3bhVleQoV29Dge0zFehKDF41uriU1QtfbHS~x3wGUGb0qQXPArieZB33ntJ6IKo~TvrjkPyVo4~NVh0mPNMUi0wFdDye9LgIaoZjhLuCMUgA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/025/209/thumb_centered/baker-2.png?timestamp=1450355655&Expires=1603138086&Signature=TFTcCfhV0LBvqUXghk7wxFiqSCDyooQ-xEGsjaiDeww3Nihj6RPCOElJ1gwb~Df7yYLwWk~QitLRnSV8mjIrNDHH~R~2~iQWYbwuFm-ymELJYVwUlroqdSHBEDre51ohsPPBIMLF5MyJfu0Im8Spz8b7ckKxmjkDD6GmJndhDJf5cClMC~KfbKNU2o-xBxowzd~q0e3YwmmS6-P5Ow-xnge2KrwRbLFx5PoPfz1iWpwuzLOijTAnRNuhR~uUoFPVYSh9iWcgdj4WuJuGI4UKiMPIZH1~TjZxMhwSmqsDZaW5NxtneorOQD7Es7JdzCQ--O25c~wGSN5RTOnvqbSRzQ__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/004/thumb_centered/accountant.png?timestamp=1436617980&Expires=1603138086&Signature=GUNyHeHxlx03jOk7SwG-Ctiup1tmjT-lICPwKYGolr0MK4MN3Vevhx66Zw6xwgV-~V4KBKauUuDIF7YcrNPnjVEWrwcE2Fljj46t0wTlVbWjj4M-2BDKkf0wZE0uibPIze4znfI1F79u~o-lan~FZFHoQrBJ7gZPKg6w~Mj7P5KW8-lQ-IWeTPAYfY-SnMovX1gHeSXzfxHxnrFsf0Kl~vR~38XZwFtWLvANS-Sica00ZgZiNI4vD7nk~iibDyR2eEh8KKjCURZtNZRgbRBAXBfqy~gLZQeRkP2yteKNNzr-0Alvnv-DkcWMmmHKeuv-jrxOQnBCrwhQoKyhtssfOg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/059/thumb_centered/accountant_bw.png?timestamp=1443024228&Expires=1603138086&Signature=lmZMU61YQzvmZFAyBIlsvbaclH6dTxxyAKibYdcIQ6j3owQurBFNDLUbsZVUJBMwyHDZaret3h38Ymudot32Vk6RqZ29RrKol2q7ZxB1EdJs4cO~IcdKgRDh~w2jwC53WhXSNGr84i~uoT4ZLJGjKw4QNm2KRjQ3xcsFAXMB2qqJhTmnmDL6BTg0fnVwN1-A2KotmaSwlkkdrjsIlhs02ogiHB8~NHidJNcPnDYY7QHwox0hD3u0Rl35NeqnSij8pj5MXkpHHbrWgsm9tbQiZnmcU4lqEnnmHA0gCfpLLuIquybD7qrAqO5UhlcXE0RNl0LzeQRyMCD2HXhkccHFUg__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/413/thumb_centered/accountant_woman.png?timestamp=1472480304&Expires=1603138086&Signature=GW2OfR7lYoWlA--K2x8J-qtfqeuBiT5Th~5moCyt3BD3nJEmWrkR4t8fQw4GMPTn3COeFst8yy6JdImvL4MPJIFHxL-lSDa11fSUPxFwIWKCAh0tGO5Qz29YuzIINXVSVkU0fJZKUw~nHvK0X3cOB2SJDPDIardTf3KjEqQo09qLTJQaL7sKhgBYdgmGuTJy~jK0c0EGIeOS6vKvGglUiKsjinVHW0X3DaJMuxIh6MF~WvRAstPnmp7USQhUZSu42yyTxc7F0DNOUzRR84R2McoMxSCLHvEsQG1VMKp4SqojmpdH-aXtil0m0nU4OvjD3Vg4re5~l1tceBr3M7ZxZA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/005/thumb_centered/actor.png?timestamp=1436617426&Expires=1603138086&Signature=YJqayRekx5hj0w418oiMLRw~cU-yewgAW2-CbOd-6Vwx0QKdSxMfyG0oTeh-DHbXNntVuWnA14H1fASEyIadphGFFDiNI7v095PmEIHRXiP0dIi6dmA5sLsNAM08HCZ6Bgwp9MQyXyDJjjyTLYi7cC4aXNHYwifj4xbJUGzs6Az5XRdazqxFUkSY~ErhaAfHLU9N4Kyjx7dd1x491Ibyy7qaTJOkbf4Fj64Q3vmyxlNoT2VJOfW2OKzTCYI~jvnNrO3PE2ESHvNIcToCIObdb69TSxLgS0j~RAoxd5~3Af4-urVdGdtT-tNrio0JvlFs-aikVsDABdgOhn9Y2RajXA__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/060/thumb_centered/actor_bw.png?timestamp=1443024232&Expires=1603138086&Signature=oAoDHXnhBZQNZfr6UK4C3WArrH7omPwrepJ8ZGVOjTnZHe3c2CPxX-BJrFOCn0aKaCHJCI99AfsCjwag0XRbUcHWIDuZihzCXae9cZe9UNu6eblxO-yzYgEvsGSYDHcRC4Y6cZ0Ph4MmhGQNiHakLwPUtkhUccBp5QcmvmxVumt4oUMqqcIRZUZdfbgUm7II9muogvPAAU3c1ENf4oAxfoTkCkdbtQyBae38FmXDSfs9viF4rbH7cGxnVaObLjqmBFKgHa2Mn~Zd~KyDyjHToFOuht5pcudl7rhTSAy7FGzAtkDX1ub2dx-pG-1onvcLk8Ax8DYjdIwVobbcEpRskw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/113/414/thumb_centered/actress.png?timestamp=1472480304&Expires=1603138086&Signature=oUfDOjyGnOZKBxkilwl02B0qiK~onuR-Bl2Qbx5jrD8qGIKhM12dki~NHIp0NLOe5~v1FsVG1w6aSKPXpS5wOx-VAFom6XYI3aqGtMAiDl1qaka6DlucVH~uH1dLWN6VEwCsARDOfV3B8GOOtkqwo8jMcG8ctld2suJKPzI3TnILCNMcWT~jblu-8-Vul-fg02eef5WPBKTzk6HFb9oInkabuZrGUaLH3LvgIc1KQ45jzJgbpTXRICo788jTEowOuw~ZPULaTqdD2Jb8SaO9HsP04sjRbazdL-~XDn6MIpwGLRQXbZof-86wdWAPJPpywcBp5fY0dHI07ft2jT3q9Q__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/006/thumb_centered/agent.png?timestamp=1436617426&Expires=1603138086&Signature=F~IFOyeD5vTJKzGYvj-AAfJD~ejSx7OD716EilTIsSGMf8NChnkdWxCc1WkRTLbkZgmY6ucKyoEDTKlZo1DU-vsDzYZP5ujJ~Z-pOeTjTrxk-ZNErNZCd4jc-1jDx5gFTYmxFJ1DAkLRVDL3fMSLXL-rcHAjz0GdtO3g-8uM4NKAyz0OQAELwhlvariLkTKq4T5UuOAtd52NlSEGG33Pgs4BuVbT~~x034PdFyns6Ksdhaknsc4hp11AY9VbNfFRjsijufYOd8gOp4sMCxJ-yKUR8FewfEjuf-rttz3LYD~ce4NBHPm2pNf6v6E3O5g2u32EDp4xvEGsJmL8mWVA3g__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/061/thumb_centered/agent_bw.png?timestamp=1443024233&Expires=1603138086&Signature=ZWH~seh8PsJHV1ChHVxyZT1OnJuD8QiOc11RX0P5t53rdXWFEL1CDC93lcEwmNcdw1EXqqRvrXPD1lHAztC-uaJlMym-ONglDEkYEF-J4hPLkO2SOZySak47KQqLHZzCKFnyOXeyMj-d8tPdclthuadP8sBoXvuBmuh7tacufosIHT6KR6oV2cVNzCAiaNeohBDUzIsC6P-CSaCzjkrRofIB8TfZ~C0H953gLcCjfDNs4lTmwLEvJf8TuIs~Ebk7hogZTxZAe~j1-pegtRuEEJOX1hKGD12znhP0jii8~izb4B7VKXQtEhdmQsT3EvPqgGW5LYOeXhgdIbKbTcVUcw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                                    src="https://d23o3umie6vb7x.cloudfront.net/logos/files/000/008/007/thumb_centered/analyst.png?timestamp=1436617427&Expires=1603138086&Signature=BKLeFVHBUJLxgGMoY8Lo7XJUjnuhSXuP4H642mk0HUHNn5a~ZjxBpAoepDwooyR72hIxpwnHp92viY-s7GUSi~1TWfYC5PyakA3bCY9-3kVWAoSUg8aXWu34NwAfNfRRRec8Ngbqu-jZzNXY3hh6GEKnN3gjEaj3Q4ZplpdmGtdghL2056acM7tCHx5fbfnoJiPnRXVNB-m0G4mBNX4d5yF3gZYOML8LC-rsf3uWTtMxaahb9LkeW5Rhm8xYHzBwyqkXO9enb~hBJR0jZoUoQt3iV2Qn7KOszI4FP6Db4PS6rALcU~lNSfQ2OkYV7Pt5RKbi29-FivM9B5wFD2kNuw__&Key-Pair-Id=APKAJ5JUFZUTW73QIUFQ"
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
                          To print, download or send your cash receipt, we have
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
                              id="recaptcha_token_95543bb91d7fa9c1a08b"
                            />
                          </div>
                          <div className="text-center">
                            <input
                              type="submit"
                              name="commit"
                              defaultValue="Continue To Your Cash Receipt"
                              className="btn btn-primary btn-lg"
                              data-disable-with="Continue To Your Cash Receipt"
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
                              defaultValue="XJ3QMDH0d1kYeYU+hVl0rAlr/l1gSQ8flTkrDvmreI/wiwJygkg38gtWP9qYWLlAGCRBwproJhEskiC0qUiidA=="
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
                              defaultValue="62IHElUoawa5L6aQo9I2suUCm6kjQbXKxox2XgZKR7LxCUynl7lU2pJGRRdIeS2UOdKNbrV68KvVzOdgb9tzZA=="
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
                              defaultValue="/z6QVW56XawHNWggnOxBgPjmsCLnqqN0zDxhSSnao4QQhGj9sbjlZ+cX0kBJRY4mjYk2YVspfqG4QL9rBc+dLQ=="
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
                              defaultValue="tEOXa0n+GV8RNX3lIZM38FlQ+Gewb8ACI130zq6iAqB3bu8VB7Sykcoh25AMSO3uk70BfqW6wT/Twx53xOJILg=="
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
                    Save Cash Receipt, Print or Send via Email
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
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=337"
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
                      alt="Cash Receipt Template En Classic White Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Classic White Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-classic-white-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=338"
                  >
                    <img
                      alt="Cash Receipt Template En Band Blue Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Band Blue Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-band-blue-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=339"
                  >
                    <img
                      alt="Cash Receipt Template En Dexter Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Dexter Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-dexter-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=340"
                  >
                    <img
                      alt="Cash Receipt Template En Classic Blue Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Classic Blue Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-classic-blue-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=341"
                  >
                    <img
                      alt="Cash Receipt Template En Cool Waves Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Cool Waves Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-cool-waves-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=342"
                  >
                    <img
                      alt="Cash Receipt Template En Neat Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Neat Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-neat-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=343"
                  >
                    <img
                      alt="Cash Receipt Template En Military Orange Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Military Orange Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-military-orange-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=344"
                  >
                    <img
                      alt="Cash Receipt Template En Modern Red Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Modern Red Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-modern-red-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=345"
                  >
                    <img
                      alt="Cash Receipt Template En Mono Black Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Mono Black Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-mono-black-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=346"
                  >
                    <img
                      alt="Cash Receipt Template En Oldie Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Oldie Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-oldie-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=348"
                  >
                    <img
                      alt="Cash Receipt Template En Us Flag Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Us Flag Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-us-flag-receipt-750px.png"
                      width={360}
                      height={510}
                    />
                  </a>
                </div>
                <div className="col-xs-2" style={{ padding: "10px" }}>
                  <a
                    data-remote="true"
                    href="/invoices/40820788/change_template_on_new?invoice_template_id=349"
                  >
                    <img
                      alt="Cash Receipt Template En Connect Rbw Receipt "
                      className="shadow-all-around responsive"
                      style={{ padding: 0, verticalAlign: "baseline" }}
                      title="Cash Receipt Template En Connect Rbw Receipt "
                      src="https://templates.invoicehome.com/cash-receipt-template-en-connect-rbw-receipt-750px.png"
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

export default CashReceipt;
