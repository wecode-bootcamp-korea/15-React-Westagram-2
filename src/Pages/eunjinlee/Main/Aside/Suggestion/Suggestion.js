import React from 'react'
import './Suggestion.scss'

class Suggestion extends React.Component {

  render() {
    const {id, userId, newStory, profile, status, isFollowing, followUser} = this.props
    
    return (
      <li className='Suggestion' id={userId}>
        <div
          className={newStory
            ? 'suggestion-user-container'
            : 'suggestion-user-container new-story-false'}>
          <img alt='User profile' src={profile} />
        </div>
        <div className='suggestion-user-info'>
          <span>{userId}</span>
          <p>{status}</p>
        </div>
        <button
          className={isFollowing ? 'following' : ''}
          onClick={() => followUser(id)}>
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </li>
    )
  }
}

export default Suggestion