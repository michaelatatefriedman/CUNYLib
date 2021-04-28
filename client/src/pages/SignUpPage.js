import React from 'react';
import { Redirect } from 'react-router-dom';

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
          <form onSubmit={this.signup}>
            <div className="form-row">
              { err }
              <input 
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name" 
                required
                value={this.state.firstName} 
                onChange={this.fieldChanged('firstName')} />
            <input 
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name" 
                required
                value={this.state.lastName} 
                onChange={this.fieldChanged('lastName')} />  
              <input 
                type="email"
                className="form-control"
                name="email"
                placeholder="Email" 
                required
                value={this.state.email} 
                onChange={this.fieldChanged('email')} />
              <input 
                type="password"
                className="form-control"
                name="password"
                placeholder="Password" 
                required
                value={this.state.password} 
                onChange={this.fieldChanged('password')} />
            <input 
                type="text"
                className="form-control"
                name="school"
                placeholder="CUNY school" 
                required
                value={this.state.school} 
                onChange={this.fieldChanged('school')} />
              <button 
                type="submit"
                className="btn btn-primary ml-auto"
              >Sign Up</button>
            </div>
          </form>
        );
      }
   
   /* render() {
    
        return (
          <div className="col-10 col-md-8 col-lg-7">
                <label for="fname">First name: </label>
                <input className="form-control mr-3 rounded"
                        type="text" id="fname" name="fname" required/><br></br>
                <label for="lname">Last name: </label>
                <input className="form-control mr-3 rounded"
                        type="text" id="lname" name="lname" required/><br></br>
                <label for="email">Email Address: </label>
                <input className="form-control mr-3 rounded"
                        type="email" id="email" name="email" required/><br></br>
                <label for="password">Password: </label>
                <input className="form-control mr-3 rounded"
                        type="password" id="password" name="password" required/><br></br>
                <label for="Student">Are you currently a CUNY Student? </label>
                <select name="student" id="student" required> <br></br>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                </select><br></br>
        /*        {/* <div className="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </div>
                </div> */ /*}
                    {/* <option value="Yes">Yes</option>
                    <option value="No">No</option> *//*}
                <label for="Alumni">Are you a CUNY Alumni? </label>
                <select name="alumni" id="alumni" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br></br>
                <label for="CUNY">Which CUNY School do/did you attend? </label>
                <select name="schools" id="schools" required>
                    <option value="Queens College">Queens College</option>
                    <option value="Baruch College">Baruch College</option>
                    <option value="Hunter College">Hunter College</option>
                </select><br></br>
                <button type="submit">Sign Up</button>

                {/* <input type="submit" value="Submit"></input> *//*}
          </div>
        );
      }*/
    }


export default SignUpPage;