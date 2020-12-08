import React from "react";
import Comment from "./Comment"
import Nav from "../../../Components/Nav/Nav"
import ActiveStory from "./ActiveStory"
import SideRecommendContainer from "./SideRecommendContainer"
import './Main.scss';


class MainCecilia extends React.Component {
  constructor() {  //state 초기화 
    super();
    this.state = {
      btn: false,
      addLike: 0,
      likeButton: true,
      comment: "",
      newComments: [
        { id: "", text: "" },
      ],
      id: ""
    };
  }

  //로그인페이지로 가기 
  goToLogin = () => {
    this.props.history.push('/login-cecilia')
  }

  // 댓글 벨류 값 가져오기 
  commmentChange = (e) => {
    this.setState({
      comment: e.target.value
    });
  }

  //댓글 배열에 추가 
  addComments = () => {
    const commentsArr = this.state.newComments;
    commentsArr.push({ id: "devCecy", text: this.state.comment })

    this.setState({
      newComments: commentsArr,
      comment: "",
    })
  }


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

    return (
      <div className="Main" >
        <Nav />

        <main>
          <div className="mainColunm">
            <div className="storyBar">
              <ActiveStory />
              {/* <div className="activeStory">
                <img alt="storyBorder" className="storyBorder" src="images/cecilia/story.png" />
                <img alt="storyImg" className="storyImg" src="images/cecilia/wecode.png" />
                <p>wecode</p>
              </div> */}
              {/* <div className="activeStory">
                <img className="storyBorder" alt="storyBorder" src="images/cecilia/story.png" />
                <img className="storyImg" alt="storyImg" src="images/cecilia/mina.jpg" />
                <p>mina_.___._</p>
              </div>
              <div className="activeStory">
                <img className="storyBorder" alt="storyBorder" src="images/cecilia/story.png" />
                <img className="storyImg" alt="storyImg" src="images/cecilia/daeho.jpg" />
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
              </div> */}
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
                  <div>
                    <Comment id={this.state.id} newComment={this.state.newComments} />
                  </div>

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
                      value={this.state.comment}
                      onChange={this.commmentChange}
                      style={{ onKeyDown: "onKeyDown()" }} />
                    <button
                      className="commentBtn"
                      onClick={this.addComments}
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
            <SideRecommendContainer />
          </div>
        </main>
      </div >
    );
  }
}


export default MainCecilia;