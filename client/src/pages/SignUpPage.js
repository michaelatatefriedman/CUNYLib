import React from 'react';


class SignUpPage extends React.Component {
    render() {
    
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
                {/* <div className="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </div>
                </div> */}
                    {/* <option value="Yes">Yes</option>
                    <option value="No">No</option> */}
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