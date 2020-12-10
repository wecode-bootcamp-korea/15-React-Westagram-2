import React from 'react'
import Nav from '../../../Components/Nav/Nav'
import Article from './Components/Article/Article'
import { data } from "./data/data"
import './Main.scss'


class Main extends React.Component {
  state = {
    comments: []
  }

  componentDidMount() {
    this.setState({
      comments: data.COMMENTS
    })
  }

  handleEnter = (userCmt) => {
      this.handleAddCmt(userCmt);
  }

  handleAddCmt = (userCmt) => {
    const comments = [...this.state.comments, {id: this.state.comments.length+1, userId: 'Boris', userCmt, cmtLike:false}];
    this.setState({comments});
  }

  handleDeleteCmt = (comment) => {
    const comments = this.state.comments.filter((element) => element.id !== comment.id)
    this.setState({comments});
  }

  handleLikeCmt = (comment) => {
   const comments = this.state.comments.map((item) => {
     if(item.id === comment.id){
       if(!item.cmtLike){
         return {...comment, cmtLike : true}
       } else {
         return {...comment, cmtLike : false}
       }
     }
     return item;
   })
   this.setState({comments})
  }

  render() {
    return (
      <>
        <Nav />
        <main className='main'>
          <div className='main-wrap'>
            <Article comments={this.state.comments} onAddCmt={this.handleAddCmt} onDeleteCmt={this.handleDeleteCmt} onEnter={this.handleEnter} onLikeCmt={this.handleLikeCmt}/>
            <aside>
              <div className='header'>
                <div className='header__img-wrap'>
                  <img alt='profile' src='/images/byulyi/profile_1.jpg'  />
                </div>
                <div className='header__name'>
                  <a>Boris</a>
                  <p>Born on July 1, 2018. 🐶</p>
                </div>
              </div>
              <div className='aside__story'>
                <div className='story__header'>
                  <span>스토리</span>
                  <a>모두 보기</a>
                </div>
                {data.STORY.map((element, index) => {
                    return (
	                <div className='story__recommend' key={index}>
                    <div className='story__img-wrap'>
                      <img alt='profile' src={element.profileImg} />
                    </div>
                    <div className='profile__name'>
                      <a>{element.userName}</a>
                      <p>{element.time}</p>
                   </div>
		              </div>
                  );
                  })}
              </div>
              <div className='aside__users'>
                <div className='users__header'>
                  <span>회원님을 위한 추천</span>
                  <a>모두 보기</a>
                </div>

              {data.RECOMMEND_USER.map((element, index) => {
                    return (
                      <div className='user__recommend' key={index}>
                        <div className='user__img-wrap'>
                          <img alt='profile' src={element.profileImg} />
                        </div>
                        <div className='profile__name'>
                          <a>{element.userName}</a>
                          <p>{element.ment}</p>
                        </div>
                        <div className='follow-btn'>
                          <a>팔로우</a>
                        </div>
                      </div>
                    )
                  })
            }
              </div>
              <div className='aside__footer'>
                <ul>
                  <li>Instagram 정보</li>
                  <li>지원</li>
                  <li>홍보 센터</li>
                  <li>API</li>
                </ul>
                <ul>
                  <li>채용 정보</li>
                  <li>개인정보처리방침</li>
                  <li>약관</li>
                  <li>디렉터리</li>
                </ul>
                <ul>
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
