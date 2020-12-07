import React from "react";
import "./SideRecommendContainer.scss"

//map 돌릴준비 !
const SIDERECOMMEND = [
  { id: "wecode", src: "images/cecilia/wecode.png" },
  { id: "dooreplay", src: "images/cecilia/doory.jpg" },
  { id: "workoutbutlazy", src: "images/cecilia/eunjin.jpg" },
  { id: "kkram95", src: "images/cecilia/haram.jpg" },
  { id: "jacob.lee19", src: "images/cecilia/jacob.jpg" },
  { id: "alioolive0206", src: "images/cecilia/aram.jpg" }
]


class SideRecommendContainer extends React.Component {
  render() {
    return (
      <>
        {
          SIDERECOMMEND.map((el) => {
            return (
              <div className="sideRecommendContainer">
                <div className="sideRecommend">
                  <img className="sideFollow" alt="sideProfile" src={el.src} />
                  <span className="sideFollowId"> {el.id}</span>
                </div>
                <span className="followText"> 팔로우</span>
              </div>
            )
          })
        }
      </>
    )
  }
}




export default SideRecommendContainer;

