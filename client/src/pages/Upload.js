import React from "react";
import {useForm} from "react-hook-form";
import "./signuppage.css";
import auth from '../services/auth'




export function Upload() {
    const {errors} = useForm();

    const bookname1 = React.useRef(null);
    const author1 = React.useRef(null);
    const isbn1 = React.useRef(null);
    const comment1 = React.useRef(null);

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log('submit');
        
        const data = {
            bookname: bookname1.current.value,
            author: author1.current.value,
            isbn: isbn1.current.value,
            comment: comment1.current.value,
        }
        console.log(data)

        //fetch command
        fetch('/api/books/create', { 
            method: 'POST',
            body: JSON.stringify({ title: data.bookname, author: data.author, isbn: data.isbn}),
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(res => res.json())
            .then(book => {
                console.log(book);
                fetch('/api/user-book/create', { 
                    method: 'POST',
                    body: JSON.stringify({ owner_comment: data.comment, LenderId: auth.user.id, BookId: book.id}),
                    headers: {
                      'Content-Type': 'application/json',
                    }
                  }).then(res => res.json())
                      
                  .catch(err => console.log("API ERROR: ", err));
            })
            .catch(err => console.log("API ERROR: ", err));
   
        //create a new book
        //upload it to your profile
        //auth.user.id
    }

    return(
        <body>
        <div className="center">
        <form onSubmit={handleSubmit}>
            <br></br>
            <h1>Upload</h1>
            <br></br>
            <div className="txt_field">
                <input type="text" name="bookname" ref={bookname1}/>
                <span></span>
                <label>Book Name</label>
            </div>
            <br></br>
            <div className="txt_field">
                <input type="text" name="author" ref={author1}/>
                <span></span>
                <label for="author">Author:</label><br></br>
            </div>
            <br></br>
            {/* <div className="txt_field">
                <input type="text" name="publisher" ref={upload}/>
                <span></span>
                <label for="publisher">Publisher:</label><br></br>
            </div>
            <br></br> */}
            {/* <div className="txt_field">
                <input type="text" name="language" ref={upload}/>
                <span></span>
                <label for="language">Language:</label><br></br>
            </div>
            <br></br> */}
            <div className="txt_field">
                <input type="text" name="isbn" ref={isbn1}/>
                <span></span>
                <label for="isbn">ISBN:</label><br></br>
            </div>
            <br></br>
            <div className="txt_field">
                <input type="text" name="owner_comment" ref={comment1}/>
                <span></span>
                <label for="info">Information</label><br></br>
            </div>
            <br></br>
            <input 
                    type="submit"
                  value="Upload"></input>
                  <br></br>
        </form>
        </div>
        </body>
    );
}
export default Upload;