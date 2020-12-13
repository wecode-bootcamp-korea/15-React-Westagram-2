import React from 'react'
import Comments from '../Comments/Comments'
import './Feeds.scss'

class Feeds extends React.Component {

  constructor() {
    super()
    this.state = {
      isArticleOpen: false
    }
  }

  render() {
    const { isArticleOpen } = this.state
    return (
      <div className='Feeds'>
        <article className='feedContainer'>
          <header>
            <div>
              <img
                alt='Account'
                src='https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1275&q=80'/>
              <div>
                <span>eunjinlog</span>
                <p>양평 두물머리</p>
              </div>
            </div>
            <img alt='more-menu' src='/images/eunjinlee/more.png'/>
          </header>
          <img
            alt='Feed'
            src='/images/eunjinlee/myfeed-2.JPG'
            className='feedPosts'/>
          <section className='feedContent'>
            <div className='icons'>
              <div>
                <img alt='Heart' src='/images/eunjinlee/heart.png'/>
                <img alt='Reply' src='/images/eunjinlee/bubble.png'/>
                <img alt='Message' src='/images/eunjinlee/message.png'/>
              </div>
              <div>
                <img
                  alt='Bookmark'
                  src='/images/eunjinlee/bookmark.png'
                  className='feed__icon-bookmark'/>
              </div>
            </div>
            <div className='likesContainer'>
              <img
                alt='Profile'
                src='https://images.unsplash.com/photo-1605553042899-7334093d937d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
              <div>
                Liked by{' '}<span>workoutbutlazy</span>{' '}
                and{' '}<span>26 others</span>{' '}
              </div>
            </div>
            <article className='articleContainer'>
              <span>
                <a className={isArticleOpen ? 'open' : ''}> eunjinlog </a>
                <p className={isArticleOpen ? 'open' : ''}>
                  남들 다 몇 번이고 가 봤다는 두물머리 난 이제서야 가 봤다. 그렇게 특별한 게 없는 것 같다가도 곳곳에 있는 포토스팟들이 내 마음을 움직이니 사진을 안 찍을 수밖에 없었다.
                  사랑하는 대학교 친구들과 졸업 후 처음으로 근교로 드라이브를 갔더니, 오랜만에 보는 건데도 마음이 그렇게 편할 수가 없더라. 두물머리가 아니라 다른 곳이어도 아마 너무나 행복한 시간을 보내고 왔을 거다. 왜냐면 우리는 지구 곳곳에 있는 가장 구석진 시골에서부터 번쩍번쩍 경이로운 관광지까지 함께 먹고 자고 생활하면서 서로 맘이 맞는 걸 누구보다도 잘 아는 사이니까. 생김새도 성격도 진로도 서로 너무나 다른 이 친구들과 추억을 쌓고 있다는 게 무척이나 신기하고 감사하다.
                </p>
                <button
                  className={isArticleOpen ? 'open' : ''}
                  onClick={() => this.setState({isArticleOpen: !isArticleOpen})}>
                  {isArticleOpen ? 'hide' : 'more'}
                </button>
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
