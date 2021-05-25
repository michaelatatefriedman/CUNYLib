import React ,{ useState } from 'react';
import './book.css';
import Button from './Button'

import auth from '../services/auth'

export function Book(props) {

    // const[name,setName] = useState('Your Name');
    // const[email,setEmail] = useState('Your Email');
    // const[school,setSchool]= useState('Your School');
 // if props.onClick --> create a button for which onclick behavior is applied, if not keep it as is
 // var holding button and midify that var and modify if you notce onclick passed down

 
    return (
        <div className="book-Card">
            <div className = "book-upper-container">
                <div className="book-image-container">
                    <img src="../book.png" alt= " " height ="100px" width="100px" />
                </div>
                
            </div> 
            <div className="book-lower-container">
                <h4>{ props.bookname } </h4>
                <p>ISBN: { props.isbn } </p>
                <p>Author: { props.author } </p>
                <p>Email of Owner: { props.email } </p>
                <p>CUNY School: { props.school } </p>
                <br></br>
                <Button onClick={props.onClick}>Borrow</Button>
            </div>
        </div>
    )
};

export default Book;