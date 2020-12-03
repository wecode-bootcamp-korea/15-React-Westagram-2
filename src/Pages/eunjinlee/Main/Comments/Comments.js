import React from 'react'
import './Comments.scss'

class Comments extends React.Component {
  render() {
    return (
      <div className='Comments'>
        <div className='comments-container'>
          <p className='comment__view-all' id='comment-view-all'>
            {' '}
          </p>
          <ul className='comment__list' id='comment-list'></ul>
        </div>
        <p className='feed__created-at'>9 HOURS AGO</p>
        <form className='comment-form-container' id='comment-form'>
          <input
            className='comment__input'
            id='comment-input'
            type='text'
            placeholder='Add a comment...'
          />
          <button className='comment__post-button' id='comment-btn'>
            Post
          </button>
        </form>
      </div>
    )
  }
}

export default Comments
