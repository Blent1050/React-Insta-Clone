import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostComponents/PostsPage';
import {Container} from 'reactstrap';

import styled from 'styled-components';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <PostsPage />
        </Container>
      </div>
    );
  }
}

export default App;