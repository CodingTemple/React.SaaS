import React, { Component } from 'react'
import Drivers from './Drivers';

import { withAuthorization, AuthUserContext } from '../Session';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      drivers: []
    };
  }

  componentDidMount() {
    fetch("https://ergast.com/api/f1/2018/driverStandings.json")
    .then(res => res.json())
    .then(data => {
      this.setState({
        drivers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      });
      // console.log(this.state.drivers);
    });
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <h1>Welcome, {authUser.username}</h1>
            <Drivers drivers={this.state.drivers} />
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Home)