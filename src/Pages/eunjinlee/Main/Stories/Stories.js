import React from 'react'
import './Stories.scss'
import UserInfos from '../UserInfos'

class Stories extends React.Component {

  selectIndex = (totalIndex, selectingNumber) => {
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

  render() {
    return (
      <div className='Stories' id='stories-container'>
        {this.selectIndex(24,15).map((index) => {
          return (
            <div className="story" key={index}>
              <div className="story__view-button">
                <img alt="User Profile" src={UserInfos[index].profile} />
              </div>
              <div className="story__user-id">
                {UserInfos[index].userId}
              </div>
            </div>
          )
        })}
      </div>  
    )
  }
}

export default Stories
