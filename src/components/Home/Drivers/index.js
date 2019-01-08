import React, { Component } from 'react'
import './index.css'

import Driver from './Driver'

export default class Drivers extends Component {
  constructor() {
    super()
    this.state = {
      filteredList: []
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filteredList: this.props.drivers
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredList: nextProps.drivers
    })
  }

  handleChange = e => {
    // holds original list
    let currentList = [];
    // variable to hold filtered list before putting into state
    let newList = [];

    // if search bar isn't empty
    if(e.target.value !== '') {
      // grab this.props.drivers to have a list to work with
      currentList = this.props.drivers;
      // use .filter() to determine which items should be displayed based on search
      newList = currentList.filter(driver => {
        return driver.Driver.givenName.toLowerCase().includes(e.target.value.toLowerCase())
          || driver.Driver.familyName.toLowerCase().includes(e.target.value.toLowerCase())
          || driver.Constructors[0].nationality.toLowerCase().includes(e.target.value.toLowerCase())
          || driver.Constructors[0].name.toLowerCase().includes(e.target.value.toLowerCase())
      })
    } else {
      // if search is empty show original list
      newList = this.props.drivers;
    }
    this.setState({ filteredList: newList });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control driverSearch" 
            placeholder="Search by name, nationality, or constructor" 
            onChange={this.handleChange}
          />
        </div>
        <table className="table table-striped table-responsive-sm">
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver</th>
              <th>Nation</th>
              <th>Constructor</th>
              <th>Points</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredList.map((driver, index) => <Driver key={index} driver={driver} />)}
          </tbody>
        </table>
      </div>
    )
  }
}
