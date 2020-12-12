import React from 'react'
import './Styles/Common.scss'
import './Login.scss'
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom'

// const API = "http://10.168.2.67:8000"

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

  handleSubmitChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  //validate only after first onBlur
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

  //fetch API when submitted
  logIn = (e) => {
    e.preventDefault()
    const { id, password, isIdError, isPasswordError } = this.state
    if (!isIdError && !isPasswordError) {
    // fetch('http://10.168.2.67:8000/users/sign_in', { //주형님 api
    fetch('http://10.168.2.91:8000/user/signin', { //현주님 api
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
      })
    }
  }

  signUp = (e) => {
    e.preventDefault()
    const { id, password, isIdError, isPasswordError } = this.state
    if (!isIdError && !isPasswordError) {
    // fetch('http://10.168.2.67:8000/users/sign_up', { //주형님 api
    fetch('http://10.168.2.91:8000/user/signup', { //현주님 api
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
      })
    }
  }

  render() {
    const {
      id,
      password,
      isPasswordHidden,
      isIdError,
      isPasswordError,
    } = this.state
    const isButtonActive = id.includes('@') && password.length >= 5

    return (
      <div className='Login'>
        <main className='login-main'>
          <aside className='visual-container'>
            <img alt='phone' src='/images/eunjinlee/phone.png' />
          </aside>
          <section className='login-container'>
            <div className='login-form'>
              <img alt='Instagram' src='images/eunjinlee/instagram-logo.png' />
              <form>
                <div className={isIdError ? 'error' : ''}>
                  <input
                    className='id'
                    type='text'
                    name='id'
                    placeholder='Phone number, username, or email'
                    onChange={this.handleSubmitChange}
                    onBlur={this.handleIdOnBlur}
                  />
                </div>
                <div className={isPasswordError ? 'error' : ''}>
                  <input
                    className='password'
                    type={isPasswordHidden ? 'password' : 'text'}
                    name='password'
                    placeholder='Password'
                    onChange={this.handleSubmitChange}
                    onBlur={this.handlePasswordOnBlur}
                  />
                  <span
                    onClick={() =>
                      this.setState({
                        isPasswordHidden: !this.state.isPasswordHidden,
                      })
                    }
                  >
                    {isPasswordHidden ? 'show' : 'hide'}
                  </span>
                </div>
                <button
                  className={isButtonActive ? 'login-btn active' : 'login-btn '}
                  type='submit'
                  onClick={this.logIn}>
                  Log In
                </button>
                <button
                  className={isButtonActive ? 'signup-btn active' : 'signup-btn '}
                  type='submit'
                  onClick={this.signUp}>
                  Sign Up
                </button>
              </form>
              <div className='facebook-signup'>
                <div className='border'>
                  <span />
                  <p>OR</p>
                  <span />
                </div>
                <div className='social-login'>
                  <img
                    alt='Facebook'
                    src='/images/eunjinlee/facebook-logo.png'/>
                  <p>Log in with Facebook</p>
                </div>
              </div>
            </div>
            <div className='app-download-container'>
              <p>Get the app.</p>
              <div>
                <img alt='App store' src='/images/eunjinlee/app-store.png' />
                <img
                  alt='Google play store'
                  src='/images/eunjinlee/google-play-store.png'
                />
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

export default LoginEunjinlee
