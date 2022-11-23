import { createClient } from '@supabase/supabase-js'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
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
