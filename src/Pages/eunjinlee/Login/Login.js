import React from 'react'
import { withRouter } from 'react-router-dom';
import './Login.scss'

class LoginEunjinlee extends React.Component {
  constructor() {
    super()
    this.state = {
      id: '',
      password: '',
      isPasswordHidden: true,
      isIdError: false,
      isPasswordError: false,
    }
  }

  //get input value
  handleSubmitChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  //check validation id only after first onBlur
  handleIdOnBlur = () => {
    const { id } = this.state
    if (id.includes('@')) {
      this.setState({
        isIdError: false,
      })
    } else {
      this.setState({
        isIdError: true,
      })
    }
  }

  //check validation pw only after first onBlur
  handlePasswordOnBlur = () => {
    const { password } = this.state
    if (password.length >= 5) {
      this.setState({
        isPasswordError: false,
      })
    } else {
      this.setState({
        isPasswordError: true,
      })
    }
  }

  //login
  logIn = (e) => {
    e.preventDefault()
    const { id, password, isIdError, isPasswordError } = this.state
    if (!isIdError && !isPasswordError) {
    fetch('http://10.168.2.67:8000/users/sign_in', { //주형님 api
    // fetch('http://10.168.2.91:8000/user/signin', { //현주님 api
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          alert(`Welcome ${id}`)
          this.props.history.push("/main-eunjinlee")
        } else {
          alert("Login failed")
        }
      }).catch(err => alert(err))
    }
  }

  //signup
  signUp = (e) => {
    e.preventDefault()
    const { id, password, isIdError, isPasswordError } = this.state
    if (!isIdError && !isPasswordError) {
    fetch('http://10.168.2.67:8000/users/sign_up', { //주형님 api
    // fetch('http://10.168.2.91:8000/user/signup', { //현주님 api
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          alert("Signed up")
        } else {
          alert("Sign up failed. Retry.")
        }
      }).catch(err => alert(err))
    }
  }

  goToMain = () => {
    this.props.history.push("/main-eunjinlee")
  }

  render() {
    const { id, password, isPasswordHidden, isIdError, isPasswordError } = this.state
    const { goToMain, handleSubmitChange, handleIdOnBlur, handlePasswordOnBlur, logIn, signUp} = this
    const isButtonActive = id.includes('@') && password.length >= 5

    return (
      <div className='Login'>
        <main>
          <aside className='visualContainer'>
            <img alt='phone' src='/images/eunjinlee/phone.png' />
            <img alt='insta feed' src='/images/eunjinlee/phone-5.jpg' />
          </aside>
          <section className='loginContainer'>
            <div className='loginForm'>
              <img 
                alt='Instagram' 
                src='images/eunjinlee/instagram-logo.png' 
                onClick={goToMain}/>
              <form>
                <div className={isIdError ? 'error' : ''}>
                  <input
                    className='id'
                    type='text'
                    name='id'
                    placeholder='Phone number, username, or email'
                    onChange={handleSubmitChange}
                    onBlur={handleIdOnBlur}/>
                </div>
                <div className={isPasswordError ? 'error' : ''}>
                  <input
                    className='password'
                    type={isPasswordHidden ? 'password' : 'text'}
                    name='password'
                    placeholder='Password'
                    onChange={handleSubmitChange}
                    onBlur={handlePasswordOnBlur}/>
                  <span
                    onClick={() => this.setState({isPasswordHidden: !this.state.isPasswordHidden})}>
                    {isPasswordHidden ? 'show' : 'hide'}
                  </span>
                </div>
                <button
                  className={isButtonActive ? 'loginBtn active' : 'loginBtn '}
                  type='submit'
                  onClick={logIn}>
                  Log In
                </button>
                <button
                  className='signupBtn'
                  type='submit'
                  onClick={signUp}>
                  Sign Up
                </button>
              </form>
              <div className='facebookSignup'>
                <div className='border'>
                  <span />
                  <p>OR</p>
                  <span />
                </div>
                <div className='socialLogin'>
                  <img alt='Facebook' src='/images/eunjinlee/facebook-logo.png'/>
                  <a href="https://www.facebook.com">Log in with Facebook</a>
                </div>
              </div>
            </div>
            <div className='appDownload'>
              <span>Get the app.</span>
              <div>
                <img alt='App store' src='/images/eunjinlee/app-store.png' />
                <img
                  alt='Google play store'
                  src='/images/eunjinlee/google-play-store.png'/>
              </div>
            </div>
          </section>
        </main>
        <footer>
          About&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;Jobs&nbsp;&nbsp;&nbsp;Help&nbsp;&nbsp;&nbsp;API&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;Terms&nbsp;&nbsp;&nbsp;Top
          Accounts&nbsp;&nbsp;&nbsp;Hashtags&nbsp;&nbsp;&nbsp;Locations
          <br />
          Beauty&nbsp;&nbsp;&nbsp;Dance &
          Performance&nbsp;&nbsp;&nbsp;Fitness&nbsp;&nbsp;&nbsp;Food &
          Drink&nbsp;&nbsp;&nbsp;Home &
          Garden&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;&nbsp;Visual Arts
          <br />© 2020 Instagram from Facebook
        </footer>
      </div>
    )
  }
}

export default withRouter(LoginEunjinlee)