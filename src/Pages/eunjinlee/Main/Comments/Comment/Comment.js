import React from 'react'
import './Comment.scss'

class Comment extends React.Component {

  render() {
    const {id, userId, text, like, removeComment, likeComment} = this.props

    return (
      <li className="Comment">
        <div>
          <span>
            <span>{userId}</span>{text} 
          </span>
          <i 
            className="fas fa-times" 
            onClick={() => removeComment(id)}/>
        </div>
        <i 
          className={like ? "fas fa-heart" : "far fa-heart"}
          onClick={() => likeComment(id)}/>
      </li>
    )
  }
}

export default Comment