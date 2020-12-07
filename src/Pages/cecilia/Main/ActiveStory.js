import React from "react";
import "./ActiveStory.scss"

//map 돌릴준비 !
const ACTIVESTORY = [
  { id: "wecode", src1: "images/cecilia/story.png", src2: "images/cecilia/wecode.png" },
  { id: "mina_.___._", src1: "images/cecilia/story.png", src2: "images/cecilia/mina.jpg" },
  { id: "daehoieem", src1: "images/cecilia/story.png", src2: "images/cecilia/daeho.jpg" },
  { id: "kingth_man", src1: "images/cecilia/story.png", src2: "images/cecilia/taehyun.jpg" },
  { id: "wecode_founder", src1: "images/cecilia/story.png", src2: "images/cecilia/eunwoo.jpg" },
  { id: "soral215", src1: "images/cecilia/story.png", src2: "images/cecilia/byunggon.png" }
]


class ActiveStory extends React.Component {
  render() {
    return (
      <>
        {
          ACTIVESTORY.map((el) => {
            return (
              <div className="activeStory">
                <img className="storyBorder" src={el.src1} />
                <img className="storyImg" src={el.src2} />
                <p className="activeId">{el.id}</p>
              </div>
            );
          })
        }
      </>
    )
  }
}

export default ActiveStory;
