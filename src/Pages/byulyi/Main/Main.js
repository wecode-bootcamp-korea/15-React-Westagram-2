import React from 'react'
import Nav from '../../../Components/Nav/Nav'
import './Main.scss'
import Article from './Components/Article/Article'

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main className='main'>
          <div className='main-wrap'>
            <Article />
            <aside>
              <div className='header'>
                <div className='header__img-wrap'>
                  <img src='/images/byulyi/profile_1.jpg' alt='profile' />
                </div>
                <div className='header__name'>
                  <a href='#!'>Boris</a>
                  <p>Born on July 1, 2018. 🐶</p>
                </div>
              </div>
              <div className='aside__story'>
                <div className='story__header'>
                  <span>스토리</span>
                  <a href='#!'>모두 보기</a>
                </div>
                <div className='story__recommend'>
                  <div className='story__img-wrap'>
                    <img src='/images/byulyi/profile_2.jpg' alt='profile' />
                  </div>
                  <div className='profile__name'>
                    <a href='#!'>happydog_a</a>
                    <p>15분전</p>
                  </div>
                </div>
                <div className='story__recommend'>
                  <div className='story__img-wrap'>
                    <img src='/images/byulyi/profile_3.jpg' alt='profile' />
                  </div>
                  <div className='profile__name'>
                    <a href='#!'>happydog_b</a>
                    <p>1분전</p>
                  </div>
                </div>
                <div className='story__recommend'>
                  <div className='story__img-wrap'>
                    <img src='/images/byulyi/profile_4.jpg' alt='profile' />
                  </div>
                  <div className='profile__name'>
                    <a href='#!'>happydog_c</a>
                    <p>30분전</p>
                  </div>
                </div>
                <div className='story__recommend'>
                  <div className='story__img-wrap'>
                    <img src='/images/byulyi/profile_5.jpg' alt='profile' />
                  </div>
                  <div className='profile__name'>
                    <a href='#!'>happydog_d</a>
                    <p>1시간전</p>
                  </div>
                </div>
              </div>
              <div className='aside__users'>
                <div className='users__header'>
                  <span>회원님을 위한 추천</span>
                  <a href='#!'>모두 보기</a>
                </div>
                <div className='user__recommend'>
                  <div className='user__img-wrap'>
                    <img src='/images/byulyi/profile_6.jpg' alt='profile' />
                  </div>
                  <div className='profile__name'>
                    <a href='#!'>happydog_e</a>
                    <p>happydog_a님 외 2명이 ...</p>
                  </div>
                  <div className='follow-btn'>
                    <a href='#!'>팔로우</a>
                  </div>
                </div>
                <div className='user__recommend'>
                  <div className='user__img-wrap'>
                    <img src='/images/byulyi/profile_7.jpg' alt='profile' />
                  </div>
                  <div className='profile__name'>
                    <a href='#!'>happydog_f</a>
                    <p>happydog_c님 외 2명이 ...</p>
                  </div>
                  <div className='follow-btn'>
                    <a href='#!'>팔로우</a>
                  </div>
                </div>
                <div className='user__recommend'>
                  <div className='user__img-wrap'>
                    <img src='/images/byulyi/profile_8.jpg' alt='profile' />
                  </div>
                  <div className='profile__name'>
                    <a href='#!'>happydog_g</a>
                    <p>happydog_d님 외 2명이 ...</p>
                  </div>
                  <div className='follow-btn'>
                    <a href='#!'>팔로우</a>
                  </div>
                </div>
              </div>
              <div className='aside__footer'>
                <ul className='guidline'>
                  <li>Instagram 정보</li>
                  <li>지원</li>
                  <li>홍보 센터</li>
                  <li>API</li>
                </ul>
                <ul className='guidline'>
                  <li>채용 정보</li>
                  <li>개인정보처리방침</li>
                  <li>약관</li>
                  <li>디렉터리</li>
                </ul>
                <ul className='guidline'>
                  <li>프로필</li>
                  <li>해시태그</li>
                  <li>언어</li>
                </ul>
                <div className='copyright'>© 2020 Instagram from Facebook</div>
              </div>
            </aside>
          </div>
        </main>
      </>
    )
  }
}

export default Main
