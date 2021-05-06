import React ,{ useState } from 'react';
import './book.css';

export function Book(props) {

    // const[name,setName] = useState('Your Name');
    // const[email,setEmail] = useState('Your Email');
    // const[school,setSchool]= useState('Your School');


    return (
        <div className="Card">
            <div className = "upper-container">
                <div className="image-container">
                    <img src="../book.png" alt= " " height ="100px" width="100px" />
                </div>
                
            </div> 
            <div className="lower-container">
                <h4>Book Name: { props.bookname } </h4>
                <p>ISBN: { props.isbn } </p>
                <p>Author: { props.author } </p>
                <p>Email of Owner: { props.email } </p>
                <p>CUNY School: { props.school } </p>
                <button>Borrow</button>
            </div>
        </div>
    )
};

export default Book;