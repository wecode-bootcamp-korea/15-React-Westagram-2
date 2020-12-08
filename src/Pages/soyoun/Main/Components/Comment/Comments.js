import React, { Component } from 'react';
import CommentList from './CommentList'
import COMMENTS from "./data";
import './Comments.scss';

const userID = "mini_L";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputComment: "",
          commentList: COMMENTS,
        };
      }   
      getInputValue = (e) => {
        const { id, value } = e.target;
        this.setState({
          [id]: value,
        });
      };
    
      addComment = (e) => {
        e.preventDefault();
        const { inputComment, commentList } = this.state;
        this.setState({
          inputComment: "",
          commentList: [
            ...commentList,
            {
              id: commentList.length + 1,
              userId: userID,
              content: inputComment,
            },
          ],
        });
      };

    render() {
        const { inputComment, commentList } = this.state;
        const activeBtn = inputComment.length > 1;

        const addListComment = commentList.map((comment) => {
        return (
                <CommentList
                comm={comment}
                key={comment.id}
                userId={userID}
                />
            );
        });

        return (
            <>
            <div id="Comment">
                <div className="Comment-mark">
                    <div className="Comment-motion">
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
                    <ul className="board-message-upload-user-name">
                        {addListComment}
                    </ul>
                    <div className="Date-time">
                        42분 전
                    </div>
                </div>
            </div>
            <form className="feed-comment-input"
            onSubmit={this.addComment}>
                <input 
                type="text" 
                name="comment" 
                id="inputComment"
                placeholder="댓글 달기..." 
                value={inputComment}
                onChange={this.getInputValue}/>
                <button 
                type="submit" 
                id="btn"
                className={activeBtn ? 'active' : ''}
                >게시</button>
            </form>
            </>
        );
    }
}

export default Comments;