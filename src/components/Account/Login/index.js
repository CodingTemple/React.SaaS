import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { RegistrationLink } from '../Register';
import PasswordForgetLink from '../PasswordForget';
import { withFirebase } from '../../Firebase';

import * as ROUTES from '../../../constants/routes';

const LoginPage = () => (
  <div>
    <h1>Login Page</h1>
    <LoginForm />
    <PasswordForgetLink />
    <RegistrationLink />
  </div>
)

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class LoginFormBase extends Component {
  constructor() {
    super()
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = e => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(err => this.setState({ err }));
      e.preventDefault();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === ''

    return (
      <form>
        <div className="form-group">
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            className="form-control"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            className="form-control"
            type="password"
            placeholder="Password"
          />
          <hr />
          <input className="btn btn-default" disabled={isInvalid} type="submit" value="Log In" />
          {
            error &&
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>{error && <p>{error.message}</p>}</strong>
            </div>
          }
        </div>
      </form>
    )
  }
}

const LoginForm = compose(withRouter, withFirebase)(LoginFormBase);

export default LoginPage;
export { LoginForm };