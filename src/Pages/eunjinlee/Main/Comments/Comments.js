import React from 'react'
import './Comments.scss'
import Comment from './Comment/Comment'
// import COMMENT from './data'

class Comments extends React.Component {

  constructor() {
    super()
    this.state = {
      commentList: [],
      value: '',
      openComments: false,
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     commentList: COMMENT,
  //   })
  // }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/data-eunjinlee.json', {
      method: 'GET'
    }).then(response => response.json())
      .then(response => {
        this.setState({
          commentList: response.data
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
      value: e.target.value.trim(),
    })
  }

  addComment = (e) => {
    e.preventDefault()
    this.setState({
      commentList: this.state.commentList.concat([
        {
          // id: Math.floor(Math.random() * 9000000) + 1000000,
          id: this.state.commentList.length + 1,
          userId: 'workoutbutlazy', 
          text: this.state.value, 
          like: false,
        }
      ]),
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
    console.log(id)
    this.setState({commentList: newComment})
  }

  render() {
    const { commentList, openComments } = this.state
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
                <Comment 
                  key={index}
                  id={comment.id}
                  userId={comment.userId}
                  text={comment.text}
                  like={comment.like}
                  removeComment={this.removeComment}
                  // getHeartIndex={this.getHeartIndex}
                  likeComment={this.likeComment}/>              
              )
            })}
          </ul>
        </div>
        <p className='feed__created-at'>9 HOURS AGO</p>
        <form 
          className='comment-form-container'
          onSubmit={this.addComment}>
          <input
            type='text'
            placeholder='Add a comment...'
            onChange={this.getInputValue}/>
          <button className={isActiveBtn ? 'active' : ''}>Post</button>
        </form>
      </div>
    )
    
  }
}

export default Comments
