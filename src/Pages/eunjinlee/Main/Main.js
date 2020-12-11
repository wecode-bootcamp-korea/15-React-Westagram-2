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
        <main className='main'>
          <div className='main-left-right-container'>
            <div className='main-left-container'>
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