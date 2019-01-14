import React from 'react'
import CommentSection from "../CommentComponent/CommentSection";

export default function PostContainer(props) {
  console.log(props);
  return (
    <div>
      {props.posts.map(post => {
        return(
          <React.Fragment>
            <img src={post.thumbnailUrl} alt={'A picture of user ' + post.username} />
            <h3>{post.username}</h3>
            <img src={post.imageUrl} alt={'Posted by ' + post.username} />
            <i className="far fa-heart"></i>
            <i className="far fa-heart"></i>
            <p>{post.likes}</p>
            <CommentSection post={post}/>
          </React.Fragment>
        )
      })}
    </div>
  )
}



