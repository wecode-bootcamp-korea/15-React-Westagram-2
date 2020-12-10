import React, { Component } from 'react'
import { data } from "../Main/data/data"
// import { API } from "../config"
import './Login.scss'

const API = "http://3.34.133.239:8000/account/signup";

class Login extends Component {
    state = {
      user : {
        id: '',
        password: ''
      }
    }

    handleIdPwChange = (e) => {
      const user = {...this.state.user};
      const value = e.target.value;
      if(e.target.type === 'text') user.id = value; 
      if(e.target.type === 'password') user.password = value;
      this.setState({user});
    }

  handleSubmitBtn = () => {
    const { id, password } = this.state.user;
    if(id&&password){
      fetch(API, {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.password
        }),
      })
      .then(response => response.json())
      .then(result => {
        if(result.message === "SUCCESS"){
          this.props.history.push('/main-byulyi');
        }else {
          alert('로그인 실패입니다!!')
        }
      });
    };
  }


  render() {
    const { id, password } = this.state.user;
    let activateBtn = ((id.includes("@")) && (password.length>=5));
    return (
      <>
        <main className='login'>
          <article>
            <aside>
              <img src='/images/byulyi/phone.png' alt='phoneImage' />
            </aside>
            <section>
              <div className='top'>
                <img src='/images/byulyi/logo_text.png' alt='logoImage' />
                <form>
                  <input
                    type='text'
                    placeholder='Phone number, username, or email'
                    value={id}
                    onChange={this.handleIdPwChange}
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={this.handleIdPwChange}
                  />
                  <button
                    type="button"
                    onClick={this.handleSubmitBtn}
                    className={activateBtn? 'active' : ''}
                    disabled={!activateBtn}
                  >
                    Log In
                  </button>
                </form>
                <div className='loginBar'>
                  <span className='bar'></span>
                  <span className='barText'>OR</span>
                  <span className='bar'></span>
                </div>
                <div className='loginFindPw'>
                  <a>
                    Log in with Facebook
                  </a>
                  <a>
                    Forgot Password?
                  </a>
                  <p className='loginError'></p>
                </div>
              </div>
              <div className='loginBottom'>
                <p className='appTitle'>
                  Don't have an account?
                  <a href='#!' className='signupBtn'>
                    Sign up
                  </a>
                </p>
                <div className='appBtn'>
                  <p>Get the app.</p>
                  <div className='btns'>
                    <button className='imgContainer'>
                      <img src='/images/byulyi/app1.png' alt='appstore-logo' />
                    </button>
                    <button className='imgContainer'>
                      <img src='/images/byulyi/app2.png' alt='google-play-logo' />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
        <footer className='footer'>
          <ul className='footerList'>
            {
              data.FOOTERLIST_FIRST.map((el) => {
                return (
                  <li>{el}</li>
                )
              })
            }
          </ul>
          <ul className='footerList'>
            {
              data.FOOTERLIST_SECOND.map((el) => {
                return (
                  <li>{el}</li>
                )
              })
            }
          </ul>
          <p>© 2020 Instagram from Facebook</p>
        </footer>
      </>
    )
  }
}

export default Login
