import React from "react";
import "./Comments.scss";

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      heart: false,
    };
  }
    render() {
    const { comm } = this.props;
    return (
      <li className="feedCommentLists">
        <div className="feedCommentList">
          <span>{comm.userId}</span>
          <span className="text">{comm.content}</span>
        </div>
      </li>
    );
  }
}

export default CommentList;