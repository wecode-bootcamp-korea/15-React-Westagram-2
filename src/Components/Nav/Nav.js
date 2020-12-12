import React from 'react'
import { withRouter } from 'react-router-dom';
import Search from './Search/Search'
import './Nav.scss' 

class Nav extends React.Component {

  constructor() {
    super()
    this.state = {
      isMenuOpen : false,
    }
  }

  toggleMenuBtn = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  logOut = () => {
    this.props.history.push("/login-eunjinlee")
  }

  render() {
    const { isMenuOpen } = this.state
    const { toggleMenuBtn, logOut } = this

    return (
      <nav className='Nav'>
        <div className='navContainer'>
          <img alt='Instagram logo' src='/images/eunjinlee/instagram-logo.png'/>
          <Search />
          <div className='navIcons'>
            <img alt='Home' src='/images/eunjinlee/home.png'/>
            <img alt='Direct Message' src='/images/eunjinlee/message.png'/>
            <img alt='Trend' src='/images/eunjinlee/trend.png'/>
            <img alt='Heart' src='/images/eunjinlee/heart.png'/>
            <img
              alt='My page'
              src='https://images.unsplash.com/photo-1588007375181-2f890dc38ec3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              onClick={toggleMenuBtn}/>
            <div
              className={isMenuOpen ? 'navMenu open' : 'navMenu'}
              onClick={toggleMenuBtn}>
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
                <li onClick={logOut}>Log out</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)
