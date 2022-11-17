import supabase from "../config/supabaseClient"

const Auth = () => {
  return (
    <div className="page auth">
      <form>
        <label htmlFor="email">Email:</label>
        <input
        type="text"
        id="email"
        />

        <label htmlFor="password">Password:</label>
        <input
        type="text"
        id="password"
        />

        <button>Login</button>

      </form>
    </div>
    )
}

export default Auth
