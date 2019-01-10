import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../constants/routes';

const PasswordForgetPage = () => (
  <div>
    <h1>Forgot Password</h1>
    <PasswordForgetForm />
  </div>
)

const INITIAL_STATE = {
  email: '',
  error: null
}

class PasswordForgetFormBase extends Component {
  constructor() {
    super()
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = e => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => this.setState({ ...INITIAL_STATE }))
      .catch(error => this.setState({ error }));
    e.preventDefault();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, error } = this.state;
    const isInvalid = email === ''; 

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            name="email"
            placeholder="Email Address"
            onChange={this.onChange}
            value={this.state.email}
          />
          <hr />
          <button className="btn btn-default" disabled={isInvalid} type="submit">Reset My Password</button>
        </div>

        {
          error &&
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>{error && <p>{error.message}</p>}</strong> 
          </div>
        }
      </form>
    )
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
)

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink }