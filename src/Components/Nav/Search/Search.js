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

    console.log(this.state.value)
    const isOpenContainer = this.state.value
    const isActiveInput = this.state.value
    const searchText = this.state.value
    const filteredList = UserInfos.filter((userInfo) => {
      if (userInfo.userId.toLowerCase().includes(searchText.toLowerCase())
        || userInfo.name.toLowerCase().includes(searchText.toLowerCase())) {
        return userInfo
      }
    })

    console.log(filteredList.length)

    return(
      <div className='Search'>
        <input
          type='text'
          className={isActiveInput ? 'active' : ''}
          placeholder='Search'
          onChange={this.getInputValue}/>
        <i className='fas fa-search'></i>
        <ul
          className={!isOpenContainer || filteredList.length === 0 ? 'search-list-container' : 'search-list-container open' }
          id='search-list-container'>
          {
            filteredList.map((userInfo, index) => {
              return (
                <li className="search-list__result" key={index}>
                  <div className="search-list__user-image-container">
                    <img
                      alt="User profile"
                      src={userInfo.profile} />
                  </div>
                  <div className="search-list__user-info-container">
                    <a>{userInfo.userId}</a>
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