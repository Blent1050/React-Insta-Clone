import React from 'react'
import Proptypes from 'prop-types';
import Comment from './Comment';
export default function CommentSection(props) {
   console.log(props)
  return (
    <div>
      {props.posts.comments.map((comment, key) => {
        return(
          <Comment key={key} username={comment.username} text={comment.text}/>
        )
      })}
      <hr/>
      <input placeholder='Add a comment...' type='text'></input>
    </div>
  )
}

//Type checking
CommentSection.propTypes = {
  posts: Proptypes.shape({
    username: Proptypes.string,
    thumbnailUrl: Proptypes.string,
    imageUrl: Proptypes.string,
    likes: Proptypes.number,
    comments: Proptypes.array.isRequired
  }).isRequired
}