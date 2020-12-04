import React from 'react'
import Nav from '../../../Components/Nav/Nav'
import './Main.scss'
import Article from './Components/Article/Article'

const STORY = [
  { id:1, profileImg: "images/byulyi/profile_2.jpg", userName:'happydog_b', time:'1분전'},
  { id:2, profileImg: "images/byulyi/profile_3.jpg", userName:'happydog_c', time:'30분전'},
  { id:3, profileImg: "images/byulyi/profile_4.jpg", userName:'happydog_d', time:'1시간전'},
  { id:0, profileImg: "images/byulyi/profile_5.jpg", userName:'happydog_a', time:'15분전' },
];

const RECOMMEND_USER = [
  { id:1, profileImg: "images/byulyi/profile_6.jpg", userName:'happydog_e', ment:'happydog_a님 외 2명이 ...'},
  { id:2, profileImg: "images/byulyi/profile_7.jpg", userName:"happydog_f", ment:'happydog_b님 외 2명이 ...'},
  { id:3, profileImg: "images/byulyi/profile_8.jpg", userName:"happydog_g", ment:"happydog_c님 외 2명이 ..."},
];

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
                {STORY.map((element, index) => {
                    return (
	                <div className='story__recommend' key={index}>
                    <div className='story__img-wrap'>
                      <img src={element.profileImg} alt='profile'/>
                    </div>
                    <div className='profile__name'>
                      <a href='#!'>{element.userName}</a>
                      <p>{element.time}</p>
                   </div>
		              </div>
                  );
                  })}
              </div>
              <div className='aside__users'>
                <div className='users__header'>
                  <span>회원님을 위한 추천</span>
                  <a href='#!'>모두 보기</a>
                </div>

              {
                  RECOMMEND_USER.map((element, index) => {
                    return (
                      <div className='user__recommend' key={index}>
                        <div className='user__img-wrap'>
                          <img src={element.profileImg} alt='profile'/>
                        </div>
                        <div className='profile__name'>
                          <a href='#!'>{element.userName}</a>
                          <p>{element.ment}</p>
                        </div>
                        <div className='follow-btn'>
                          <a href='#!'>팔로우</a>
                        </div>
                      </div>
                    )
                  })
            }
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
