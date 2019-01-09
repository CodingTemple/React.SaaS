import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import LogOutButton from '../Account/Logout';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
)

const NavigationAuth = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <Link className="navbar-brand" to={ROUTES.LANDING}>React SaaS</Link>
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
        </li>
      </ul>
      <ul className="navbar-nav my-2 my-lg-0">
        <li className="nav-item">
          <LogOutButton />
        </li>
      </ul>
    </div>
  </nav>
)

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <Link className="navbar-brand" to={ROUTES.LANDING}>React SaaS</Link>
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
        </li>
      </ul>
      <ul className="navbar-nav my-2 my-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.REGISTER}>Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.LOGIN}>Sign In</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation