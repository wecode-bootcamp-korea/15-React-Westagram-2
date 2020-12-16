import React from 'react'
import './Story.scss'

class Story extends React.Component {

  render() {
    const { userId, profile } = this.props

    return (
      <li className="Story">
        <div className="userImg">
          <img alt="User Profile" src={profile} />
        </div>
        <div className="userId">{userId}</div>
      </li>
    )
  }
}

export default Story