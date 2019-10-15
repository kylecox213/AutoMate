import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Home
        </a>
      <a className="navbar-brand" href="/app">
        App
      </a>
      <a className="navbar-brand" href="/app/search">
        Search
      </a>
      <a className="navbar-brand" href="/app/browse">
        Browse
      </a>
      <a className="navbar-brand" href="/app/customer">
        Customer
      </a>
      <a className="navbar-brand" href="/app/vehicle">
        Vehicle
      </a>
      <a className="navbar-brand" href="/app/transaction">
        Transaction
      </a>
      <a className="navbar-brand" href="/app/report">
        Report
      </a>
    </nav>
  );
}

export default Nav;
