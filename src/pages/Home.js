import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateInvoice from "./CreateInvoice";

function Home() {
  return (
    <div style={{ margin: 100 }}>
      <Link className="nav-link" to={"/create-invoice"}>
        <button type="button" className="btn btn-primary">
          Create Invoice
        </button>
      </Link>
    </div>
  );
}

export default Home;
