import React from 'react'
import Proptypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends React.Component {

  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      comments: props.posts.comments,
      newComment: ""
    }
  }

  addNewComment = event => {
    event.preventDefault()
    const newCommentsArray = {
      comments: [
        ...this.state.comments,
        {
          username: 'user',
          text: this.state.newComment,
        }
      ],
      newComment: ""
    };
    this.setState(newCommentsArray);
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div>
        {this.state.comments.map((comment, key) => {
          return(
            <Comment key={key} username={comment.username} text={comment.text}/>
          )
        })}
        {/* <p className='timestamp'>{this.state.comments.timestamp}</p> */}
        <hr className='line'/>
        <form onSubmit={this.addNewComment}>
          <input name='newComment' value={this.state.newComment} onChange={this.handleChanges} className='add-comment' placeholder='Add a comment...' type='text'></input>
        </form>
        
      </div>
    )
  }
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

export default CommentSection;