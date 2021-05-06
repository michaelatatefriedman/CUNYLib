import React ,{ useState } from 'react';
import './profile.css';

export function Profile() {

    const[name,setName] = useState('Your Name');
    const[email,setEmail] = useState('Your Email');
    const[school,setSchool]= useState('Your School');


    return (
        <div className="Card">
            <div className = "upper-container">
                <div className="image-container">
                    <img src="../sun.png" alt= " " height ="100px" width="100px" />
                </div>
                
            </div> 
            <div className="lower-container">
                <h1> { name } </h1>
                <h4> { email } </h4>
                <p> { school } </p>
                <button>Visit Profile</button>
            </div>
        </div>
    )
};

export default Profile;