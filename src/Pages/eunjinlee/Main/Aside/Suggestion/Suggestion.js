import React from 'react'
import './Suggestion.scss' 

class Suggestion extends React.Component {

  render() {
    const {id, userId, newStory, profile, status, isFollowing, followUser} = this.props
    
    return (
      <li className='Suggestion' id={userId}>
        <div
          className={newStory ? 'users' : 'users newStoryFalse'}>
          <img alt='User profile' src={profile} />
        </div>
        <div className='userInfos'>
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