import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './profile.css';
import auth from '../services/auth';

// const classes = "btn btn-primary";

export const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <Link to="/login">
              <button className="button" to="/login">Login</button>
          </Link>;
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      Welcome!
      <button className="button" onClick={logout}>Logout</button>
    </div>
  );
});

export default AuthButton;