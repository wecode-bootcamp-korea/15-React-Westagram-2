import React, { Component } from "react";
import Comment from "./Comment"
// import { withRouter } from 'react-router-dom';
import './Main.scss';

class MainCecilia extends React.Component {
  constructor() {  //state 초기화 
    super();
    this.state = {
      newComment: "",
      btn: false,
      addLike: 0,
      likeButton: true,
      comments: [
        { text: "" }
      ]
    };
  }

  // 댓글 벨류 값 가져오기 
  commmentChange = (e) => {
    this.setState({
      newComment: e.target.value
    });
  }

  //추후 map을 돌리기 위해 댓글을 배열에 넣어주고 setState 해주는 함수 
  Addcommment = () => {
    const commentsArr = this.state.newComment;
    commentsArr.push({
      text: this.state.newComment
    })


    this.setState({
      comments: commentsArr
    })
  };

  // commmentUpload = (e) => {
  //   Addcommment();
  // }

  //좋아요 버튼함수 
  // addLike = () => {
  //   this.setState({
  //     addLike: 1,
  //     likeButton: !this.state.likeButton
  //   })
  // }

  addLike = () => {
    this.setState({
      addLike: 1,
      likeButton: !this.state.likeButton
    })

    if (this.state.likeButton === false)
      this.setState({
        addLike: 0
      })
  }

  render() {

    // console.log(this.state.newComment)

    return (
      <div className="Main" >
        <nav>
          <div className="navContainer">
            <img className="instaLogo" alt="instaLogo" src="images/cecilia/instagramLogo.png" />
            <div className="searchBarContainer">
              <input className="searchBar" type="text" placeholder="검색" />
              <img className="findIcon" alt="find" src="images/cecilia/find2.png" />
            </div>
            <ul className="iconContainer">
              <li><img alt="exploreImg" className="exploreImg" src="images/cecilia/explore.png" /></li>
              <li><img className="heartImg" src="images/cecilia/heart.png" /></li>
              <li><img className="profileImg" src="images/cecilia/profile.png" /></li>
            </ul>
          </div>
        </nav>
        <main>
          <div className="mainColunm">
            <div className="storyBar">
              <div className="activeStory">
                <img alt="storyBorder" className="storyBorder" src="images/cecilia/story.png" />
                <img alt="storyImg" className="storyImg" src="images/cecilia/wecode.png" />
                <p>wecode</p>
              </div>
              <div className="activeStory">
                <img className="storyBorder" src="images/cecilia/story.png" />
                <img className="storyImg" src="images/cecilia/mina.jpg" />
                <p>mina_.___._</p>
              </div>
              <div className="activeStory">
                <img className="storyBorder" src="images/cecilia/story.png" />
                <img className="storyImg" src="images/cecilia/daeho.jpg" />
                <p>daehoieem</p>
              </div>
              <div className="activeStory">
                <img className="storyBorder" src="images/cecilia/story.png" />
                <img className="storyImg" src="images/cecilia/taehyun.jpg" />
                <p>kingth_man</p>
              </div>
              <div className="activeStory">
                <img className="storyBorder" src="images/cecilia/story.png" />
                <img className="storyImg" src="images/cecilia/eunwoo.jpg" />
                <p>wecode_founder </p>
              </div>
              <div className="activeStory">
                <img className="storyBorder" src="images/cecilia/story.png" />
                <img className="storyImg" src="images/cecilia/byunggon.png" />
                <p>soral215</p>
              </div>
            </div>
            <div className="articleContainer">
              <article>
                <div className="articleHeader">
                  <img className="miniProfile" alt="miniProfile" src="images/cecilia/feedImg1.jpeg" />
                  <span className="mainId">devCecy</span>
                  <span className="more">...</span>
                </div>
                <img className="feedImg" alt="img1" src="images/cecilia/feedImg1.jpeg" />
                <div className="contentsBox">
                  <div className="contentImgContainer">
                    <button
                      className="likeButton"
                      onClick={this.addLike}>
                      <img
                        className="heartImg"
                        alt="heartImg"
                        src={this.state.likeButton ? "images/cecilia/heart.png" : "images/cecilia/fulledLike.png"} />
                    </button>
                    <img className="contentComment" alt="contentComment" src="images/cecilia/commentIcon.png" />
                    <img className="contentShare" alt="contetnShare" src="images/cecilia/send.png" />
                  </div>
                  <p className="like">좋아요 {this.state.addLike}개</p>
                  <span className="contentId"> devCecy</span>
                  <span className="content"> 제주도 바다에서 사진찍기!👻</span>
                  <p className="moreComents">댓글 모두보기</p>
                  <Comment />
                  {/* <div className="uploadCommentContainer">
                    <ul className="uploadComment">
                      <li>

                      </li>
                    </ul>
                  </div> */}
                  <div className="commentContainer">
                    <input
                      id="commentBox"
                      className="commentBox"
                      placeholder="댓글달기..."
                      // value={this.state.newComment}
                      onChange={this.commmentChange}
                      style={{ onKeyDown: "onKeyDown()" }} />
                    <button
                      className="commentBtn"
                      onClick={this.commmentUpload}
                    >게시</button>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="mainRight">
            <div className="sideMyProfile">
              <img className="sideProfile" alt="sideProfile" src="images/cecilia/feedImg1.jpeg" />
              <span className="sideId"> devCecy</span>
            </div>
            <p style={{ color: "gray" }}>회원님을 위한 추천</p>
            <div className="sideRecommendContainer">
              <div className="sideRecommend1">
                <img className="sideFollow" alt="sideProfile" src="images/cecilia/wecode.png" />
                <span className="sideFollowId"> wecode</span>
              </div>
              <span className="followText"> 팔로우</span>
            </div>
            <div className="sideRecommendContainer">
              <div className="sideRecommend2">
                <img className="sideFollow" alt="sideProfile" src="images/cecilia/aram.jpg" />
                <span className="sideFollowId">alioolive0206</span>
              </div>
              <span className="followText"> 팔로우</span>
            </div>
            <div className="sideRecommendContainer">
              <div className="sideRecommend3">
                <img className="sideFollow" alt="sideProfile" src="images/cecilia/doory.jpg" />
                <span className="sideFollowId">dooreplay</span>
              </div>
              <span className="followText"> 팔로우</span>
            </div>
            <div className="sideRecommendContainer">
              <div className="sideRecommend4">
                <img className="sideFollow" alt="sideProfile" src="images/cecilia/eunjin.jpg" />
                <span className="sideFollowId">workoutbutlazy</span>
              </div>
              <span className="followText"> 팔로우</span>
            </div>
            <div className="sideRecommendContainer">
              <div className="sideRecommend5">
                <img className="sideFollow" alt="sideProfile" src="images/cecilia/haram.jpg" />
                <span className="sideFollowId">kkram95</span>
              </div>
              <span className="followText"> 팔로우</span>
            </div>
            <div className="sideRecommendContainer">
              <div className="sideRecommend6" >
                <img className="sideFollow" alt="sideProfile" src="images/cecilia/jacob.jpg" />
                <span className="sideFollowId">jacob.lee19</span>
              </div>
              <span className="followText"> 팔로우</span>
            </div>
          </div>
        </main>
      </div>
    );
  }
}


export default MainCecilia;