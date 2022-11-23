import { createClient } from '@supabase/supabase-js'

const Profile = () => {

  const handleSignOut = async (e) => {

  }


  return (
    <div>
      <p>Welcome!</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

export default Profile
