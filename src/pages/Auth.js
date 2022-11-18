import supabase from "../config/supabaseClient"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Auth = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [formError, setformError] = useState(null)

  const login = async (email, password) => {
    console.log(email, password)
    try {
      const {error} = await supabase.auth.signInWithPassword({email, password})
      if(error) throw error
      alert("Logged in!")
      navigate('/')
    }
    catch(error){
      alert(error.message)
    }
    // const { user, error } = await supabase.auth.signInWithPassword({email, password})

    // if (error) {
    //   console.log(error)
    //   alert("You do not have an account here, please sign up!")
    // }
    // if (user) {
    //   console.log(user)
    //   alert("Logged in!")
    //   navigate('/')
    // }
  }

  const signUp = async (email, password) => {
    console.log(email, password)

    try {
      const {error} = await supabase.auth.signUp({email, password})
      if(error) throw error
      alert("Logged in!")
      navigate('/')
    }
    catch(error){
      alert(error.message)
    }

    // const { error } = await supabase.auth.signUp({email, password})

    // if (error) {
    //   console.log(error)
    //   alert(error.message)
    // }
    // if (user) {
    //   console.log(user)
    //   alert("You are now signed up!")
    //   navigate('/')
    // }

  }

  return (
    <div className="page auth">
      <form>
        <label htmlFor="email">Email:</label>
        <input
        placeholder="Email"
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
        placeholder="Password"
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => login(email, password)}>Login</button>
        <button onClick={() => signUp(email, password)}>Sign Up</button>

        {/* { formError && <p className="error">{formError}</p>} */}

      </form>
    </div>
    )
}

export default Auth
