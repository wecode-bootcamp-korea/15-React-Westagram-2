import React from 'react'
import './Aside.scss'
import UserInfos from '../UserInfos'

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {
      users: {
        user1: {
          userId: 'seulaaa_',
          profile:
            'https://images.unsplash.com/photo-1607166977372-ad7de6359476?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
          status: 'Follows you',
          newStory: false,
        },
      },
    }
  }

  followUser = () => {
    this.setState({
      following: !this.state.following,
    })
  }

  selectIndex = (totalIndex, selectingNumber) => {
    let randomIndexArray = []
    for (let i = 0; i < selectingNumber; i++) {
      //check if there is any duplicate index
      let randomNum = Math.floor(Math.random() * totalIndex)
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum)
      } else {
        //if the randomNum is already in the array retry
        i--
      }
    }
    return randomIndexArray
  }

  render() {
    return (
      <div className='Aside'>
        <div className='main-right-inner'>
          <div className='main-right__my-account-container'>
            <div className='main-right__my-profile-container'>
              <img alt='My profile' src='images/eunjinlee/myprofile.JPG' />
            </div>
            <div className='main-right__my-profile-info-box'>
              <a className='main-right__my-id user-link'>workoutbutlazy</a>
              <p className='main-right__my-username'>이은진 Eunjin Lee</p>
            </div>
            <a href='#' className='main-right__switch'>
              Switch
            </a>
          </div>
          <div className='main-right__suggestions-container'>
            <div className='main-right__suggestions-title'>
              <p>Suggestions For You</p>
              <a>See All</a>
            </div>
            <ul
              className='main-right__suggestion-list'
              id='suggestionContainer'
            >
              {this.selectIndex(24, 5).map((index) => {
                return (
                  <li className='suggestion-user' key={UserInfos[index].userId}>
                    <div
                      className={
                        !UserInfos[index].newStory
                          ? 'suggestion-user-container new-story-false'
                          : 'suggestion-user-container'
                      }
                    >
                      <img alt='User profile' src={UserInfos[index].profile} />
                    </div>
                    <div className='suggestion-user-info'>
                      <a>{UserInfos[index].userId}</a>
                      <p>{UserInfos[index].status}</p>
                    </div>
                    <p
                      id={UserInfos[index].id}
                      className='follow-btn'
                      onClick={() => this.followUser(UserInfos[index].userId)}
                    >
                      {this.state.following ? 'Following' : 'Follow'}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
          <footer>
            <p>
              About Help Press API Jobs Privacy Terms Locations Top Accounts
              Hashtags Language
            </p>
            <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default Aside
