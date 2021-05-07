import React from "react";
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
export default Upload;