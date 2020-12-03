import React, { Component } from 'react';
import './Aside.scss';

class Aside extends Component {
    render() {
        return (
            <div id="Aside">
                <img src="images/soyoun/main-right.png" alt="예시프로필"/>
                <footer>
                    <ul>
                        <li><a href="">소개</a>&#183;</li>
                        <li><a href="">도움말</a>&#183;</li>
                        <li><a href="">홍보 센터</a>&#183;</li>
                        <li><a href="">API</a>&#183;</li>
                        <li><a href="">채용 정보</a>&#183;</li>
                        <li><a href="">개인정보처리방침</a>&#183;</li>
                        <li><a href="">약관</a>&#183;</li>
                        <li><a href="">위치</a>&#183;</li>
                        <li><a href="">인기 계정</a>&#183;</li>
                        <li><a href="">해시태그</a>&#183;</li>
                        <li><a href="">언어</a></li>
                    </ul>
                    <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
                </footer>
            </div>
        );
    }
}

export default Aside;