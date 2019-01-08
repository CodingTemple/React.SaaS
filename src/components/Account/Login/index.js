import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { RegistrationLink } from '../Register';
import { withFirebase } from '../../Firebase';

import * as ROUTES from '../../../constants/routes';

const LoginPage = () => (
  <div>
    <h1>Login Page</h1>

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

  // onChange = e =>
}

export default class Login extends Component {
  render() {
    return (
      <h1>Login Page</h1>
    )
  }
}
