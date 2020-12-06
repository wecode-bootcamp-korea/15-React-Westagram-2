import React, { Component } from 'react';
import Comment from "./Comment/Comment"
import "./Comments.scss"


class Comments extends Component {

  render() {
    const { comments } = this.props;
    return (
      <ul className='comments'>
        {comments.map((comment, id) => (
          <Comment comment={comment}
          onDeleteCmt={this.props.onDeleteCmt}
          onLikeCmt={this.props.onLikeCmt}
          onEnter={this.props.onEnter}
          key={id}
          />
        ))
  }
      </ul>
    );
  }
}

export default Comments