import React from 'react'
import SearchBar from './../SearchBarComponent/SearchBar';
import PostContainer from './PostContainer';
import posts from '../../dummy-data';
import authenticate from '../authentication/authenticate';

class PostsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: posts,
            searchInput: "",
            loggedIn: false
          }
    }
    componentDidMount(){
      const username = localStorage.getItem("username");
      if(username){
        this.setState({
          loggedIn: true
        })
      }else{
        this.setState({
          loggedIn:false
        })
      }

    }

    componentDidUpdate(){

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
      login = (e) => {
          localStorage.setItem("username", `${this.state.usernameInput}`);
          localStorage.setItem("loginStatus", JSON.stringify(this.state.loggedIn));
          this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
          }))
      }
      displayAccount = () => {
          return(
            <>
                <SearchBar handleChange={this.handleChange} searchInput={this.state.searchInput} />
                <PostContainer searchInput={this.state.searchInput} addLikes={this.addLikes} posts={this.state.posts} />
            </>
        )
      }
      displayLoginPage = () => {
          return(
              <>
                <form onSubmit={this.login}>
                    Username:<br/>
                    <input type='text' name='username' required/><br/>
                    Password:<br/>
                    <input type='password' name='password' required/><br/>
                    <button>Submit</button>
                </form>
              </>
          )
      }
    render(){

        return (
            <div>
            {
                authenticate(this.displayLoginPage)(this.displayAccount)(this.state.loggedIn)
            }

            </div>
        )
    }

}

export default PostsPage;