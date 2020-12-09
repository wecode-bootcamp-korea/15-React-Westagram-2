import React from 'react'
import './Recommend.scss'

class Recommend extends React.Component {
  render() {

    const {id, userId, newStory, profile, status, isFollowing, followUser} = this.props
    return (
      <li className='suggestion-user' id={userId}>
        <div
          className={
            !newStory
              ? 'suggestion-user-container new-story-false'
              : 'suggestion-user-container'
          }
        >
          <img alt='User profile' src={profile} />
        </div>
        <div className='suggestion-user-info'>
          <a>{userId}</a>
          <p>{status}</p>
        </div>
        <p
          className='follow-btn'
          onClick={() => followUser(id)}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </p>
      </li>
    )
  }
}

export default Recommend