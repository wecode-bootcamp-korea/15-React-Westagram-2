import React from "react";
import "./Comment.scss"

class Comment extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {

  //   }
  // }

  //fetch함수 사용해서 데이터 가져오기. 아직 생김새가 익숙하진 않지만 눈과 손에 익히기. 
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/data.json', {
  //     method: 'GET'
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         commentList: res.data,
  //         commentValue: ''
  //       });
  //     });
  // }

  render() {

    const { newComment } = this.props;
    return (

      <div className="Comment" >
        <ul>
          {newComment.map((el) => {
            return (
              <li>{el.userName}  {el.content}</li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

export default Comment;
