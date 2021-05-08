import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import AuthButton from '../components/AuthButton';
import SignupButton from '../components/SignupButton';
import "./signuppage.css";

class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

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
      // <body>
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          { this.state.posts }
        </div>
      <div className="center">
        <br></br>
        <h2>Welcome to CUNYLib</h2>
        <br></br>
          <AuthButton>Log In</AuthButton>
          <span></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SignupButton>Sign Up</SignupButton>
          <br></br>
          <br></br>
      </div>
     
    </div>
    // </body>
    );
  }
}

export default PostsListPage;