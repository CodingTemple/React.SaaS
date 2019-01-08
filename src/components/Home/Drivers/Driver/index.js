import React, { Component } from 'react'

export default class Driver extends Component {
  render() {
    
    const driver = this.props.driver;
    
    return (
      <tr>
        <td>{driver.position}</td>
        <td>{`${driver.Driver.givenName} ${driver.Driver.familyName}`}</td>
        <td>{driver.Constructors[0].nationality}</td>
        <td>{driver.Constructors[0].name}</td>
        <td>{driver.points}</td>
        <td>{driver.wins}</td>
      </tr>
    )
  }
}
