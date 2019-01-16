import React from 'react'
import SearchBar from './../SearchBarComponent/SearchBar';
import PostContainer from './PostContainer';
import posts from '../../dummy-data';
import authenticate from '../authentication/authenticate';

class PostsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            searchInput: "",
            loggedIn: false
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
      login = (e) => {
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
                this.state.loggedIn ? this.displayAccount() : this.displayLoginPage()
            }

            </div>
        )
    }
}



export default PostsPage;