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
      posts: [],
      searchInput: ""
    }
  }
  componentDidMount() {
    if (localStorage.getItem("posts") === null) {
      localStorage.setItem("posts", "[]");
      return;
    }
    const appStorage = JSON.parse(localStorage.getItem("posts"));

    return (
      appStorage !== "" ?
        this.setState({ posts: appStorage }) : this.setState({ posts: posts })
    )
  }

  componentDidUpdate() {
    let appStorage = localStorage.getItem("posts");
    const dataString = JSON.stringify(this.state.posts);

    return appStorage !== dataString
      ? localStorage.setItem("posts", JSON.stringify(this.state.posts))
      : null;
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <SearchBar handleChange={this.handleChange} searchInput={this.state.searchInput} />
          <PostContainer searchInput={this.state.searchInput} addLikes={this.addLikes} posts={this.state.posts} />
        </Container>
      </div>
    );
  }
}

export default App;
