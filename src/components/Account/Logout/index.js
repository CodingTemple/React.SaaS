import React from 'react';

import { withFirebase } from '../../Firebase';

const LogOutButton = ({ firebase }) => {
  return (
    <button className="btn btn-danger" type="submit" onClick={(e) => { firebase.doSignOut(); e.preventDefault(); }}>Logout</button>
  )
}

export default withFirebase(LogOutButton);