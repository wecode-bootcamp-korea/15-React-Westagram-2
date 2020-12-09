import React from 'react';
import {withRouter} from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {

    goToMain = () => {
        this
            .props
            .history
            .push('/main');
    }

    /*'로그인 버튼'과 '비밀번호 버튼'이 입력 될 시 로그인*/
    //input.addEventListener('input',changeColor);

    render() {
        return (
            <>
                <div className="login_locationCenter">
                    <div className="login_container">
                        <header className="logo_header">
                            <p className="logo_name">Westagram</p>
                        </header>
　
                        <section className="login_box">
                            <input className="login_input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                            <input className="pw_input" type="password" placeholder="비밀번호"/>
                            <div className="btn">
                                <button className="login_btn" id="bt n_id" onClick={this.goToMain}>로그인
                                </button>
                            </div>
                            <p className="or">
                                <b>――――――――&nbsp;&nbsp; 또는 &nbsp;&nbsp;――――――――</b>
                            </p>
                            <p className="facebook">
                                <i className="fab fa-facebook-square"></i>&nbsp;<b>Facebook으로 로그인</b>
                            </p>
                        </section>
                        <footer className="forgot_box">비밀번호를 잊으셨나요?</footer>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(Login);
