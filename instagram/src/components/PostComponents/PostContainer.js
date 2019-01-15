import React from 'react';
import Proptypes from 'prop-types';
import CommentSection from "../CommentComponent/CommentSection";

class PostContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      likes: props.likes
    }
    console.log(props.likes)
  }


  render(){
    return (
      <React.Fragment>
        {this.props.posts.map((post, key) => {
          return(
            <div className='post' key={key}>
              <div className='post-header'>
                <img className='thumbnail' src={post.thumbnailUrl} alt={'A picture of user ' + post.username} />
                <h3>{post.username}</h3>
              </div>
              <img className='post-image' src={post.imageUrl} alt={'Posted by ' + post.username} />
              <div className='post-icons'>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
              </div>
              <p className='likes'><strong>{post.likes} likes</strong></p>
              <CommentSection posts={post}/>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
//Type Checking
PostContainer.propTypes = {
  posts: Proptypes.arrayOf(Proptypes.shape({
    username: Proptypes.string.isRequired,
    thumbnailUrl: Proptypes.string.isRequired,
    imageUrl: Proptypes.string.isRequired,
    likes: Proptypes.number.isRequired,
    comments: Proptypes.array
  })).isRequired
}

export default PostContainer;

