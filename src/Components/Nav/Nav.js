import React from 'react'
import './Nav.scss'
import Search from './Search/Search'

class Nav extends React.Component {

  constructor() {
    super()
    this.state = {
      menuOpen : false,
    }
  }

  openMenuBtn = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {

    const isMenuOpen = this.state.menuOpen

    return (
      <header className='Nav'>
        <div className='nav'>
          <img
            src='/images/eunjinlee/instagram-logo.png'
            href='#'
            alt='westagram-logo'/>
          <Search />
          <div className='nav__menu-container'>
            <img alt='Home' src='/images/eunjinlee/home.png' />
            <img
              src='/images/eunjinlee/message.png'
              alt='Direct Message'
            />
            <img src='/images/eunjinlee/trend.png' alt='Trend' />
            <img src='/images/eunjinlee/heart.png' alt='Heart' />
            <img
              src='https://images.unsplash.com/photo-1588007375181-2f890dc38ec3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              alt='My page'
              onClick={this.openMenuBtn}
            />
            <div
              className={isMenuOpen ? 'nav__profile-menu-container open' : 'nav__profile-menu-container'}
              onClick={this.openMenuBtn}
            >
              <ul id='navContainer'>
                <li>
                  <img src='/images/eunjinlee/profile.png' alt='Profile icon' />
                  Profile
                </li>
                <li>
                  <img src='/images/eunjinlee/bookmark.png' alt='Bookmark icon' />
                  Saved
                </li>
                <li>
                  <img src='/images/eunjinlee/settings.png' alt='Settings icon' />
                  Settings
                </li>
                <li>Log out</li>
              </ul>
            </div>
          </div>
        </div>
        {/*<ul className='search-list__container' id='search-list-container'></ul>*/}
      </header>
    )
  }
}

export default Nav
