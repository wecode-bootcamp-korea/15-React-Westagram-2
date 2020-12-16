import React from 'react'
import Story from './Story/Story'
import './Stories.scss'

class Stories extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  componentDidMount = () => {
    const selectIndex = (totalIndex, selectingNumber) => {
      let randomIndexArray = []
      for (let i=0; i<selectingNumber; i++) {   //check if there is any duplicate index
        let randomNum = Math.floor(Math.random() * totalIndex)
        if (randomIndexArray.indexOf(randomNum) === -1) {
          randomIndexArray.push(randomNum)
        } else { //if the randomNum is already in the array retry
          i--
        }
      }
      return randomIndexArray
    }
    
    fetch('http://localhost:3000/data/userInfos-eunjinlee.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: selectIndex(24,15).map((item) => data.userInfos[item])
        })
      })
  }

  render() {
    const { users } = this.state
    return (
      <div className='Stories'>
        {users.map((user) => {
          return (
            <Story 
              key={user.userId}
              profile={user.profile}
              userId={user.userId}/>
          )
        })}
      </div>  
    )
  }
}

export default Stories
