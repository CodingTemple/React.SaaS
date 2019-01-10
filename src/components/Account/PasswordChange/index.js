import React, { Component } from 'react'

import { withFirebase }from '../../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class PasswordChangeForm extends Component {
  constructor() {
    super()
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = e => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => this.setState({ ...INITIAL_STATE }))
      .catch(error => this.setState({ error }))
    e.preventDefault()
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })
  
  render() {
    const { passwordOne, passwordTwo, error } = this.state
    const isInvalid = passwordOne !== passwordTwo || passwordOne === ''

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input 
            type="password" 
            className="form-control" 
            name="passwordOne" 
            placeholder="New Password"
            value={passwordOne}
            onChange={this.onChange} 
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className="form-control" 
            name="passwordTwo" 
            placeholder="Confirm New Password"
            value={passwordTwo}
            onChange={this.onChange} 
          />
        </div>
        <button disabled={isInvalid} className="btn btn-default">Reset My Password</button>

        {
          error &&
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          <strong>{error && <p>{error.message}</p>}</strong> 
          </div>
        }
      </form>
    )
  }
}

export default withFirebase(PasswordChangeForm)