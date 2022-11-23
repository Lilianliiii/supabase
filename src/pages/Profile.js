import { useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"

const Profile = () => {

  // Get current user and signOut function from auth
  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  const handleSignOut = async (e) => {

    // Ends user session
    await signOut()

    // Redirects the user to Login page
    navigate('/')
  }


  return (
    <div>
      <p>Welcome, {user?.id}!</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

export default Profile
