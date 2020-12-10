import './Main.scss';
import React from 'react';
import Coments from '../Main/coments/Coments';
import {withRouter} from 'react-router-dom';


class Main extends React.Component {
    
    state = {
        comments: [
            {id:1, userId:'chaebin', userCmt:'어려워요 어려워ㅠㅠ', cmtLike:false},
            {id:2, userId:'zznagzzang', userCmt:'하...화이팅합시다..!!!!', cmtLike:false },
        ],
    }

    render() {
        return (
            <>
                <header className = "navTopFix" > 
                    <nav className="nav_main">
                        <p className="main_logo_name">Westagram</p>
                        <div className="search_box">
                            <input className="search" type="text" size="12"></input>
                            <i className="fas fa-search searchIcon">&nbsp;검색</i>
                        </div>
                        <div className="icon_box">
                            <i className="fas fa-house-user"></i>
                            <i className="far fa-paper-plane"></i>
                            <i className="fas fa-compass"></i>
                            <i className="far fa-heart"></i>
                            <div className="story_box">
                                <img className="nav_miniImg" src="images\chaebinhan\Main\userImg.jpg"/>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="main_container">
                    <section className="Feeds">
                        <ul className="user_info_box">
                            <li className="story_img">
                                <div className="story_box">
                                    <img className="story_miniImg" src="images\chaebinhan\Main\cbImg1.jpg"/>
                                    <div className="story_id">zzng._.1004</div>
                                </div>
                            </li>

                            <li className="story_img">
                                <div className="story_box">
                                    <img className="story_miniImg" src="images\chaebinhan\Main\cbImg2.jpg"/>
                                    <div className="story_id">chaebin</div>
                                </div>
                            </li>

                            <li className="story_img">
                                <div className="story_box">
                                    <img className="story_miniImg" src="images\chaebinhan\Main\cbImg3.jpg"/>
                                    <div className="story_id">blackpink</div>
                                </div>
                            </li>

                            <li className="story_img">
                                <div className="story_box">
                                    <img className="story_miniImg" src="images\chaebinhan\Main\cbImg4.jpg"/>
                                    <div className="story_id">begopa</div>
                                </div>
                            </li>

                            <li className="story_img">
                                <div className="story_box">
                                    <img className="story_miniImg" src="images\chaebinhan\Main\cbImg5.jpg"/>
                                    <div className="story_id">cb._.0403</div>
                                </div>
                            </li>

                            <li className="story_img">
                                <div className="story_box">
                                    <img className="story_miniImg" src="images\chaebinhan\Main\cbImg6.jpg"/>
                                    <div className="story_id">amumal95</div>
                                </div>
                            </li>

                            <li className="story_img">
                                <div className="story_box">
                                    <img className="story_miniImg" src="images\chaebinhan\Main\cbImg7.jpg"/>
                                    <div className="story_id">wecode1004</div>
                                </div>
                            </li>
                        </ul>
                        <article className="feed_container">
                            <div className="user_info">
                                <div className="user_info_img">
                                    <img className="miniImg" src="images\chaebinhan\Main\userImg.jpg"/>
                                </div>
                                <div className="user_info_text">
                                    <div className="user_info_id">nipeahc</div>
                                    <div className="user_info_loction">K Museum of Contemporary Art</div>
                                </div>
                                <div className="dot">
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                            <div className="user_img">
                                <img className="feedImg" src="images\chaebinhan\Main\feed.jpg"/></div>
                                <Coments
                                    comments={this.state.comments} 
                                />
                        </article>
                        
                    </section>

                    

                    <aside className="main_right">
                        <div className="aside_right">
                            <div className="my_info">
                                <div className="my_info_imgBox">
                                    <img className="my_info_img" src="images\chaebinhan\Main\userImg.jpg"/>
                                </div>
                                <div className="my_info_id_name">
                                    <div className="my_info_id">
                                        <b>nipeahc</b>
                                    </div>
                                    <div className="my_info_name">developer</div>
                                </div>
                                <p className="id_change">
                                    <b>전환</b>
                                </p>
                            </div>
                            <header className="aside_header">
                                <div className="aside_header_right1">
                                    <b>회원님을 위한 추천</b>
                                </div>
                                <div className="aside_header_right2">
                                    <b>모두 보기</b>
                                </div>
                            </header>

                            <div className="right_info_box">
                                <div className="right_info">
                                    <div className="recommend_info_imgBox">
                                        <img className="recommend_info_img" src="images\chaebinhan\Main\cbImg5.jpg"/>
                                    </div>
                                    <div className="follwer_id_name">
                                        <div className="my_info_id">
                                            <b>chep_dev</b>
                                        </div>
                                        <div className="follow">chaebinzzang님 외 21명이 팔로우합니다</div>
                                    </div>
                                    <p className="id_follow">
                                        <b>팔로우</b>
                                    </p>
                                </div>

                                <div className="right_info">
                                    <div className="recommend_info_imgBox">
                                        <img className="recommend_info_img" src="images\chaebinhan\Main\cbImg3.jpg"/>
                                    </div>
                                    <div className="follwer_id_name">
                                        <div className="my_info_id">
                                            <b>april03</b>
                                        </div>
                                        <div className="follow">binxxsds님 외 19명이 팔로우합니다</div>
                                    </div>
                                    <p className="id_follow">
                                        <b>팔로우</b>
                                    </p>
                                </div>

                                <div className="right_info">
                                    <div className="recommend_info_imgBox">
                                        <img className="recommend_info_img" src="images\chaebinhan\Main\cbImg1.jpg"/>
                                    </div>
                                    <div className="follwer_id_name">
                                        <div className="my_info_id">
                                            <b>a0_sim</b>
                                        </div>
                                        <div className="follow">wecooode10님 외 18명이 팔로우합니다</div>
                                    </div>
                                    <p className="id_follow">
                                        <b>팔로우</b>
                                    </p>
                                </div>

                                <div className="right_info">
                                    <div className="recommend_info_imgBox">
                                        <img className="recommend_info_img" src="images\chaebinhan\Main\cbImg2.jpg"/>
                                    </div>
                                    <div className="follwer_id_name">
                                        <div className="my_info_id">
                                            <b>sienna</b>
                                        </div>
                                        <div className="follow">aaaj.onee님 외 14명이 팔로우합니다</div>
                                    </div>
                                    <p className="id_follow">
                                        <b>팔로우</b>
                                    </p>
                                </div>

                                <div className="right_info">
                                    <div className="recommend_info_imgBox">
                                        <img className="recommend_info_img" src="images\chaebinhan\Main\cbImg4.jpg"/>
                                    </div>
                                    <div className="follwer_id_name">
                                        <div className="my_info_id">
                                            <b>no_noyes</b>
                                        </div>
                                        <div className="follow">jkang15님 외 4명이 팔로우합니다</div>
                                    </div>
                                    <p className="id_follow">
                                        <b>팔로우</b>
                                    </p>
                                </div>
                            </div>

                            <div className="right_box_footer">소개·도움말·홍보 센터·API·채용 정보·<br></br>개인정보처리방침·약관·위치·인기 계정·해시태그·언어
                            </div>
                            <div className="right_box_footer">© 2020 WESTAGRAM FROM CHAEBIN</div>

                        </div>
                    </aside>
                </div>
            </>
        );
    }
}
export default withRouter(Main);
