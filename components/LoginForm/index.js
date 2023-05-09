import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    isLoginError: false,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      errorMessage: errorMsg,
      isLoginError: true,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'post',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {isLoginError, errorMessage} = this.state
    return (
      <div className="login-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-page-image"
          alt="website login"
        />
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-card-web-logo"
            alt="website logo"
          />
          <form className="login-form" onSubmit={this.submitForm}>
            <label htmlFor="text" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="text"
              className="form-input"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {isLoginError && <p className="login-error">*{errorMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
