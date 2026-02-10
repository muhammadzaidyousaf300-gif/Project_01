import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(false) // ✅ FIXED
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!agree) {
      setError('You must agree to the terms and conditions')
      return
    }

    const user = { name, email, password }
    localStorage.setItem('user', JSON.stringify(user))

    setSuccess('Signup successful! 🎉 Redirecting...')
    setTimeout(() => navigate('/login'), 1500)
  }

  const handleFacebookSignup = () => {
    window.location.href = 'https://www.facebook.com/signup'
  }

  const handleInstagramSignup = () => {
    window.location.href = 'https://www.instagram.com/accounts/emailsignup/'
  }

  return (
    <div className="login-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="terms"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <div className="social-login">
        <button className="facebook-btn" onClick={handleFacebookSignup}>
          Sign up with Facebook
        </button>

        <button className="instagram-btn" onClick={handleInstagramSignup}>
          Sign up with Instagram
        </button>
      </div>

      <p>
        Already have an account?{' '}
        <span
          style={{ color: '#1877F2', cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          Login here
        </span>
      </p>
    </div>
  )
}

export default Signup
