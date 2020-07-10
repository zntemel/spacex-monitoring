import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import Launches from "./containers/Launches";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/launches" component={Launches} />
              <Route
                component={() => <div className="error">Page Not built :(</div>}
              />
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }
}

export default App;
