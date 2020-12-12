import React from 'react'
import Nav from '../../../Components/Nav/Nav'
import Stories from './Stories/Stories'
import Feeds from './Feeds/Feeds'
import Aside from './Aside/Aside'
import './Main.scss' 

class MainEunjinlee extends React.Component {
  render() {
    return (
      <div className='Main'>
        <Nav />
        <main>
          <div className='leftRightContainer'>
            <div className='leftContainer'>
              <Stories />
              <Feeds />
            </div>
            <Aside />
          </div>
        </main>
      </div>
    )
  }
}

export default MainEunjinlee