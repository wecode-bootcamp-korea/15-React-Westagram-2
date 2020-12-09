import React from 'react'
import './Comment.scss'

class Comment extends React.Component {

  render() {

    const {id, userId, text, like, removeComment, likeComment} = this.props

    return (
      <li className="comment__content-list">
        <div>
          <span>
            <a>{userId}</a>{text}
          </span>
          <i 
            className="fas fa-times" 
            onClick={() => removeComment(id)}>
          </i>
        </div>
        <i 
          className={like ? "fas fa-heart comment__heart" : "far fa-heart comment__heart"}
          onClick={() =>  likeComment(id)}>
        </i>
      </li>
    )
  }
}

export default Comment