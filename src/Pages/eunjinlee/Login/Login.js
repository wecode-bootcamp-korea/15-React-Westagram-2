import React from 'react'
import './Styles/Common.scss'
import './Login.scss'
import { Link } from 'react-router-dom'

const API = "http://3.35.19.3:8000"

class LoginEunjinlee extends React.Component {

  constructor() {
    super(); 
    this.state = {
      id: "",
      password: "",
      hiddenPassword: true,
      idError: false,
      passwordError: false,
    }
  }

  //update id and password value 
  updateInputValue = (e) => {
    const {id, value} = e.target
    this.setState({
      [id]: value //계산된속성명 
    })
  }

  //show and hide password value
  togglePassword = () => {
    this.setState({
      hiddenPassword: !this.state.hiddenPassword
    })
  }

  //check if id is valid
  checkValidId = () => {
    if (!this.state.id.includes('@')) {
      this.setState({
        idError: !this.state.idError
      })
    }
  }

  //check if pw is valid
  checkValidPassword = () => {
    if (this.state.password.length >= 4) {
      this.setState({
        passwordError: !this.state.passwordError
      })
    }
  }

  //check valid id and password 다시살릴거니까 안지울것
  // checkValidation = (e) => {
  //   e.preventDefault()
  //   const { id, password } = this.state
  //   const checkId = id.includes('@')
  //   const checkPassword = password.length >= 4

  //   console.log(checkId, checkPassword)
  //   if ([id] !== '' && [password] !== '') {
  //     if (checkId && checkPassword) {
  //       this.props.history.push("/main-eunjinlee")
  //     }
  //     this.checkValidId()
  //     this.checkValidPassword()
  //   } else {
  //     return
  //   }
  // }

  handleClick = () => {
    fetch(`${API}/account/signin`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
      }),
    }).then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.message === "SUCCESS") {
          localStorage.setItem("token", result.Authorization)
          this.props.history.push("/main-eunjinlee")
        }
      })
  }

  render() {
    const { id, password, hiddenPassword, idError, passwordError } = this.state
    const isValidBtn = id.includes('@') && password.length >= 4

    return (
      <div className="Login">
        <div className="visual-container">
          <img alt="phone" src="/images/eunjinlee/phone.png" />
        </div>
        <div className="login-container">
          <div className="login-form">
            <img alt="Instagram" src="images/eunjinlee/instagram-logo.png" />
            <form id="form">
              <div className={idError ? 'error' : ''}>
                <input
                  className="id"
                  type="text" 
                  placeholder="Phone number, username, or email" 
                  onChange={this.updateInputValue}
                />
              </div>
              <div className={passwordError ? 'error' : ''}>
                <input 
                  className="password"
                  type={hiddenPassword ? 'password' : 'text'}
                  placeholder="Password"
                  onChange={this.updateInputValue}
                />
                <span onClick={this.togglePassword}>
                {hiddenPassword ? "show" : "hide"}
                </span>
              </div>
              <button 
                className={isValidBtn ? "active" : ""}
                type="submit" 
                onClick={this.handleClick}
              ><Link>Log In</Link></button>
            </form>
            <div className="facebook-signup">
              <div className="border">
                <span></span>
                <p>OR</p>
                <span></span>
              </div>
              <div className="social-login">
                <img alt="facebook" src="/images/eunjinlee/facebook-logo.png"/>
                <p>Log in with Facebook</p>
              </div>
            </div>
            <p className="forgot">Forgot Password?</p>
          </div>
          <div className="signup-container">
            <span>Don't have an account?</span>
            <span>Sign up</span>
          </div>
          <div className="app-download-container">
            <p>Get the app.</p>
            <div>
              <img alt="" src="/images/eunjinlee/app-store.png"/>
              <img alt="" src="/images/eunjinlee/google-play-store.png"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginEunjinlee
