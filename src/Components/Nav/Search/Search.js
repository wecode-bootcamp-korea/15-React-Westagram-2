import React from 'react'
import './Search.scss'

class Search extends React.Component {

  constructor() {
     super()
     this.state = {
       searchList: [],
       searchValue: '',
     }
   }

  getInputValue = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/userInfos-eunjinlee.json') 
      .then(response => response.json())
      .then(data => {
        this.setState({
          searchList: data.userInfos
        })
      })
  }

  render() {
    const { searchList, searchValue } = this.state
    const filteredList = searchList.filter((userInfo) => {
      if (userInfo.userId.toLowerCase().includes(searchValue.toLowerCase())
        || userInfo.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return userInfo
      }
    })

    return(
      <div className='Search'>
        <input
          type='text'
          className={searchValue ? 'active' : ''}
          placeholder='Search'
          onChange={this.getInputValue}/>
        <i className='fas fa-search'/>
        <ul
          className={!searchValue || searchList.length === 0 ? 'searchListContainer' : 'searchListContainer open'}>
          {
            filteredList.map((userInfo, index) => {
              return (
                <li key={index}>
                  <div className="image">
                    <img
                      alt="User profile"
                      src={userInfo.profile}/>
                  </div>
                  <div className="info">
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