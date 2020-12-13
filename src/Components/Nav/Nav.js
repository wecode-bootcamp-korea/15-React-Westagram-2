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
              src='/images/eunjinlee/myprofile.jpg'
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
