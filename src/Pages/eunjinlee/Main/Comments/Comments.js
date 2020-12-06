import React from 'react'
import './Comments.scss'

class Comments extends React.Component {

  constructor() {
    super()
    this.state = {
      commentList: [
        {
          id: 13542334,
          userId: 'seulaaa_', 
          text: '담주에는 같이 고기 먹으러 갈 수 있겠다!!', 
          like: false,
        },
        {
          id: 94834534,
          userId: 'aglioolive_', 
          text: '근데 사진은 누구?', 
          like: false,
        },
        {
          id: 45934823,
          userId: 'tessssa', 
          text: '그렇게 고생하더니ㅠㅠ 드디어 그날이 다가왔구나 ㅎㅎ멋있게 찍고 와여!', 
          like: false,
        },
      ],
      value: '',
      openComments: false,
    }
  }

  viewComments = () => {
    this.setState({
      openComments: !this.state.openComments
    })
  }

  getInputValue = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat([
        {
          id: Math.floor(Math.random() * 90000000) + 10000000,
          userId: 'workoutbutlazy', 
          text: this.state.value, 
          like: false,
        }
      ]),
      value: '',
    })
  }

  enterKeyComment = (e) => {
    if (e.key === "Enter" ) {
      this.addComment()
    }
  }

  // removeComment = (id) => {
  //   const filteredComments = this.state.commentList.filter((comment) => comment.id !== id)
  //   this.setState({commentList: filteredComments})
  // }

  likeComment = (like, index) => {
    let likedCommentList = [...this.state.commentList]
    this.setState(  [...this.state.commentList], likedCommentList)
  }
  //특정 인덱스에만 접근해서 setState하는 거 대체 어떻게 하지?


  render() {
    console.log(this.state.commentList[2])
    const { commentList, openComments} = this.state
    const isActiveBtn = this.state.value

    return (
      <div className='Comments'>
        <div className='comments-container'>
          <p 
            className='comment__view-all'
            onClick={this.viewComments}>
            View {commentList.length === 1 ? '' : 'all'} {commentList.length} comment{commentList.length === 1 ? '' : 's'}
          </p>
          <ul className={!openComments ? 'comment__list' : 'comment__list view'}>
            {commentList.map((comment, index) => {
              return (                
                <li className="comment__content-list" key={comment.id}>
                  <div>
                    <span>
                      <a>{comment.userId}</a>{comment.text}
                    </span>
                    <i 
                      className="fas fa-times" 
                      onClick={() => this.removeComment(comment.id)}>
                    </i>
                  </div>
                  <i 
                    className={commentList[index].like ? "fas fa-heart comment__heart" : "far fa-heart comment__heart"}
                    onClick={() => this.likeComment(comment.like, index)}>
                  </i>
                </li>
              )
            })}
          </ul>
        </div>
        <p className='feed__created-at'>9 HOURS AGO</p>
        <form className='comment-form-container' id='comment-form'>
          <input
            id='comment-input'
            type='text'
            placeholder='Add a comment...'
            onChange={this.getInputValue}
            onKeyPress={this.enterKeyComment}/>
          <button className={isActiveBtn ? 'active' : ''}>Post</button>
        </form>
      </div>
    )
    
  }
}

export default Comments
