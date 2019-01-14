import React, { Component } from 'react'

export default function Comment(props)  {
    return (
        <p>{props.username} {props.text}</p>
    )
  }

