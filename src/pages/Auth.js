import supabase from "../config/supabaseClient"
import { useState } from "react"

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setformError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password ) {
      setformError('Please fill in all the fields')
      return
    }
  }

  return (
    <div className="page auth">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
        <button>Sign Up</button>

        { formError && <p className="error">{formError}</p>}

      </form>
    </div>
    )
}

const login = (email, password) => {

}

const signUp = () => {

}

export default Auth
