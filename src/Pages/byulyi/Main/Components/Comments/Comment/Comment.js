import React, { Component } from 'react';


class Comment extends Component {
  handleDeleteCmt = (comment) => {
    this.props.onDeleteCmt(this.props.comment);
  }

  handleLikeCmt = (comment) => {
    this.props.onLikeCmt(this.props.comment);
  }

  render() {
    const { comment } = this.props;
    return (
    <li>
    <a href="#!">{comment.userId}</a>
    <span className='comment__text'>{comment.userCmt}</span>
    <span className='comment__like' >
      <img
        src={comment.cmtLike === false ? '/images/byulyi/heart.png' : '/images/byulyi/heart_fill.png'}
        alt='like icon'
        className='like__img'
        onClick={this.handleLikeCmt}
      />
    </span>
    <span className='comment__delete'>
    <img
      src='/images/byulyi/remove.png'
      alt='remove icon'
      className='delete'
      onClick={this.handleDeleteCmt}
    />
    </span>
  </li>
    );
  }
}

export default Comment;