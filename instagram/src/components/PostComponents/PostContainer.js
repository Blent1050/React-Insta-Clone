import React from 'react';
import Proptypes from 'prop-types';
import CommentSection from "../CommentComponent/CommentSection";

export default function PostContainer(props) {
  return (
    <React.Fragment>
      {props.posts.map((post, key) => {
        return(
          <div className='post' key={key}>
            <div className='post-header'>
              <img className='thumbnail' src={post.thumbnailUrl} alt={'A picture of user ' + post.username} />
              <h3>{post.username}</h3>
            </div>
            <img src={post.imageUrl} alt={'Posted by ' + post.username} />
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <p>{post.likes}</p>
            <CommentSection posts={post}/>
          </div>
        )
      })}
    </React.Fragment>
  )
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



