import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import Navigation from './components/Navigation';
import Home from './components/Home';
import PageTwo from './components/PageTwo';
import Landing from './components/Landing';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
import PasswordForget from './components/Account/PasswordForget';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Navigation />
          </header>
          <div id="main">
            <div className="container">
              <Route exact path={ROUTES.LANDING} component={Landing}></Route>
              <Route path={ROUTES.HOME} component={Home}></Route>
              <Route path={"/pageTwo"} component={PageTwo}></Route>
              <Route path={ROUTES.LOGIN} component={Login}></Route>
              <Route path={ROUTES.REGISTER} component={Register}></Route>
              <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget}></Route>
            </div>
          </div>
          <footer>
            {/* Footer content here */}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;