import { createClient } from '@supabase/supabase-js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'
// import { supabase } from "../config/supabaseClient"

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
)

const Login = () => {
  const navigate = useNavigate()

  // Using supabase authorization functions
  supabase.auth.onAuthStateChange(async (e) => {
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
          // providers={["github"]}
        />
      </header>
    </div>
    )

}

export default Login
