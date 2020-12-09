import React from 'react'
import './Aside.scss'
import Recommend from './Recommend/Recommend'

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  componentDidMount = () => {
    const selectIndex = (totalIndex, selectingNumber) => {
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

    fetch('http://localhost:3000/data/userInfos-eunjinlee.json', {
      method: 'GET'
    }).then(response => response.json())
      .then(data => {
        this.setState({
          users: selectIndex(24,5).map((item) => data.userInfos[item])
        })
      })
  }

  followUser = (id) => {
    const newFollowingList = this.state.users.map((user) => {
      if (user.userId === id) {
        user.isFollowing = !user.isFollowing
      }
      return user
    })
    this.setState({users: newFollowingList})
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
              <a>workoutbutlazy</a>
              <p>이은진 Eunjin Lee</p>
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
              {this.state.users.map((user) => {
                return (
                  <Recommend 
                    key={user.userId}
                    id={user.userId}
                    userId={user.userId}
                    newStory={user.newStory}
                    profile={user.profile}
                    status={user.status}
                    isFollowing={user.isFollowing}
                    followUser={this.followUser}/>
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
