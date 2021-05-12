import React,{ useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Upload from './pages/Upload';
import SearchPage from './pages/SearchPage'

import { Button } from "./components/Button";
import { SearchBar } from "./components/SearchBar";
import { Profile } from "./components/Profile";
import { Book } from "./components/Book";
import { SignupButton } from "./components/SignupButton";
import { AuthButton } from "./components/AuthButton";
import { Post } from "./components/Post";







import './App.css';



function Navigation(props) {
  // const{name,setName} = useState("Your Name");
  //   const{email,setEmail} = useState("Your Email");
  //   const{school,setSchool} = useState("Your School");
    // const[name,setName] = useState('Your Name');
    // const[email,setEmail] = useState('Your Email');
    // const[school,setSchool]= useState('Your School');
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">CUNYLib</Link>
      <ul className="navbar-nav mr-auto">
        {/* <li className="nav-item">
          <NavLink className="nav-link" exact to="">
            Home
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/upload">
            Upload
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li classname="nav-item">
          <NavLink className="nav-link" exact to="/sign-up">Sign Up</NavLink>
        </li>      
        <li classname="nav-item">
          <NavLink className="nav-link" exact to="/search">Search A Book</NavLink>
        </li>    
      </ul>
      <SignupButton />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <AuthButton /> 

    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path = '/search' component = {SearchPage}/>
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/upload" component={Upload} />
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
                <Route path="/search" component={SearchPage} />

              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;