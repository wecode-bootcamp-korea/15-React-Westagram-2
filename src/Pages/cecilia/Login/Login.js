import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginCecilia extends Component {
  goToMain = () => {
    this.props.history.push('/main-cecilia');
    // if (response.message === "valid user") {
    //   this.props.history.push('/Main');
    // } else {
    //   alert("등록되지않은 회원입니다. 회원가입을 해주세요."")
    // }
  }
  render() {
    return (
      <div className="Login">
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
        <header>Instargram</header>
        <input className="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input className="pw" type="password" placeholder="비밀번호" />
        <button
          className="loginBtn"
          onClick={this.goToMain}
        >로그인</button>
        <a href="https://www.instagram.com/accounts/password/reset/">아직 회원이 아니신가요?</a>
      </div>
    );
  }
}

export default LoginCecilia;
