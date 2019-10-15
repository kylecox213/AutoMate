import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AppContainer from "./pages/AppContainer";
import Nav from "./components/Nav";

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/app" component={AppContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
