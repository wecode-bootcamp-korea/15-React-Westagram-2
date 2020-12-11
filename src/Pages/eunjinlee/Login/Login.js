import React from 'react'
import './Styles/Common.scss'
import './Login.scss'
import { Link } from 'react-router-dom'

const API = "http://3.35.19.3:8000"

class LoginEunjinlee extends React.Component {

  constructor() {
    super()
    this.state = {
      user : {
        id : '',
        password : '',
      },
      isPwHidden : true,
    }
  }

  handleIdChange = (e) => {
    const user = {...this.state.user, id: e.target.value}
    this.setState({user})
  }

  handlePasswordChange = (e) => {
    const user = {...this.state.user, password: e.target.value}
    this.setState({user})
  }

  handleSubmitBtn = () => {
    const { id, password } = this.state.user
    if (id && password) {
      this.props.history.push('/main-eunjinlee')
    }
  }

  togglePassword = () => {
    this.setState({
      isPwHidden: !this.state.isPwHidden
    })
  }

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
    const {id, password, isPwHidden} = this.state.user
    let activateBtn = ( id.includes("@") && password.length >= 5)
    const idError = !id.includes("@")
    const passwordError = password.length<5

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
                <div className={idError ? '' : 'error'}>
                  <input
                    className="id"
                    type="text" 
                    placeholder="Phone number, username, or email"
                    onChange={this.handleIdChange}
                  />
                  {/*<span className={id ? "floating-label focus" : "floating-label"}
    >Phone number, username, or email</span>*/}
                </div>
                <div className={passwordError ? '' : 'error'}>
                  <input 
                    className="password"
                    type={isPwHidden ? 'password' : 'text'}
                    placeholder="Password"
                    onChange={this.handlePasswordChange}
                  />
                  {/*<span 
                  className={password ? "floating-label focus" : "floating-label"}
                  >Password</span>*/}
                  <span onClick={this.togglePassword}>
                  {isPwHidden ? "show" : "hide"}
                  </span>
                </div>
                <button 
                  className={activateBtn ? "active" : ""}
                  type="submit" 
                  onClick={this.handleSubmitBtn}
                >Log In</button>
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
          </section>
        </main>
        <footer>
          About&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;Jobs&nbsp;&nbsp;&nbsp;Help&nbsp;&nbsp;&nbsp;API&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;Terms&nbsp;&nbsp;&nbsp;Top Accounts&nbsp;&nbsp;&nbsp;Hashtags&nbsp;&nbsp;&nbsp;Locations<br />Beauty&nbsp;&nbsp;&nbsp;Dance & Performance&nbsp;&nbsp;&nbsp;Fitness&nbsp;&nbsp;&nbsp;Food & Drink&nbsp;&nbsp;&nbsp;Home & Garden&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;&nbsp;Visual Arts
          <br /><br />
          © 2020 Instagram from Facebook
        </footer>
      </div>

    )
  }
}

export default LoginEunjinlee
