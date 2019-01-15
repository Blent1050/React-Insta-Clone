import React, { Component } from 'react';
import './App.css';
import posts from './dummy-data';
import SearchBar from './components/SearchBarComponent/SearchBar';
import PostContainer from './components/PostComponents/PostContainer';

import {Container} from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    this.setState({
      posts: posts
    })
  }

  addLikes = timestamp => {
    const updatedLikes = this.state.posts.map(post => {
      if(post.timestamp === timestamp){
        post.likes = post.likes + 1
      }
      return post
    });
    this.setState({
      post: updatedLikes
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <SearchBar />
          <PostContainer addLikes={this.addLikes} posts={this.state.posts} />
        </Container>
      </div>
    );
  }
}

export default App;
