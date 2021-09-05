import React, { useState } from 'react'
import './CryptoLogin.css'
import { Link } from 'react-router-dom'
import { useMoralis } from 'react-moralis'

function CryptoLogin() {
  const {
    logout,
    setUserData,
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
  } = useMoralis()

  console.log('isAuthenticated', isAuthenticated)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  if (!isAuthenticated) {
    return (
      <div className="cryptoLogin">
        <Link to="/">
          <img
            className="cryptoLogin__logo"
            src="https://i.ibb.co/MS7jt0K/amazone-black-logo.png"
            alt=""
          />
        </Link>
        <h1>
          No Credit Card? <br />
          <small>No Problem! Pay With Crypto</small>
        </h1>
        <div className="cryptoLogin__container">
          <h1>Crypto Login</h1>

          <form>
            <button
              type="submit"
              className="cryptoLogin__signInButton"
              onClick={() => authenticate()}
            >
              Crypto Sign In
            </button>

            <p className="cryptoLogin__statement">
              By continuing, you agree to Amazone Conditions of Use and Privacy
              Notice.
            </p>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div className="cryptoLogin">
        <h1>Welcome {user.get('username')}</h1>
        <div className="cryptoLogin__container">
          <h1>Crypto Login</h1>

          <form>
            <h5>Username</h5>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <h5>E-mail</h5>
            <input
              type="email"
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
              onClick={() => setUserData(username, email, password)}
            >
              Crypto Email Sign Up
            </button>

            <button
              type="submit"
              className="login__signOutButton"
              onClick={() => logout()}
              disabled={isAuthenticating}
            >
              Log Out
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CryptoLogin
