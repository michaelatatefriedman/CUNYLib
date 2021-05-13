///api/books/all

import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import GeneralBook from '../components/generalBook';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import { Button } from "../components/Button";
import auth from '../services/auth'




class AllBooksPage extends React.Component {
  state = {
    books: [],
    display_books: [],
    loading: true,
    query_book: '',
    userId: auth.user.id,
    redirect_upload: false,
    redirect_profile: false,
  }
  

//auth.user.id
//api/user-book/create
/*
*{
	"owner_comment": "Clean",
	"LenderId": 1,
	"BookId": 4
}
*/
//const enteredID = prompt('Please enter borrowers id')
  addToMyAccount(id){
      console.log('in addToMyAccount')
      console.log(auth.user.id)
      console.log(JSON.stringify({ Lender_id: auth.user.id, BookId: id.toString()}))
      const owner_comment = prompt('Please add any additional comments/information about your book')
      console.log('about to do fetch command')
      fetch('/api/user-book/create', { 
        method: 'POST',
        body: JSON.stringify({ owner_comment: owner_comment, LenderId: this.state.userId, BookId: id.toString()}),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
        .catch(err => console.log("API ERROR: ", err));
      this.setState({
        redirect_profile:true
      })
      
  }

  componentDidMount() {
    fetch("/api/books/all")
      .then(res => res.json())
      .then(books => {
        this.setState({
          loading: false,
          books: books.map((book,ii) => <GeneralBook {...book} key={ii} onClick={() => {this.addToMyAccount(book.id)}}/>),
          display_books: books.map((book,ii) => <GeneralBook {...book} key={ii} onClick={() => {this.addToMyAccount(book.id)}}/>),
        })
        console.log('all books')
        console.log(this.state.books)
        console.log('display books')
        console.log(this.state.display_books)
      })
      .catch(err => console.log("API ERROR: ", err))
  }


  searchBook() {

    this.setState({
        display_books: this.state.books.filter(book =>{
            return (book.props.author.toUpperCase().includes(this.state.query_book.toUpperCase()) ||
                book.props.title.toUpperCase().includes(this.state.query_book.toUpperCase()) ||
                book.props.isbn.toUpperCase().includes(this.state.query_book.toUpperCase()) )
        })
    })
    console.log('IN SEARCH BOOK')
    console.log('all books')
    console.log(this.state.books)
    console.log('display books')
    console.log(this.state.display_books)
    
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

    if(this.state.redirect_profile){
      return <Redirect to = '/profile'/>
    }
    if(this.state.redirect_upload){
      return <Redirect to = '/upload'/>
    }

    return (
      
      <div className="container-fluid text-center">
        <div>
          Search your book Title, ISBN or Author.
        </div>
        <br></br>
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
          { this.state.display_books }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button onClick={() => {
          this.setState({redirect_upload:true})
        }}
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium">Add new book
        </Button>
        <br></br>
        <br></br>
    </div>
    
    );
  }
}

export default AllBooksPage;