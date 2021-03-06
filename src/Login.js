import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    console.log('singIn', email, password)
    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const register = (e) => {
    e.preventDefault()
    console.log('register', email, password)
    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log('auth: ', auth)
        if (auth) {
          history.push('/')
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          src="https://i.ibb.co/MS7jt0K/amazone-black-logo.png"
          alt=""
        />
      </Link>
      {/* login box */}
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>

          <p>
            By continuing, you agree to Amazone Conditions of Use and Privacy
            Notice.
          </p>
        </form>
      </div>
      {/* add line */}
      <div className="login__line"></div>
      <button
        type="submit"
        className="login__registerButton"
        onClick={register}
      >
        Create your Amazone Account
      </button>
    </div>
  )
}

export default Login
