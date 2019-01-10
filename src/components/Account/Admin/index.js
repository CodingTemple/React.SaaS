import React, { Component } from 'react'

// import * as ROUTES from '../../../constants/routes'
// import { withAuthorization } from '../../Session';
import { withFirebase } from '../../Firebase';
// import compose from 'recompose';

class AdminPage extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val()
      const usersList= Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }))
      this.setState({
        users: usersList,
        loading: false
      })
    })
  }

  componentWillUnmount() {
    this.props.firebase.users().off()
  }

  render() {
    const { users, loading } = this.state
    return (
      <div>
        <h1>Admin</h1>
        {/* <p>Restricted area! Only users with admin role are authorized to view this page.</p> */}
        {loading && <div>Loading...</div>}
        <UsersList users={users} />
      </div>
    )
  }
}

const UsersList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>Email:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
)

// const condition = authUser => authUser && authUser.roles.includes(ROUTES.ADMIN)

// export default withAuthorization(condition)(AdminPage)
export default withFirebase(AdminPage)