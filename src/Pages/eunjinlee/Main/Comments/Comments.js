import React from 'react'
import Comment from './Comment/Comment'
import './Comments.scss'

class Comments extends React.Component {

  constructor() {
    super()
    this.state = {
      commentList: [],
      commentValue: '',
      openComments: false,
    }
  }
  
  componentDidMount = () => {
    fetch('http://localhost:3000/data/data-eunjinlee.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          commentList: data.commentsData
        })
      })
  }

  viewComments = () => {
    this.setState({
      openComments: !this.state.openComments
    })
  }

  getInputValue = (e) => {
    this.setState({
      commentValue: e.target.value.trim(),
    })
  }

  addComment = (e) => {
    e.preventDefault()
    const { commentList } = this.state
    const newComment = {
      id: commentList.length + 1,
      userId: 'workoutbutlazy', 
      text: this.state.commentValue, 
      like: false,
    }
    this.setState({
      commentList: [...commentList, newComment],
      value: '',
    })
    e.target.reset()
  }

  removeComment = (id) => {
    const filteredComments = this.state.commentList.filter((comment) => comment.id !== id)
    this.setState({commentList: filteredComments})
  }

  likeComment = (id) => {
    const newComment = this.state.commentList.map((comment) => {
      if (comment.id === id) {
        comment.like = !comment.like
        }
      return comment
    })
    this.setState({commentList: newComment})
  }

  render() {
    const { commentList, openComments } = this.state
    const { viewComments, removeComment, likeComment, addComment, getInputValue } = this
    const isActiveBtn = this.state.commentValue

    return (
      <div className='Comments'>
        <div className='commentsContainer'>
          <p 
            className='viewAll'
            onClick={viewComments}>
            {openComments ? "Hide comments" : `View ${commentList.length === 1 ? '' : 'all'} ${commentList.length} comment${commentList.length === 1 ? '' : 's'}`}
          </p>
          <ul className={openComments ? 'view' : ''}>
            {commentList.map((comment, index) => {
              return (  
                <Comment 
                  key={index}
                  id={comment.id}
                  userId={comment.userId}
                  text={comment.text}
                  like={comment.like}
                  removeComment={removeComment}
                  likeComment={likeComment}/>              
              )
            })}
          </ul>
        </div>
        <p className='createdAt'>9 HOURS AGO</p>
        <form onSubmit={addComment}>
          <input
            type='text'
            placeholder='Add a comment...'
            onChange={getInputValue}/>
          <button className={isActiveBtn ? 'active' : ''}>Post</button>
        </form>
      </div>
    )
  }
}

export default Comments
