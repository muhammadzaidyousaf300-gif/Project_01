import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const navigate = useNavigate()

    // Navigate after successful login
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                navigate('/landing')
            }, 1000)

            return () => clearTimeout(timer)
        }
    }, [success, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)

        const storedUser = JSON.parse(localStorage.getItem('user'))

        if (!storedUser) {
            setError('No user found. Please sign up first.')
            return
        }

        if (email === storedUser.email && password === storedUser.password) {
            setSuccess('Login successful! 🎉')
            setEmail('')
            setPassword('')
        } else {
            setError('Incorrect email or password')
        }
    }

    const handleFacebookLogin = () => {
        window.location.href = 'https://www.facebook.com/login/'
    }

    const handleInstagramLogin = () => {
        window.location.href = 'https://www.instagram.com/accounts/login/'
    }

    return (
        <div className="login-container">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>

            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <div className="social-login">
                <button
                    className="facebook-btn"
                    onClick={handleFacebookLogin}
                >
                    Login with Facebook
                </button>

                <button
                    className="instagram-btn"
                    onClick={handleInstagramLogin}
                >
                    Login with Instagram
                </button>
            </div>

            <p>
                Don't have an account?{' '}
                <span
                    style={{ color: "#1877F2", cursor: "pointer" }}
                    onClick={() => navigate('/')}
                >
                    Sign Up
                </span>
            </p>
        </div>
    )
}

export default Login
