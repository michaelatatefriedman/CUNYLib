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
import HomePage from './pages/HomePage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import SignUpPage from './pages/SignUpPage';
import Upload from './pages/Upload';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage'
import AllBooksPage from './pages/AllBooksPage'
import { Button } from "./components/Button";
import { SearchBar } from "./components/SearchBar";
import { Profile } from "./components/Profile";
import { Book } from "./components/Book";
import { SignupButton } from "./components/SignupButton";
import { AuthButton } from "./components/AuthButton";
import { Post } from "./components/Post";
import "./assests/css/style.css";






import './App.css';



function Navigation(props) {
  // const{name,setName} = useState("Your Name");
  //   const{email,setEmail} = useState("Your Email");
  //   const{school,setSchool} = useState("Your School");
    // const[name,setName] = useState('Your Name');
    // const[email,setEmail] = useState('Your Email');
    // const[school,setSchool]= useState('Your School');
  return (
    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
    //   <Link className="navbar-brand" to="/">CUNYLib</Link>
    //   <ul className="navbar-nav mr-auto">
    //     {/* <li className="nav-item">
    //       <NavLink className="nav-link" exact to="">
    //         Home
    //       </NavLink>
    //     </li> */}
    //       <li className="nav-item">
    //       <NavLink className="nav-link" exact to="/about-us">
    //         About Us
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //     <NavLink className='nav-link' exact to="/profile">Profile</NavLink>
    //     </li> 
    //     <li className="nav-item">
    //       <NavLink className="nav-link" exact to="/allbooks">
    //         Upload
    //       </NavLink>
    //     </li>
           
    //     <li classname="nav-item">
    //       <NavLink className="nav-link" exact to="/search">Search A Book</NavLink>
    //     </li>    
    //   </ul>
    //   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //   <AuthButton /> 

    // </nav>
     <nav id="navbar" class="navbar">
     <ul>
       <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
       <li><a class="nav-link scrollto" href="AboutUsPage.js">About Us</a></li>
       <li><a class="nav-link scrollto" href="#ProfilePage">Profile</a></li>
       <li><a class="nav-link scrollto " href="#portfolio">Upload</a></li>
       <li><a class="nav-link scrollto" href="#team">Search For a Book</a></li>
       <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
         <ul>
           <li><a href="#">Drop Down 1</a></li>
           <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
             <ul>
               <li><a href="#">Deep Drop Down 1</a></li>
               <li><a href="#">Deep Drop Down 2</a></li>
               <li><a href="#">Deep Drop Down 3</a></li>
               <li><a href="#">Deep Drop Down 4</a></li>
               <li><a href="#">Deep Drop Down 5</a></li>
             </ul>
           </li>
           <li><a href="#">Drop Down 2</a></li>
           <li><a href="#">Drop Down 3</a></li>
           <li><a href="#">Drop Down 4</a></li>
         </ul>
       </li>
       <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
     </ul>
     <i class="bi bi-list mobile-nav-toggle"></i>
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
                <PrivateRoute path="/profile" component={ProfilePage}/>
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/allbooks" component={AllBooksPage} />
                <PrivateRoute path="/upload" component={Upload} />
                <Route path="/about-us" component={AboutUsPage} />
                <PrivateRoute path="/search" component={SearchPage} />
                <Route path="/" component={HomePage} />

              </Switch>
            </div>
          </div>

            
          </Scrollbars>
        </Router>
        
    );
  }
}


export default App;