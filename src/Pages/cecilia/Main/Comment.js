import React from "react";
import "./Comment.scss"


// const COMMENTLIST = [
//   { id: 0, comment: "안녕 나는 1번!" },
//   { id: 1, comment: "안녕 나는 2번!" },
//   { id: 1, comment: "안녕 나는 3번!" },
//   { id: 0, comment: "안녕 나는 1번!" },
//   { id: 1, comment: "안녕 나는 2번!" },
//   { id: 1, comment: "안녕 나는 3번!" }
// ]

class Comment extends React.Component {
  render() {
    // console.log(this.props.commentValue)

    return (
      <div className="uploadedCommentContainer" >
        <ul>
          {/* {this.state.comments.map((el) => {
              (<li>{el.text}</li>)
          })} */}
        </ul>
      </div >
    )
  }
}

export default Comment;


// {COMMENTLIST.map((el) => {
//   return (<li>{el.comment}</li>)
// })}