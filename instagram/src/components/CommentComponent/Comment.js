import React from 'react'

export default function Comment(props)  {
    return (
        <p className='comment'><strong>{props.username}</strong> {props.text}</p>
    )
  }

