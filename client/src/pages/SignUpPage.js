import React from 'react';


class SignUpPage extends React.Component {
    render() {
    
        return (
          <div className="container-fluid text-center col justify-content-center">
                <label for="fname">First name: </label>
                <input type="text" id="fname" name="fname" required/><br></br>
                <label for="lname">Last name: </label>
                <input type="text" id="lname" name="lname" required/><br></br>
                <label for="email">Email Address: </label>
                <input type="email" id="email" name="email" required/><br></br>
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" required/><br></br>
                <label for="Student">Are you currently a CUNY Student? </label>
                <select name="student" id="student" required> <br></br>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br></br>
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

                {/* <input type="submit" value="Submit"></input> */}
          </div>
        );
      }
    }


export default SignUpPage;