import React from 'react'
import './Styles/Common.scss'
import './Login.scss'
import { Link } from 'react-router-dom'

const API = "http://3.35.19.3:8000"

class LoginEunjinlee extends React.Component {

  constructor() {
    super()
    this.state = {
      id: "",
      password: "",
      isPasswordHidden : true,
      isIdValid: true,
      isPasswordValid: true,
    }
  }

  handleSubmitChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    })
  }
  
  togglePassword = () => {
    this.setState({
      isPasswordHidden: !this.state.isPasswordHidden
    })
  }

  //근데 
  isValidId = () => {
    const {id} = this.state
    if (id.includes("@")) {
      return true
    } else {
      return false
    }
  }

  isValidPassword = () => {
    const {password} = this.state
    if (password.length >= 5) {
      return true
    } else {
      return false
    }
  }
  
  handleFormSubmit = () => {
    fetch(`${API}/account/signin`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
      }),
    }).then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          localStorage.setItem("token", result.Authorization)
          this.props.history.push("/main-eunjinlee")
        }
      })
  }

  render() {
    const {isPasswordHidden} = this.state
    console.log(this.state.id, this.state.password)
    console.log(this.isValidId(), this.isValidPassword())

    return (
      <div className="Login">
        <main className="login-main">
          <aside className="visual-container">
            <img alt="phone" src="/images/eunjinlee/phone.png" />
          </aside>
          <section className="login-container">
            <div className="login-form">
              <img alt="Instagram" src="images/eunjinlee/instagram-logo.png" />
              <form>
                <div className={this.isValidId() ? 'input-frame' : 'input-frame error'}>
                  <input
                    className="id"
                    type="text" 
                    name="id"
                    placeholder="Phone number, username, or email"
                    onChange={this.handleSubmitChange}
                    onBlur={() => this.isValidId}/>
                </div>
                <div className={this.isValidPassword() ? 'input-frame' : 'input-frame error'}>
                  <input 
                    className="password"
                    type={isPasswordHidden ? 'password' : 'text'}
                    name="password"
                    placeholder="Password"
                    onChange={this.handleSubmitChange}
                    onBlur={() => this.isValidPassword}/>
                  <span onClick={this.togglePassword}>
                  {isPasswordHidden ? "show" : "hide"}
                  </span>
                </div>
                <button
                  className={this.isValidId() && this.isValidPassword() ? "submit-btn active" : "submit-btn "}
                  type="submit"
                  onClick={this.handleFormSubmit}
                >Log In</button>
              </form>
              <div className="facebook-signup">
                <div className="border">
                  <span></span>
                  <p>OR</p>
                  <span></span>
                </div>
                <div className="social-login">
                  <img alt="Facebook" src="/images/eunjinlee/facebook-logo.png"/>
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
                <img alt="App store" src="/images/eunjinlee/app-store.png"/>
                <img alt="Google play store" src="/images/eunjinlee/google-play-store.png"/>
              </div>
            </div>
          </section>
        </main>
        <footer>
          About&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;Jobs&nbsp;&nbsp;&nbsp;Help&nbsp;&nbsp;&nbsp;API&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;Terms&nbsp;&nbsp;&nbsp;Top Accounts&nbsp;&nbsp;&nbsp;Hashtags&nbsp;&nbsp;&nbsp;Locations
          <br/>
          Beauty&nbsp;&nbsp;&nbsp;Dance & Performance&nbsp;&nbsp;&nbsp;Fitness&nbsp;&nbsp;&nbsp;Food & Drink&nbsp;&nbsp;&nbsp;Home & Garden&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;&nbsp;Visual Arts
          <br/>
          © 2020 Instagram from Facebook
        </footer>
      </div>

    )
  }
}

export default LoginEunjinlee
