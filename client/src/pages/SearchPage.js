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
    fetch("/api/user-book/similar_available_books/"+this.state.query_book.toUpperCase())
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
}

export default SearchPage;