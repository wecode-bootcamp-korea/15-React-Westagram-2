import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';
import './Main.scss';

class MainCecilia extends Component {
  render() {
    return (
      <div className="Main">
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
                <img id="feedImg" alt="img1" src="images/cecilia/feedImg1.jpeg" />
                <div className="contentsBox">
                  <div className="contentImgContainer">
                    <img id="contentHeart" alt="contentHeart" src="images/cecilia/heart.png" />
                    <img id="contentComment" alt="contentComment" src="images/cecilia/commentIcon.png" />
                    <img id="contentShare" alt="contetnShare" src="images/cecilia/send.png" />
                  </div>
                  <p className="like">좋아요 200개</p>
                  <span className="contentId"> devCecy</span>
                  <span className="content"> 제주도 바다에서 사진찍기!👻</span>
                  <p className="moreComents">댓글 모두보기</p>
                  <div className="uploadCommentContainer">
                    <ul className="uploadComment">
                    </ul>
                  </div>
                  <div className="commentContainer">
                    <input className="commentBox" placeholder="댓글달기..." style={{ onKeyDown: "onKeyDown()" }} />
                    <button className="commentBtn">게시</button>
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