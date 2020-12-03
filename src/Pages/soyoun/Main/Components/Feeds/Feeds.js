import React, { Component } from 'react';
import './Feeds.scss';

class Feeds extends Component {
    render() {
        return (
            <div id="Feeds">
                <article>
                    <div className="feed-user">
                        <div className="feed-pro">
                            <img src="images/soyoun/feedImg1.png" alt="cat"/>
                            <p>mini_cat</p>
                        </div>
                        <div className="feed-more">
                            <img src="images/soyoun/more.svg" alt="옵션 더보기" />
                        </div>
                    </div>
                    <img src="images/soyoun/feedImg1.png" alt="img"/>
                    <div className="feed-post">
                        <div className="feed-post-mark">
                            <div className="post-motion">
                                <img src="images/soyoun/heart.svg" alt="좋아요" />
                                <img src="images/soyoun/speech-bubble.svg" alt="더보기" />
                                <button>
                                    <img src="images/soyoun/paper-plane.svg" alt="공유하기" />
                                </button>
                            </div>
                            <img src="images/soyoun/bookmark.svg" alt="more-feed-post" />   
                        </div>
                        <div className="board-message">
                            <div className="like-point">
                                좋아요 <span>777</span>개
                            </div>
                            <div className="board-message-upload-user-name">
                                <span>cat_m_mama</span>
                                몇 개월된 아가인가요~ 너무 귀여워요!
                            </div>
                            <div className="Date-time">
                                42분 전
                            </div>
                            <ul className="uploadComment">
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <form className="feed-comment-input">
                        <input placeholder="댓글 달기..."/>
                        <button type="submit">게시</button>
                    </form>
                </article>
            </div>
        );
    }
}

export default Feeds;