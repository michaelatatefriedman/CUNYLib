import React from 'react';

import { Redirect } from 'react-router-dom';

import "./signuppage.css";

import auth from '../services/auth';

class SignUpPage extends React.Component {
    state = {
        redirectToReferrer: false,
        failed: false, 
        firstName: "",
        lastName: "",
        school: "",
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

      signup = (e) => {
        e.preventDefault();
        let { firstName, lastName, email, password, school } = this.state;
        auth.signup(firstName, lastName, email, password, school)
          .then((user) => {
            this.setState({ redirectToReferrer: true });
          })
          .catch((err) => {
            this.setState({ failed: true });
            console.log(err);
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
          err = <div className="alert alert-danger" role="alert">Signup Failed</div>;
        }
    
        return (
          <body>
            <div className="center">
            <form onSubmit={this.signup}>

              <h1>Sign Up</h1>
              { err }
              <br></br>
              <div className="txt_field">
                <input 
                  type="text"
                  className="txt_field"
                  name="firstName"
                  // placeholder="First Name" 
                  required
                  value={this.state.firstName} 
                  onChange={this.fieldChanged('firstName')} />
                  <span></span>
                  <label>First Name </label>
              </div>
              <br></br>
              <div className="txt_field">
                  <input 
                    type="text"
                    name="lastName"
                    // placeholder="Last Name" 
                    required
                    value={this.state.lastName} 
                    onChange={this.fieldChanged('lastName')} />  
                    <span></span>
                    <label>Last Name </label>
              </div>
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
              <div className="txt_field">
                    <input 
                    type="text"
                    className="txt_field"
                    name="school"
                    // placeholder="CUNY school" 
                    required
                    value={this.state.school} 
                    onChange={this.fieldChanged('school')} />
                    <span></span>
                    <label>CUNY School</label>
              </div>
              <br></br>
                <input 
                    type="submit"
                  value="Sign Up"></input>
                  <br></br>
              </form>
            </div>
          </body>
        );
      }
}
export default SignUpPage;
