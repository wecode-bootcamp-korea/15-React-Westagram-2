import React from 'react'
import Comments from '../Comments/Comments'
import './Feeds.scss'

class Feeds extends React.Component {

  constructor() {
    super()
    this.state = {
      articleOpen: false
    }
  }

  openArticle = () => {
    this.setState({
      articleOpen: !this.state.articleOpen
    })
  }

  render() {
    const isArticleOpen = this.state.articleOpen
    return (
      <div className='Feeds'>
        <article className='feed-container'>
          <header className='feed__header'>
            <div className='feed__user-info-box'>
              <img
                src='https://images.unsplash.com/photo-1516876711927-904e13c2a8d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80'
                alt='Account'
                className='feed__user-profile'/>
              <div className='feed__user-status-box'>
                <a>eunjinlog</a>
                <p>Seoul, Korea</p>
              </div>
            </div>
            <img
              alt='more-menu'
              src='/images/eunjinlee/more.png'
              className='feed__more-button'/>
          </header>
          <img
            alt='Feed'
            src='/images/eunjinlee/myfeed.JPG'
            className='feed__posts'/>
          <section className='feed-content'>
            <div className='feed__icons-container'>
              <div className='feed__icon-box-left'>
                <img alt='Heart' src='/images/eunjinlee/heart.png'/>
                <img alt='Reply' src='/images/eunjinlee/bubble.png'/>
                <img alt='Message' src='/images/eunjinlee/message.png'/>
              </div>
              <div className='feed__icon-box-right'>
                <img
                  alt='Bookmark'
                  src='/images/eunjinlee/bookmark.png'
                  className='feed__icon-bookmark'/>
              </div>
            </div>
            <div className='feed__likes-container'>
              <img
                alt='Profile'
                src='https://images.unsplash.com/photo-1605553042899-7334093d937d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
              <div>
                <p>
                  Liked by{' '}
                  <a href='#' className='user-link'>
                    workoutbutlazy
                  </a>{' '}
                  and{' '}
                  <a href='#' className='user-link'>
                    26 others
                  </a>{' '}
                </p>
              </div>
            </div>
            <article className='feed__article-container'>
              <span>
                <a className={isArticleOpen ? 'open' : ''}> eunjinlog </a>
                <p className={isArticleOpen ? 'feed__article open' : 'feed__article'}>
                  내일은 바로바로 바디프로필 찍는 날..!! 70일간의 고생이 빛을 발하는 날이다. 요 며칠 촬영 의상이랑 화장 어떻게 할지 엄청 고민하고 엎다가 이제 결정했다 후후.. 생애 처음으로 다이어트를 해 봤는데, 생각보다 그렇게 힘들지는 않았던 것 같다! 최대 56kg에서 현재 46kg 찍고 수분조절 중이다. 맛있는 거 다같이 먹으러 가서 편의점 닭가슴살 주섬주섬 뜯고 있는 나를 옆에서 응원해주신 부모님 그리고 친구들 너무 고맙다링,, 내일 촬영 끝나고 치킨 조진다!!!!
                </p>
                <span
                  className={isArticleOpen ? 'show-article open' : 'show-article'}
                  onClick={this.openArticle}>
                  {isArticleOpen ? 'hide' : 'more'}
                </span>
              </span>
            </article>
            <Comments />
          </section>
        </article>
      </div>
    )
  }
}

export default Feeds
