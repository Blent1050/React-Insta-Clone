import React from 'react'
import Proptypes from 'prop-types';

export default function CommentSection(props) {
   console.log(props)
  return (
    <div>
      {props.posts.comments.map((comment, key) => {
        return(
          <p key={key}><strong>{comment.username}</strong> {comment.text}</p>
        )
      })}
      <hr/>
      <input placeholder='Add a comment...' type='text'></input>
    </div>
  )
}

CommentSection.propTypes = {
  posts: Proptypes.shape({
    username: Proptypes.string,
    thumbnailUrl: Proptypes.string,
    imageUrl: Proptypes.string,
    likes: Proptypes.number,
    comments: Proptypes.array.isRequired
  }).isRequired
}