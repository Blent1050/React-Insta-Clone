import React, { Component } from 'react';
import './App.css';
import posts from './dummy-data';
import SearchBar from './components/SearchBarComponent/SearchBar';
import PostContainer from './components/PostComponents/PostContainer';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: posts
    }
  }
  render() {
    return (
      <div className="App">
       <SearchBar />
       <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
