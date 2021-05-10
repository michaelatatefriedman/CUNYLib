import React, { useState, useEffect } from 'react';
import Book from '../components/Book';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import { Button } from "../components/Button";


class SearchPage extends React.Component {
  state = {
    books: [],
    loading: true,
    query_book: '',
  }

  componentDidMount() {
    fetch("/api/user-book/all")
      .then(res => res.json())
      .then(books => {
        this.setState({
          loading: false,
          books: books.map((book,ii) => <Book {...book} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }


  searchBook() {
    fetch("/api/user-book/similar_books/"+this.state.query_book.toUpperCase())
      .then(res => res.json())
      .then(books => {
        this.setState({
          loading: false,
          books: books.map((book,ii) => <Book {...book} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }
  handle(event){
    console.log(event.target.value);
  }

  setKeyword(input){
    this.setState({query_book: input})
 }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      
      <div className="container-fluid text-center">
        <SearchBar         
          placeholder = "Search a book..." 
          handleChange={(e) => this.setKeyword(e.target.value)}
        />
        <Button onClick={() => {
          this.searchBook()
        }}
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium">Search
        </Button>
        <br ></br>
        <br></br>
        <div className="row justify-content-center">
          { this.state.books }
        </div>
    </div>
    
    );
  }
    /*render() {
    
        return (
          <div className="col-10 col-md-8 col-lg-7">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Search a textbook here..." 
                className="form-control mr-3 rounded"
              />
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Search By...
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Name</a>
                  <a class="dropdown-item" href="#">Author</a>
                  <a class="dropdown-item" href="#">ISBN</a>
                </div>
              </div>
            </div>
          </div>
        );
      }*/
    }

    //Will add a list generated of react components for when searched.
    /**
     *  

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Post {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          { this.state.posts }
        </div>
      <div>Welcome to CUNYLib</div>
        <AuthButton>Log In</AuthButton>
        <SignupButton>Sign Up</SignupButton>
    </div>
    
    );
  }
     */

export default SearchPage;