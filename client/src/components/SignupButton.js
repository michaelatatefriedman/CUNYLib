import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import auth from '../services/auth';
import './profile.css';

const classes = "btn btn-primary";

export const SignupButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <Link to ="/sign-up"> 
    <button className="button" to="/sign-up" >Sign Up</button>
                </Link>;
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