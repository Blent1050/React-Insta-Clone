import React, { Component } from 'react';
import PostsPage from './components/PostComponents/PostsPage';
import {Container} from 'reactstrap';

import styled from 'styled-components';



class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <AppStyle>
        <Container>
          <PostsPage />
        </Container>
      </AppStyle>
    );
  }
}

export default App;
//Styling
const AppStyle = styled.div`
  text-align: center;
  width: 75%;
  max-width: 1024px;
  margin: 0 auto;
  min-width: 676px;
  i{
    font-size: 28px;
    margin: 0 5px;
  }
  .post{
    border: 1px solid rgba(128, 128, 128, 0.363);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
  }
  
  .post-header{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  
  .thumbnail{
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
  
  .post-image{
    width: 100%;
    height: auto;
  }
  
  .post-icons{
    text-align: left;
    margin-top: 20px;
  }
  .likes{
    text-align: left;
  }
  .comment{
    text-align: left;
  }
  
  .line{
    width: 90%;
    color: rgba(208, 205, 205, 0.16);
    margin: 30px auto;
  }
  
  .add-comment{
    border: none;
    display: flex;
    width: 95%;
    height: 43px;
    font-size: 20px;
  }
  .add-comment:focus{
    outline-width: 0;
  }
  .timestamp{
    text-align: left;
    font-size: 12px;
    color: gray;
  }
  
  .icon-interactable{
    cursor: pointer;
  }
`