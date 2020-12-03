import React, { Component } from 'react';
import '../Reset.scss';
import '../Common.scss';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div id="Login">
                <img id="baImg" src="images/soyoun/loginImg.png" alt="위스타그램"/>
                <div id="login">
                    <div className="hearderLog">Westagram</div>
                    <form action="" method="post">
                        <input type="text" name="id" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                        <input type="password" name="pwd" placeholder="비밀번호"/>
                        <Link to="/main-soyoun" className="button" type="button" disabled>로그인</Link>
                    </form>
                    <div className="caption">
                        비밀번호를 잊으셨나요?
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;