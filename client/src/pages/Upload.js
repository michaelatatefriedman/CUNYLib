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

/*import React from "react";
import {useForm} from "react-hook-form";


export function Upload() {
    const {upload, handleSubmit, errors} = useForm();

    return(
        <form onSubmit={handleSubmit}>
            <label for="bookname">Book name:</label><br></br>
            <input type="text" placeholder="Bookname" name="bookname" ref={upload}/>
            <label for="author">Author:</label><br></br>
            <input type="text" placeholder="Author" name="author" ref={upload}/>
            <label for="publisher">Publisher:</label><br></br>
            <input type="text" placeholder="Publisher" name="publisher" ref={upload}/>
            <label for="language">Language:</label><br></br>
            <input type="text" placeholder="Language" name="language" ref={upload}/>
            <label for="isbn">ISBN:</label><br></br>
            <input type="text" placeholder="ISBM" name="isbn" ref={upload}/>
            <textarea name="information" rows="10" cols="30" ref={upload}></textarea>
            <input type="submit" value="Upload"/>
        </form>
    );
}
export default Upload;*/