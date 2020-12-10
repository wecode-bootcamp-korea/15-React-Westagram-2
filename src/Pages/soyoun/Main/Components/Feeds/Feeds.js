import React, { Component } from 'react';
import './Feeds.scss';
import Comments from '../Comment/Comments';

class Feeds extends Component {
    constructor() {
        super();
        this.state = {
            comment: "",
            comments: [],
        };
    }
    render() {
        return (
            <div id="Feeds">
                <article>
                    <div className="feed-user">
                        <div className="feed-pro">
                            <img src="images/soyoun/feedImg1.png" alt="cat"/>
                            <p>mini_cat</p>
                        </div>
                        <div className="feed-more">
                            <img src="images/soyoun/more.svg" alt="옵션 더보기" />
                        </div>
                    </div>
                    <img src="images/soyoun/feedImg1.png" alt="img"/>
                    <Comments />
                </article>
            </div>
        );
    }
}

export default Feeds;