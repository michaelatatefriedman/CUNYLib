import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import AuthButton from '../components/AuthButton';
import SignupButton from '../components/SignupButton';
import "./signuppage.css";

class HomePage extends React.Component {

  render() {
    return (
      // <body>
      <div className="container-fluid text-center">

      <div className="center">
        <br></br>
        <h2>Welcome to CUNYLib</h2>
        <br></br>
          <AuthButton>Log In</AuthButton>
          <span></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SignupButton>Sign Up</SignupButton>
          <br></br>
          <br></br>
      </div>
     
    </div>
    // </body>
    );
  }
}

export default HomePage;