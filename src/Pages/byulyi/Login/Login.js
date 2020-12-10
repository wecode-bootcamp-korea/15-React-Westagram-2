import React, { Component } from 'react'
import './Login.scss'

class Login extends Component {
    state = {
      user : {
        id: '',
        password: ''
      }
    }

  handleIdChange = (e) => {
    const user = {...this.state.user, id:e.target.value};
    this.setState({user});
  }

  handlePwChange = (e) => {
    const user = {...this.state.user, password:e.target.value};
    this.setState({user});
  }

  handleSubmitBtn = () => {
    const { id, password } = this.state.user;
    if(id&&password){
      this.props.history.push('/main-byulyi');
    }
  }


  render() {
    const { id, password } = this.state.user;
    let activateBtn = ((id.includes("@")) && (password.length>=5));
    return (
      <>
        <main className='login__main'>
          <article>
            <aside>
              <img src='/images/byulyi/phone.png' alt='phoneImage' />
            </aside>
            <section>
              <div className='login__top'>
                <img src='/images/byulyi/logo_text.png' alt='logoImage' />
                <form>
                  <input
                    type='text'
                    placeholder='Phone number, username, or email'
                    id='id'
                    value={id}
                    onChange={this.handleIdChange}
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    id='password'
                    value={password}
                    onChange={this.handlePwChange}
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
                <div className='login__bar'>
                  <span className='bar'></span>
                  <span className='bar__text'>OR</span>
                  <span className='bar'></span>
                </div>
                <div className='login__findPw'>
                  <a href='#!' className='find__facebook'>
                    Log in with Facebook
                  </a>
                  <a href='#!' className='find__password'>
                    Forgot Password?
                  </a>
                  <p className='login__error'></p>
                </div>
              </div>
              <div className='login__bottom'>
                <p className='app__title'>
                  Don't have an account?
                  <a href='#!' className='signup__btn'>
                    Sign up
                  </a>
                </p>
                <div className='app__btn'>
                  <p>Get the app.</p>
                  <div className='btns'>
                    <button className='app__btn__img'>
                      <img src='/images/byulyi/app1.png' alt='appstore-logo' />
                    </button>
                    <button className='app__btn__img'>
                      <img src='/images/byulyi/app2.png' alt='google-play-logo' />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
        <footer className='login__footer'>
          <ul className='footer__list'>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Help</li>
            <li>Api</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Top Accounts</li>
            <li>Hashtags</li>
            <li>Locations</li>
          </ul>
          <ul className='footer__list'>
            <li>Beauty</li>
            <li>Dance & Performance</li>
            <li>Fitness</li>
            <li>Food & Drink</li>
            <li>Home & Garden</li>
            <li>Music</li>
            <li>Visual Arts</li>
          </ul>
          <p>© 2020 Instagram from Facebook</p>
        </footer>
      </>
    )
  }
}

export default Login
