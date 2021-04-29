import React from 'react';
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
import { Button } from "./components/Button";
import { SearchBar } from "./components/SearchBar";


import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">CUNYLib</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="">
            Home
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
      </ul>
      {/* <SearchBar>
      input={input} 
       onChange={updateInput}
      </SearchBar> */}
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <SearchBar />
          <Button onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium">Test Button
        </Button>
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
