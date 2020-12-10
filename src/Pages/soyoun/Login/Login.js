import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

import '../Reset.scss';
import '../Common.scss';
import './Login.scss';


class Login extends Component {
    constructor() {
        super();
        this.state = {
          id : '',
          pwd : ''
        };
    }

    handleInputChange = (e) => {
        const {id , value} = e.target;
        this.setState({
           [id] : value
        });
    };
    checkLogin = (e) => {
        e.preventDefault();
        const {id, pwd} = this.state;

        const checkId = id.includes('@');
        const checkPwd = pwd.length >= 4;
        
        if(checkId && checkPwd){
            alert('로그인 성공');
            this.props.history.push('/Main-soyoun');
        };
        if(!checkId){
            alert("@을 포함해주세요.")
        }
        if(!checkPwd){
            alert("4자리 이상 포함해주세요.")
        }
    };

    render() {

        const {id , pwd} = this.state;
        const activeBtn = (id.length && pwd.length) > 0;

        return (
            <div id="Login">
                <img id="baImg" src="images/soyoun/loginImg.png" alt="위스타그램"/>
                <div id="login">
                    <div className="hearderLog">Westagram</div>
                    <form action="" method="post">
                        <input type="text" id="id" name="id" placeholder="전화번호, 사용자 이름 또는 이메일" value={id} onChange = {this.handleInputChange}/>
                        <input type="password" id="pwd" name="pwd" placeholder="비밀번호" value={pwd} onChange={this.handleInputChange}/>
                        <button type="button" className={activeBtn ? "activeBtn" : ""}
                        onClick={this.checkLogin}>로그인</button>
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