import React, { Component } from 'react'
import './Article.scss'

class Article extends Component {
  render() {
    return (
      <div className='main-left'>
        <section className='feeds'>
          <article className='main__article'>
            <div className='feeds__top'>
              <div className='profile'>
                <img src='/images/byulyi/profile_1.jpg' alt='profile' />
                <div className='profile__name'>
                  <a href='#!'>Boris</a>
                  <p>Pullman, Washington</p>
                </div>
              </div>
              <img
                src='/images/byulyi/more_icon.png'
                alt='more icon'
                className='more'
              />
            </div>
            <img
              src={'/images/byulyi/feed_img2.jpg'}
              alt='feedimage'
              className='feedImg'
            />
            <div className='feeds__action'>
              <div className='action__left'>
                <img
                  src='/images/byulyi/heart.png'
                  alt='like'
                  className='likeBtn'
                />
                <img src='/images/byulyi/speech-bubble.png' alt='comment' />
                <img src='/images/byulyi/send.png' alt='dm' />
              </div>
              <img src='/images/byulyi/bookmark.png' alt='bookmark' />
            </div>
            <div className='feeds__like'>
              <a href='#!'>840,088 likes</a>
            </div>
            <div className='feeds__description'>
              <p>
                <a href='#!'>Boris</a>I’m sorry what... can’t hear you through
                my curtain ears!
              </p>
            </div>
            <div className='feeds__comments'>
              <ul className='comments'>
                <li>
                  <a href='#!'> taterandcollette</a>
                  <span className='comment__text'>Adorable 💙💙💙</span>
                  <span className='comment__like'>
                    <img
                      src='/images/byulyi/heart.png'
                      alt='like icon'
                      className='like__img'
                    />
                  </span>
                  <span className='comment__delete'>
                    <img
                      src='/images/byulyi/remove.png'
                      alt='remove icon'
                      className='delete'
                    />
                  </span>
                </li>
                <li>
                  <a href='#!'> bassetpoppy </a>
                  <span className='comment__text'>
                    Your curtains are sooo pretty!! 😍
                  </span>
                  <span className='comment__like'>
                    <img
                      src='/images/byulyi/heart.png'
                      alt='like icon'
                      className='like__img'
                    />
                  </span>
                  <span className='comment__delete'>
                    <img src='/images/byulyi/remove.png' alt='remove icon' />
                  </span>
                </li>
              </ul>
            </div>
            <div className='feeds__update'>
              <span>2 HOURS AGO</span>
            </div>
            <form className='feeds__comments__form'>
              <textarea
                className='comment__input'
                placeholder='Add a comment...'
              ></textarea>
              <button className='comment__btn'>Post</button>
            </form>
          </article>
        </section>
      </div>
    )
  }
}

export default Article
