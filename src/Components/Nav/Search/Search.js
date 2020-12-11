import React from 'react'
import './Search.scss'
import UserInfos from '../../../Pages/eunjinlee/Main/UserInfos'


class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      searchList: [],
      value: '',
    }
  }

  getInputValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const isOpenContainer = this.state.value
    const isActiveInput = this.state.value
    const searchText = this.state.value
    const filteredList = UserInfos.filter((userInfo) => {
      if (userInfo.userId.toLowerCase().includes(searchText.toLowerCase())
        || userInfo.name.toLowerCase().includes(searchText.toLowerCase())) {
        return userInfo
      }
    })

    return(
      <div className='Search'>
        <input
          type='text'
          className={isActiveInput ? 'active' : ''}
          placeholder='Search'
          onChange={this.getInputValue}/>
        <i className='fas fa-search'/>
        <ul
          className={!isOpenContainer || filteredList.length === 0 ? 'search-list-container' : 'search-list-container open' }>
          {
            filteredList.map((userInfo, index) => {
              return (
                <li key={index}>
                  <div className="image-container">
                    <img
                      alt="User profile"
                      src={userInfo.profile}/>
                  </div>
                  <div className="info-container">
                    <span>{userInfo.userId}</span>
                    <p>{userInfo.name}</p>
                  </div>
                </li>
              )
            })
          }
          
        </ul>
      </div>
    )
  }
}

export default Search