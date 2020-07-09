import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './containers/Layout';

import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={'Launches'} />
              <Route component={() => <div className="error">Page Not built :(</div>} />
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }
}

export default App;
