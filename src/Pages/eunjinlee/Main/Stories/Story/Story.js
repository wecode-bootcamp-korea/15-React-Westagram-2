import React from 'react'
import './Story.scss'

class Story extends React.Component {

  render() {

    const { userId, profile } = this.props

    return (
      <li className="Story">
        <div className="story__view-button">
          <img alt="User Profile" src={profile} />
        </div>
        <div className="story__user-id">{userId}</div>
      </li>
    )
  }
}

export default Story