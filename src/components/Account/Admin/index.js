import React from 'react'

import * as ROUTES from '../../../constants/routes'
import { withAuthorization } from '../../Session';

const AdminPage = () => {
  return (
    <div>
      <h1>Admin</h1>
      <p>Restricted area! Only users with admin role are authorized to view this page.</p>
    </div>
  )
}

const condition = authUser => authUser && authUser.roles.includes(ROUTES.ADMIN)

export default withAuthorization(condition)(AdminPage)
