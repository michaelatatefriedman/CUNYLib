import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import AuthButton from '../components/AuthButton';
import SignupButton from '../components/SignupButton';


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
}

export default PostsListPage;