import { createClient } from '@supabase/supabase-js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
)

const Profile = () => {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile Page</h1>
      </header>
    </div>
  )
}

export default Profile
