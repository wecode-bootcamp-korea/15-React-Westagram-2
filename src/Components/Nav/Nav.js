import React from 'react'
import './Nav.scss'
import Search from './Search/Search'

class Nav extends React.Component {

  constructor() {
    super()
    this.state = {
      isMenuOpen : false,
    }
  }

  openMenuBtn = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    const { isMenuOpen } = this.state
    return (
      <header className='Nav'>
        <div className='nav'>
          <img alt='westagram-logo' src='/images/eunjinlee/instagram-logo.png'/>
          <Search />
          <div className='nav__menu-container'>
            <img alt='Home' src='/images/eunjinlee/home.png'/>
            <img alt='Direct Message' src='/images/eunjinlee/message.png'/>
            <img alt='Trend' src='/images/eunjinlee/trend.png'/>
            <img alt='Heart' src='/images/eunjinlee/heart.png'/>
            <img
              alt='My page'
              src='https://images.unsplash.com/photo-1588007375181-2f890dc38ec3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              onClick={this.openMenuBtn}/>
            <div
              className={isMenuOpen ? 'profile-menu-container open' : 'profile-menu-container'}
              onClick={this.openMenuBtn}>
              <ul>
                <li>
                  <img alt='Profile icon' src='/images/eunjinlee/profile.png'/>Profile
                </li>
                <li>
                  <img alt='Bookmark icon' src='/images/eunjinlee/bookmark.png'/>Saved
                </li>
                <li>
                  <img alt='Settings icon' src='/images/eunjinlee/settings.png'/>Settings
                </li>
                <li>Log out</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Nav
