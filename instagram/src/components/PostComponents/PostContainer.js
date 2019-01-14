import React from 'react';
import Proptypes from 'prop-types';
import CommentSection from "../CommentComponent/CommentSection";

export default function PostContainer(props) {
  const { posts } = props;
  return (
    <React.Fragment>
      {posts.map((post, key) => {
        return(
          <div key={key}>
            <img src={post.thumbnailUrl} alt={'A picture of user ' + post.username} />
            <h3>{post.username}</h3>
            <img src={post.imageUrl} alt={'Posted by ' + post.username} />
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <p>{post.likes}</p>
            <CommentSection post={post}/>
          </div>
        )
      })}
    </React.Fragment>
  )
}
//Type Checking
PostContainer.propTypes = {
  posts: Proptypes.shape({
    username: Proptypes.string.isRequired,
    thumbnailUrl: Proptypes.string.isRequired,
    imageurl: Proptypes.string.isRequired,
    likes: Proptypes.number.isRequired,
    comments: Proptypes.array
  }).isRequired
}



