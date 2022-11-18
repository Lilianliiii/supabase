import { supabase } from "../config/supabaseClient"
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate = useNavigate()

  // Using supabase autheorization functions
  supabase.auth.onAuthStateChange(async (e) => {
    e.preventDefault()
    if (e !== "SIGNED_OUT") {
      // Forward to profile
      navigate('/profile')
    } else {
      // Forward to home
      navigate('/')
    }
  })

  return(
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa}}
          theme="dark"
        />
      </header>
    </div>
    )

}

export default Login
