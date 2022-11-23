import { createClient } from '@supabase/supabase-js'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="page signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <p>
        Already have an account? <Link to="/login">Log In</Link>
        </p>

        <button type="submit">Sign up</button>
      </form>

    </div>
  )
}

export default Signup
