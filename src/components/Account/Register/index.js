import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import * as ROUTES from '../../../constants/routes';

const RegistrationPage = () => (
  <div>
    <h1>Registration</h1>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

export default class RegistrationForm extends Component {
  constructor() {
    super()
    this.state = {
      ...INITIAL_STATE
    }
  }

  onSubmit = e => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => this.setState({ ...INITIAL_STATE }))
      .catch(err => this.setState({ err }))
    e.preventDefault();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input 
            name="username"
            value={username}
            onChange={this.onChange} 
            type="text" 
            className="form-control" 
            placeholder="Full Name" 
          />
        </div>
        <div className="form-group">
          <input 
            name="email"
            value={email}
            onChange={this.onChange} 
            type="email" 
            className="form-control" 
            placeholder="Email Address" 
          />
        </div>
        <div className="form-group">
          <input 
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange} 
            type="password" 
            className="form-control" 
            placeholder="Password" 
          />
        </div>
        <div className="form-group">
          <input 
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange} 
            type="password" 
            className="form-control" 
            placeholder="Confirm Password" 
          />
        </div>
        <button disabled={isInvalid} type="submit">Register</button>
        {error &&
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>{error && <p>{error.message}</p>}</strong>
          </div>}
      </form>
    )
  }
}

export const RegistrationLink = () => (
  <p>Don't have an account? <Link to={ROUTES.REGISTER}>Sign Up</Link></p>
);