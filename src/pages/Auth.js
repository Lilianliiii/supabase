import { supabase } from "../config/supabaseClient"
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  // Using supabase autheorization functions
  supabase.auth.onAuthStateChange(async (e) => {
    if (e !== "SIGNED_OUT") {
      // Forward to profile
      navigate('/profile')
    } else {
      // Forward to home
      navigate('/')
    }
  })

}

export default Login
