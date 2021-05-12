import React from 'react';
import { Redirect } from 'react-router-dom';
import "./signuppage.css";
import auth from '../services/auth';

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false, 
    email: "",
    password: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  login = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }

    return (
      // <form onSubmit={this.login}>
        <div className="center">
          <form onSubmit={this.login}>
            <h1>Login</h1>
            { err }
            <br></br>
            <div className="txt_field">
                  <input 
                    type="email"
                    className="txt_field"
                    name="email"
                    // placeholder="Email" 
                    required
                    value={this.state.email} 
                    onChange={this.fieldChanged('email')} />
                    <span></span>
                    <label>Email Address</label>
            </div>

          <br></br>
          <div className="txt_field">
                  <input 
                    type="password"
                    className="txt_field"
                    name="password"
                    // placeholder="Password" 
                    required
                    value={this.state.password} 
                    onChange={this.fieldChanged('password')} />
                    {/* <div class="pass">Forgot Password?</div> */}
                    <span></span>
                    <label>Password</label>
              </div>
            <br></br>
            <input 
                      type="submit"
                    value="Login"></input>
                    <br></br>
        </form>
      </div>
    );
  }
}

export default LoginPage;