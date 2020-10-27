import React, { Component } from "react";
import { styled } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const MyButton = styled(Button)({
  background:
    "linear-gradient( -45deg,  rgba(143, 172, 230, 1) 0%,  rgba(36, 82, 181, 1) 100%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 30,

  padding: "0 10px",
  margin: 2,
});

class Categories extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div
          className="medium text-center switch-to "
          style={{ margin: "15px 0 30px 0" }}
        >
          <div className="col-md-3">
            <span
              className="fa-stack fa-lg"
              style={{
                position: "relative",
                top: "-3px",
                color: "#FF9900",
                cursor: "default",
                margin: "0 3px",
              }}
            >
              <i className="fa fa-circle fa-stack-2x" />
              <i
                className="fa fa-pencil fa-stack-1x fa-inverse"
                style={{ position: "relative", left: "1px" }}
              />
            </span>
            <span id="switch" style={{ color: "#CC6633" }}>
              Switch to:
            </span>
            &nbsp;&nbsp;
          </div>
          <div className="col-md-9">
            <div className="row">
              <span id="switch-to-invoice">
                <Link to={"/invoice"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Invoice
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-tax-invoice">
                <Link to={"/tax-invoice"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Tax Invoice
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-proforma-invoice">
                <Link to={"/performa-invoice"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Proforma Invoice
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-receipt">
                <Link to={"/receipt"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Receipt
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-sales-receipt">
                <Link to={"/sales-receipt"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Sales Receipt
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-cash-receipt">
                <Link to={"/cash-receipt"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Cash Receipt
                  </MyButton>
                </Link>
              </span>
              {/* <br /> */}

              <span id="switch-to-quote">
                <Link to={"/qoute"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Quote
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-estimate">
                <Link to={"/estimate"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Estimate
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-credit-memo">
                <Link to={"/credit-memo"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Credit Memo
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-credit-note">
                <Link to={"/credit-note"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Credit Note
                  </MyButton>
                </Link>
              </span>
              <span id="switch-to-purchase-order">
                <Link to={"/purchase-order"}>
                  <MyButton
                  // style={{ fontSize: 15 }}
                  // type="button"
                  // //   class="btn btn-primary"
                  // className="btn btn-primary invoiceButton"
                  >
                    Purchase Order
                  </MyButton>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
