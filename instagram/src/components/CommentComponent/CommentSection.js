import React from 'react'
import PropTypes from 'prop-types';

export default function CommentSection(props) {
  return (
    <div>
      {props.post.comments.map((comment, key) => {
        return(
          <p key={key}><strong>{comment.username}</strong> {comment.text}</p>
        )
      })}
      <hr/>
      <input placeholder='Add a comment...' type='text'></input>
    </div>
  )
}

