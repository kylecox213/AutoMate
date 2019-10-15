import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import Customer from "./pages/Customer";
import Vehicle from "./pages/Vehicle";
import Transaction from "./pages/Transaction";
import Browse from "./pages/Browse";
import Search from "./pages/Search";
import Report from "./pages/Report";
import Nav from "./components/Nav";

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/app"
            render={({ match: { path } }) => (
              <>
                <Route path={`${path}`} component={Homepage} exact />
                <Route path={`${path}/customer`} component={Customer} />
                <Route path={`${path}/vehicle`} component={Vehicle} />
                <Route path={`${path}/transaction`} component={Transaction} />
                <Route path={`${path}/browse`} component={Browse} />
                <Route path={`${path}/search`} component={Search} />
                <Route path={`${path}/report`} component={Report} />
              </>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
