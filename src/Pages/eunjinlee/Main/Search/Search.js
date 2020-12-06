import React from 'react'
import './Search.scss'
import UserInfos from '../UserInfos'


class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      searchList: [
        {
          userId: 'seulaaa_', 
          name: '이슬아',
          profile: 'https://media.vlpt.us/images/inyong_pang/post/f0ea605d-c2d9-460c-aedc-a0ec77e6759f/wecode.png',
        },
        {
          userId: 'mountainlover',
          name: 'Jason Conner',
          profile: 'https://images.unsplash.com/photo-1601588534291-a8042d825b45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
        },
        {
          userId: 'genius_swimmer',
          name: '지니어스 스위머 JinSeob',
          profile: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
          status: 'Followed by minii_workout + 3 more',
          newStory: false,
        },
      ],
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

    return(
      <div className='Search'>
        <input
          type='text'
          className={isActiveInput ? 'active' : ''}
          placeholder='Search'
          onChange={this.getInputValue}/>
        <i className='fas fa-search'></i>
        <ul
          className={isOpenContainer ? 'search-list-container open' : 'search-list-container' }
          id='search-list-container'>
          {
            UserInfos.map((userInfo) => {
              return (
                <li className="search-list__result">
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