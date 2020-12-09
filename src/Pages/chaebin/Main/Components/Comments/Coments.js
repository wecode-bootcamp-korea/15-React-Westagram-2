import './Coments.scss';
import React, {Component} from 'react';

class Coments extends Component {
    


    render() {
        const { comments } = this.props
        return (

            <div className="reple_section">
                <div className="user_img_icon">
                    <div className="heart_icon">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="speech_icon">
                        <i className="far fa-comment"></i>
                    </div>
                    <div className="paper_plane_icon">
                        <i className="far fa-paper-plane"></i>
                    </div>
                    <div className="dots_icon">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="storage_icon">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="good_count">
                    <div className="good_count_img">
                        <img className="good_count_miniImg" src="images\chaebinhan\Main\userImg.jpg"/>
                    </div>
                    <div className="good_count_name">
                        zenn.yyy 님 <b>외 258명</b>이 좋아합니다
                    </div>
                </div>
                <div className="follower_reple_section">


                <>
                {comments.map((comment, id) => 
                    (<div className="reple">
                        <div className='repl_id'><b>{comment.userId}</b>&nbsp;</div>
                            <div className='repl_contents'>{comment.userCmt}</div>
                            <div className='like_icon'>
                                <i className='far fa-heart'></i>
                            </div>
                    </div>
                ))}
                </>




                    <div className="reple">
                        <div className="reple_time">9시간 전</div>
                    </div>

                </div>
                <div className="wirte_reple">
                    <input className="reple_input" type="text" placeholder="댓글 달기..."></input>
                    <button className="repleWrite_button">
                        <b>게시</b>
                    </button>
                </div>
            </div>

        );
    }
}

export default Coments;