import React ,{ useState } from 'react';
// import './book.css';
import Button from './Button'

import auth from '../services/auth'

export function Book(props) {

    // const[name,setName] = useState('Your Name');
    // const[email,setEmail] = useState('Your Email');
    // const[school,setSchool]= useState('Your School');
 // if props.onClick --> create a button for which onclick behavior is applied, if not keep it as is
 // var holding button and midify that var and modify if you notce onclick passed down

 
    return (
        <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <div class="portfolio-info">
                        <img src="../book.png" class="img-fluid" alt="" />
                            <h4>Book Name: { props.bookname } </h4>
                            <p>ISBN: { props.isbn } </p>
                            <p>Author: { props.author } </p>
                            <p>Email of Owner: { props.email } </p>
                            <p>CUNY School: { props.school } </p>
                            <Button onClick={props.onClick}>Borrow</Button>
                    </div>
                </div> 
                <div class="portfolio-links">
                    {/* <img src="../book.png" alt= " " height="250px" width="250px"data-gallery="portfolioGallery" class="portfolio-lightbox" /> */}
                    {/* <a href="../book.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a> */}
                </div>
            </div>
        </div>
        
    )
};

export default Book;