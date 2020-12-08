import React from "react";
import "./Comment.scss"

class Comment extends React.Component {
  render() {
    const { newComment } = this.props

    return (
      <div className="uploadedCommentContainer" >
        <ul>
          {newComment.map((el) => {
            return (<li>{el.id}  {el.text}</li>)
          })
          }
        </ul>
      </div >
    )
  }
}

export default Comment;


// {COMMENTLIST.map((el) => {
//   return (<li>{el.comment}</li>)
// })}

{/* <li>{this.props.comment}</li> */ }

{/* {this.state.comments.map((el) => {
              (<li>{el.text}</li>)
          })} */}