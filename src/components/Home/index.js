import React, { Component } from 'react'
import Drivers from './Drivers';

import { withAuthorization } from '../Session';

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
      <Drivers drivers={this.state.drivers} />
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Home)