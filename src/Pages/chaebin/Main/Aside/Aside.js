import React from 'react'
import './Aside.scss'

class Aside extends React.Component {
  render() {
    return (
      <div class='Aside'>
        <div className='main-right-inner'>
          <div className='main-right__my-account-container'>
            <div className='main-right__my-profile-container'>
              <img
                alt='My profile'
                src='images/eunjinlee/myprofile.JPG'
              />
            </div>
            <div className='main-right__my-profile-info-box'>
              <div className='main-right__my-id user-link'>workoutbutlazy</div>
              <div className='main-right__my-username'>이은진 Eunjin Lee</div>
            </div>
            <a href='#' className='main-right__switch'>
              Switch
            </a>
          </div>
          <div className='main-right__suggestions-container'>
            <div className='main-right__suggestions-title'>
              <p>Suggestions For You</p>
              <a href='#'>See All</a>
            </div>
            <ul
              className='main-right__suggestion-list'
              id='suggestionContainer'
            ></ul>
          </div>
          <footer className='footer'>
            <p>
              About Help Press API Jobs Privacy Terms Locations Top Accounts
              Hashtags Language
            </p>
            <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default Aside
