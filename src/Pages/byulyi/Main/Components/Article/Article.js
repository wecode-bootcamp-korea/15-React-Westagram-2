import React, { Component } from 'react'
import Comments from "../Comments/Comments"
import './Article.scss'

class Article extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (e) => {
    e.preventDefault()
    const userCmt = this.inputRef.current.value
    userCmt && this.props.onAddCmt(userCmt);
    this.formRef.current.reset();
  }
  handleEnter = (e) => {
    if(e.key === "Enter"){
    const userCmt = this.inputRef.current.value
    userCmt && this.props.onEnter(userCmt);
    this.formRef.current.reset();
    }
  }

  render() {
    const { comments } = this.props;
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
              <Comments comments={comments} onDeleteCmt={this.props.onDeleteCmt} onLikeCmt={this.props.onLikeCmt}/>
            </div>
            <div className='feeds__update'>
              <span>2 HOURS AGO</span>
            </div>
            <form className='feeds__comments__form' onSubmit={this.onSubmit} ref={this.formRef}>
              <textarea
                ref={this.inputRef}
                className='comment__input'
                placeholder='Add a comment...'
                onKeyPress={this.handleEnter}
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
