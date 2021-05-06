import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';

const classes = "btn btn-primary";

const SignupButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <Link className={classes} to="/sign-up">Sign Up</Link>;
  }
  return (
    <div>
    </div>
  );

 /* const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      Welcome!
      <button className={classes} onClick={logout}>Logout</button>
    </div>
  );*/
});

export default SignupButton;