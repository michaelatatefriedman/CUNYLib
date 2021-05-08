import React from "react";
import {useForm} from "react-hook-form";
import "./signuppage.css";


export function Upload() {
    const {upload, handleSubmit, errors} = useForm();

    return(
        <body>
        <div className="center">
        <form onSubmit={handleSubmit}>
            <br></br>
            <h1>Upload</h1>
            <br></br>
            <div className="txt_field">
                <input type="text" name="bookname" ref={upload}/>
                <span></span>
                <label>Book Name</label>
            </div>
            <br></br>
            <div className="txt_field">
                <input type="text" name="author" ref={upload}/>
                <span></span>
                <label for="author">Author:</label><br></br>
            </div>
            <br></br>
            <div className="txt_field">
                <input type="text" name="publisher" ref={upload}/>
                <span></span>
                <label for="publisher">Publisher:</label><br></br>
            </div>
            <br></br>
            <div className="txt_field">
                <input type="text" name="language" ref={upload}/>
                <span></span>
                <label for="language">Language:</label><br></br>
            </div>
            <br></br>
            <div className="txt_field">
                <input type="text" name="isbn" ref={upload}/>
                <span></span>
                <label for="isbn">ISBN:</label><br></br>
            </div>
            <br></br>
            <div className="txt_field">
                <input type="text" name="info" ref={upload}/>
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