import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./pages/Home";
import CreateInvoice from "./pages/CreateInvoice";
import Header from "./components/Header";
import InvoiceDetails from "./pages/InvoiceDetails";
import MyCustomer from "./components/invoice/MyCustomer";
import MyReports from "./components/invoice/MyReports";
import TaxInvoice from "./components/forms/TaxInvoice";
import PerformaInvoice from "./components/forms/PerformaInvoice";
import Receipt from "./components/forms/Receipt";
import SalesReceipt from "./components/forms/SalesReceipt";
import CashReceipt from "./components/forms/CashReceipt";
import Qoute from "./components/forms/Qoute";
import Estimate from "./components/forms/Estimate";
import CreditMemo from "./components/forms/CreditMemo";
import CreditNote from "./components/forms/CreditNote";
import PurchaseOrder from "./components/forms/PurchaseOrder";
import Invoice from "./components/forms/Invoice";
import HeaderNew from "./components/HeaderNew";
import HomeCategories from "./components/invoice/HomeCategories";
import HomeInvoice from "./components/homeForms/HomeInvoice";
import HomeTaxInvoice from "./components/homeForms/HomeTaxInvoice";
import HomePerformaInvoice from "./components/homeForms/HomePerformaInvoice";
import HomeReceipt from "./components/homeForms/HomeReceipt";
import HomeSaleReceipt from "./components/homeForms/HomeSaleReceipt";
import HomeCashReceipt from "./components/homeForms/HomeCashReceipt";
import HomeQoute from "./components/homeForms/HomeQoute";
import HomeEstimate from "./components/homeForms/HomeEstimate";
import HomeMemo from "./components/homeForms/HomeMemo";
import HomeNote from "./components/homeForms/HomeNote";
import HomePurchase from "./components/homeForms/HomePurchase";
import NameAndEmail from "./components/settings/NameAndEmail";
import LanguageAndRegion from "./components/settings/LanguageAndRegion";
import ChangePassword from "./components/settings/ChangePassowrd";
import EmailReports from "./components/settings/EmailReports";
import LoginForm from "./components/LoginSignUp/LoginForm";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Company Name
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        {/* <Header /> */}
        <div className="topnav">
          <HeaderNew />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/create-invoice" component={CreateInvoice} />
          <Route path="/invoice-details" component={InvoiceDetails} />
          <Route path="/my-customer" component={MyCustomer} />
          <Route path="/my-reports" component={MyReports} />
          <Route path="/tax-invoice" component={TaxInvoice} />
          <Route path="/performa-invoice" component={PerformaInvoice} />
          <Route path="/receipt" component={Receipt} />
          <Route path="/sales-receipt" component={SalesReceipt} />
          <Route path="/cash-receipt" component={CashReceipt} />
          <Route path="/qoute" component={Qoute} />
          <Route path="/estimate" component={Estimate} />
          <Route path="/credit-memo" component={CreditMemo} />
          <Route path="/credit-note" component={CreditNote} />
          <Route path="/purchase-order" component={PurchaseOrder} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/home-categories" component={HomeCategories} />
          <Route path="/home-invoice" component={HomeInvoice} />
          <Route path="/home-tax-invoice" component={HomeTaxInvoice} />
          <Route
            path="/home-performa-invoice"
            component={HomePerformaInvoice}
          />
          <Route path="/home-receipt" component={HomeReceipt} />
          <Route path="/home-sale-receipt" component={HomeSaleReceipt} />
          <Route path="/home-cash-receipt" component={HomeCashReceipt} />
          <Route path="/home-qoute" component={HomeQoute} />
          <Route path="/home-estimate" component={HomeEstimate} />
          <Route path="/home-memo" component={HomeMemo} />
          <Route path="/home-note" component={HomeNote} />
          <Route path="/home-purchase" component={HomePurchase} />
          <Route path="/name-email" component={NameAndEmail} />
          <Route path="/language-region" component={LanguageAndRegion} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/email-reports" component={EmailReports} />
          <Route path="/login-form" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
