import React from 'react'
import './Aside.scss'
import Recommend from './Suggestion/Suggestion'

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
        let randomNum = Math.floor(Math.random() * totalIndex)
        if (randomIndexArray.indexOf(randomNum) === -1) {
          randomIndexArray.push(randomNum)
        } else {
          i--
        }
      }
      return randomIndexArray
    }

    fetch('http://localhost:3000/data/userInfos-eunjinlee.json')
      .then(response => response.json())
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
        <div className='aside-inner'>
          <div className='my-account-container'>
            <div className='my-profile-container'>
              <img alt='My profile' src='images/eunjinlee/myprofile.JPG' />
            </div>
            <div className='my-profile-info-box'>
              <span>workoutbutlazy</span>
              <p>이은진 Eunjin Lee</p>
            </div>
            <button>Switch</button>
          </div>
          <div className='suggestions-container'>
            <div className='suggestions-title'>
              <p>Suggestions For You</p>
              <button>See All</button>
            </div>
            <ul>
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
            About Help Press API Jobs Privacy Terms Locations Top Accounts
            Hashtags Language <br/><br/>
            © 2020 INSTAGRAM FROM FACEBOOK
          </footer>
        </div>
      </div>
    )
  }
}

export default Aside
