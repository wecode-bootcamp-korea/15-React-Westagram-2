import React from 'react'
import './Nav.scss'

class Nav extends React.Component {
  render() {
    return (
      <header className='Nav'>
        <div className='nav'>
          <img
            src='/images/eunjinlee/instagram-logo.png'
            href='#'
            className='westragram-logo'
            alt='westagram-logo'
          />
          <div className='nav__search-container'>
            <input
              type='text'
              className='nav__search-input'
              id='nav-search-input'
              placeholder='Search'
            />
            <i className='fas fa-search nav__search-icon'></i>
            <ul
              className='search-list-container'
              id='search-list-container'
            ></ul>
          </div>
          <div className='nav__menu-container'>
            <img alt='Home' className='nav__home' src='/images/eunjinlee/home.png' />
            <img
              src='/images/eunjinlee/message.png'
              alt='Direct Message'
              className='nav__direct-message'
            />
            <img src='/images/eunjinlee/trend.png' alt='Trend' className='nav__trend' />
            <img src='/images/eunjinlee/heart.png' alt='Heart' className='nav__heart' />
            <img
              src='https://images.unsplash.com/photo-1588007375181-2f890dc38ec3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              alt='My page'
              className='nav__my-posts'
              id='openMenuBtn'
            />
            <div
              className='nav__profile-menu-container'
              id='navContainerOutside'
            >
              <ul className='nav__profile-menu' id='navContainer'>
                <li className='nav__profile-menu-item'>
                  <img src='/images/eunjinlee/profile.png' alt='Profile icon' />
                  Profile
                </li>
                <li className='nav__profile-menu-item'>
                  <img src='/images/eunjinlee/bookmark.png' alt='Bookmark icon' />
                  Saved
                </li>
                <li className='nav__profile-menu-item'>
                  <img src='/images/eunjinlee/settings.png' alt='Settings icon' />
                  Settings
                </li>
                <li className='nav__profile-menu-item'>Log out</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className='search-list__container' id='search-list-container'></ul>
      </header>
    )
  }
}

export default Nav
