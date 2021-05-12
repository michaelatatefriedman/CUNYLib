import React,{ useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import PrivateRoute from './components/PrivateRoute';
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
          <Scrollbars style={{ width: '100%', height: 500}}>
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <PrivateRoute path = '/search' component = {SearchPage}/>
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/upload" component={Upload} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
                <PrivateRoute path="/search" component={SearchPage} />

              </Switch>
            </div>
          </div>

            
          </Scrollbars>
        </Router>
        
    );
  }
}


export default App;