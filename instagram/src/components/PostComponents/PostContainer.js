import React from 'react'
import CommentSection from "../CommentComponent/CommentSection";

export default function PostContainer(props) {
  console.log(props);
  return (
    <div>
      <h1>postcontainer</h1>
      <CommentSection />
    </div>
  )
}



