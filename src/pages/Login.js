import { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from './Auth'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

        // Get email and password input values
        const email = emailRef.current.value
        const password = passwordRef.current.value

        // Calls 'signUp' function from the context
        const { error } = await signIn({ email, password })

        if (error) {
          alert('error signing in')
        } else {
          // Redirect user to Dashboard
          navigate('/')
        }
  }

  return (
    <div className="page login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
