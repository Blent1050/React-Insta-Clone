import React from 'react'
import PropTypes from 'prop-types';

export default function CommentSection(props) {
  return (
    <div>
      {props.post.comments.map(comment => {
        return(
          <React.Fragment>
            <p><strong>{comment.username}</strong> {comment.text}</p>
          </React.Fragment>
        )
      })}
      <hr/>
      <input placeholder='Add a comment...' type='text'></input>
    </div>
  )
}

